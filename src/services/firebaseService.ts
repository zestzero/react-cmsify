import app from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
};

class FirebaseService {
  private database: app.database.Database;
    public constructor() {
      app.initializeApp(config);
      this.database = app.database();
    }

    public getCmsData = async (id: number) => {
      const snapshot = await this.database.ref(`/cms/${id}`).once('value');
      return snapshot.val();
    }
}

export default FirebaseService;
