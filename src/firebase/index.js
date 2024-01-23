import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';

const provider = new GoogleAuthProvider();
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
