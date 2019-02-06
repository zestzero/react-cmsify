import React from 'react';
import FirebaseContext from '../../context/firebase';

export const withFirebase = (Component: any) => (props: any) => (
    <FirebaseContext.Consumer>
        {(firebase) => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;
