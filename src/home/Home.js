import React, { useState, useEffect } from 'react';
import { API, Storage, Auth } from 'aws-amplify';
import '../App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from '../graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from '../graphql/mutations';
import Button from '@material-ui/core/Button';

const initialFormState = { name: '', description: '' };

function Home() {
	const [notes, setNotes] = useState([]);
	const [formData, setFormData] = useState(initialFormState);

	useEffect(() => {
		fetchNotes();
	}, []);


	async function fetchNotes() {
		const apiData = await API.graphql({ query: listNotes });
		const notesFromAPI = apiData.data.listNotes.items;
		await Promise.all(notesFromAPI.map(async note => {
			if (note.image) {
				const image = await Storage.get(note.image);
				note.image = image;
			}
			return note;
		}))
		setNotes(apiData.data.listNotes.items);
	}

	async function createNote() {
		if (!formData.name || !formData.description) return;
		await API.graphql({ query: createNoteMutation, variables: {input: formData } });
		if (formData.image) {
			const image = await Storage.get(formData.image);
			formData.image = image;
		}
		setNotes([ ...notes, formData ]);
		setFormData(initialFormState);
	}

	async function deleteNote({ id }) {
		const newNotesArray = notes.filter(note => note.id !== id);
		setNotes(newNotesArray);
		await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
	}

	async function onChange(e) {
		if (!e.target.files[0]) return;
		const file = e.target.files[0];
		setFormData({ ...formData, image: file.name });
		await Storage.put(file.name, file);
		fetchNotes();
	}

	async function signOut() {
		try {
			await Auth.signOut();
		} catch (error) {
			console.log('error signing out: ', error);
		}
	}

	async function refreshPage() {
		window.location.forcedReload(false);
	}

    return (
      <div className="App">
        <h1>My Home Screen with Notes atm</h1>
          <input
		  	onChange={e => setFormData({ ...formData, 'name': e.target.value})}
			placeholder="Note name"
			value={formData.name}
        />
		<input
			onChange={e => setFormData({ ...formData, 'description': e.target.value})}
			placeholder="Note description"
			value={formData.description}
		/>
		<input
			type="file"
			onChange={onChange}
		/>
		<button onClick={createNote}>Create Note</button>
        <div style={{marginBottom: 30}}>
			{
				notes.map(note => (
					<div key={note.id || note.name}>
						<h2>{note.name}</h2>
						<p>{note.description}</p>
						<button onClick={() => deleteNote(note)}>Delete Note</button>
						{
							note.image && <img src={note.image} style={{width: 400}} />
						}
					</div>
				))
			}
		</div>
		<Button variant="contained" color="primary" onClick={() => {signOut() }}>
			Sign out
		</Button>
      </div>
    );
}

export default withAuthenticator(Home);