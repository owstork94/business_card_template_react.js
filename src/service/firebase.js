const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREEBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREEBASE_AUTH_DOMAIN,
    darabaseURl: process.env.REACT_APP_FIREEBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREEBASE_PROJECT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);