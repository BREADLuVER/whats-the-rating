// src/App.js
import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';  // Import the generated AWS config file
Amplify.configure(awsExports);

function App() {
  return (
    <AmplifyAuthenticator>
      <div>
        <h1>Welcome to Guess the Rating</h1>
        <AmplifySignIn headerText="Sign In" slot="sign-in"></AmplifySignIn>
        <AmplifySignUp headerText="Sign Up" slot="sign-up"></AmplifySignUp>
      </div>
    </AmplifyAuthenticator>
  );
}

export default app;
