// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDA7SIgpYh7yINE6v1caN0aWSgAmrvEMS4',
  authDomain: 'quiz-islamic-267ed.firebaseapp.com',
  projectId: 'quiz-islamic-267ed',
  storageBucket: 'quiz-islamic-267ed.appspot.com',
  messagingSenderId: '430905160475',
  appId: '1:430905160475:web:105db4642dee9f530d99be',
  measurementId: 'G-EVNY239216',
};

provider.setCustomParameters({
  prompt: 'select_account ',
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const signInWithGooglePopup = async () => {
  try {
    await signInWithPopup(auth, provider);

    toast.success("Your're successfully authenticated");
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error('Something is wrong');
    }
  }
};

export default app;
