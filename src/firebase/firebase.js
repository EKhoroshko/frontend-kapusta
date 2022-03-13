import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateAvatarResolve } from "../redux/auth/slice";

const firebaseConfig = {
  apiKey: "AIzaSyCN3xqiNVUz28gEfzABeVw5cHet6Tdo5lg",
  authDomain: "store-kapusta.firebaseapp.com",
  projectId: "store-kapusta",
  storageBucket: "store-kapusta.appspot.com",
  messagingSenderId: "101613702644",
  appId: "1:101613702644:web:532d95573d115e8a70fda1",
  measurementId: "G-J18YNR3S9S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export const uploadImg = async (file, name, dispatch) => {
  await uploadBytes(ref(storage, name), file).then(async () => {
    await getDownloadURL(ref(storage, `${name}`)).then(function (url) {
      const token = localStorage.getItem("token");
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ avatarURL: url }),
      };
      fetch(
        `https://back-kapusta.herokuapp.com/api/auth/users/avatars`,
        options
      ).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      });
      dispatch(updateAvatarResolve(url));
    });
  });
};
