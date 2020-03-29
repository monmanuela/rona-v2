import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MSG_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

let article = {
  title: 'Netflix Party',
  description: 'Netflix Party is a new way to watch Netflix with your friends online. Netflix Party synchronizes video playback and adds group chat to your favorite Netflix shows.',
  link: 'https://www.netflixparty.com/',
  tags: [
    "entertainment",
    "zoomer",
    "free",
  ],
  image: "https://lh3.googleusercontent.com/tzwGvR7pMqR6dumQ-YJImEcj4bV3Seu0I0QTrsg7_v2CyXyC2E15F6k-T2uNYXBQgiUVuTVt=w640-h400-e365"
};

// Returns a promise, create a new article
function createNewArticle(article) {
  console.log("HELLOOOOOOO - CREATE NEW ARTICLE");
  return db.collection('articles').add(article);
}

export const testing = function() {
  console.log("HELLOOOOOOO - TESTING");
  let addArticle = createNewArticle(article).then(ref => {
    console.log("Added a new article: ", ref.id)
  });
  console.log(addArticle);
};

export default db;

