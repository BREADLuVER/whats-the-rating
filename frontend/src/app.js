// src/App.js
import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <AmplifyAuthenticator>
      <div>
        <h1>Guess the Rating</h1>
        <AmplifySignIn headerText="Sign In" slot="sign-in">
          <div slot="secondary-footer-content">
            Don't have an account? <a href="/signup">Sign up here</a>
          </div>
        </AmplifySignIn>
        <AmplifySignUp
          headerText="Sign Up"
          slot="sign-up"
          formFields={[
            { type: "username" },
            { type: "password" },
            { type: "email" }
          ]}
        />
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;

