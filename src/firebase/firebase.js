import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateAvatarResolve } from "../redux/auth/slice";

const {
  REACT_APP_APIKEY_FIRE,
  REACT_APP_AUTHDOMAIN,
  REACT_APP_PROJECTID,
  REACT_APP_STORAGEBUCKET,
  REACT_APP_MESSAGING,
  REACT_APP_APPID,
  REACT_APP_MEASUREMENT,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_APIKEY_FIRE,
  authDomain: REACT_APP_AUTHDOMAIN,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_MESSAGING,
  appId: REACT_APP_APPID,
  measurementId: REACT_APP_MEASUREMENT,
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
        `https://back-kapusta.onrender.com/api/auth/users/avatars`,
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
