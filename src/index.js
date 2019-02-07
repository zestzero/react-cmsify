import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/Layout';
import * as serviceWorker from './serviceWorker';
import Firebase from './services/firebaseService';
import FirebaseContext from './context/firebase';

import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <Layout />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
