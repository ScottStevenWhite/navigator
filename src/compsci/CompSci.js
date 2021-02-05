import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function CompSci() {
    return (
        <h1>Computer Science!</h1>
    );
}

export default withAuthenticator(CompSci);