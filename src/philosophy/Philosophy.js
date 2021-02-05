import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function Philosophy() {
    return (
        <h1>Philosophy!</h1>
    );
}

export default withAuthenticator(Philosophy);