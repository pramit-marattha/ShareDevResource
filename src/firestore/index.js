import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  await auth.signInWithPopup(provider);
  window.location.reload();
}

export function checkAuthentication(userCallBack) {
  return auth.onAuthStateChanged(userCallBack);
}

export async function logOut() {
  await auth.signOut();
  window.location.reload();
}

export async function getCollection(id) {
  const snapshot = await db.collection(id).get();
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(data);
}

export async function getUserTopiclists(userId) {
  const snapshot = await db
    .collection("topiclists")
    .where("author", "==", userId)
    .get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

function uploadTopicImage(file) {
  const uploadTask = storage
    .ref(`images/${file.name}-${file.lastModified}`)
    .put(file);
  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => console.log("Image Uploading", snapshot),
      reject,
      () => {
        storage
          .ref("images")
          .child(`${file.name}-${file.lastModified}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
}

export async function createTopicLists(list, user) {
  const { name, image, description } = list;
  await db.collection("topiclists").add({
    name,
    description,
    image: image ? await uploadTopicImage(image) : null,
    created: firebase.firestore.FieldValue.serverTimestamp(),
    author: user.uid,
    userIds: [user.uid],
    users: [
      {
        id: user.uid,
        name: user.displayName,
      },
    ],
  });
}

export async function getList(listId) {
  try {
    const topiclist = await db.collection("topiclists").doc(listId).get();
    if (!topiclist.exists) throw Error("Topic does not exists");
    return topiclist.data();
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
}

export async function createTopicListItem({ user, listId, item }) {
  try {
    const response = await fetch(
      `https://shot.screenshotapi.net/screenshot?token=X1Z8STW-9B1MF0H-JZEN9SV-1NDCMSY&url=${item.link}`
    );
    const { screenshot } = await response.json();
    db.collection("topiclists")
      .doc(listId)
      .collection("items")
      .add({
        name: item.name,
        link: item.link,
        image: screenshot,
        created: firebase.firestore.FieldValue.serverTimestamp(),
        author: {
          id: user.uid,
          username: user.displayName,
        },
      });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export function subscriptionTopicListItems(listId, cb) {
  return db
    .collection("topiclists")
    .doc(listId)
    .collection("items")
    .orderBy("created", "desc")
    .onSnapshot(cb)
}
