import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDVSEBJ-DKMVs__ZlbHRqPxapr_6c_RrAo",
  authDomain: "cloth-shop-1c1bd.firebaseapp.com",
  projectId: "cloth-shop-1c1bd",
  storageBucket: "cloth-shop-1c1bd.appspot.com",
  messagingSenderId: "1022218149124",
  appId: "1:1022218149124:web:5a1088d2381bcfa9250451",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // get the current LoggedIn user UID
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  // check if the user exists in the DBB
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // GET objectOfSnapshot.data()
    try {
      // POST
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

// WRITE TO the DATABASE
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log("collectionRef", collectionRef);
  // create one single POST to the DBB
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    // random generate ID
    const newDocRef = collectionRef.doc();
    // console.log("new ID", newDocRef);
    batch.set(newDocRef, obj);
  });
  // batch1, batch2, etc
  return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
