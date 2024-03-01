import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MosqueIcon from '@mui/icons-material/Mosque';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { actionsAuth, selectorAuth } from '../redux/slices/auth';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { isLoggedIn } = useSelector(selectorAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(actionsAuth.signOut());
      toast.warning('You are not authenticated', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handleAboutUs = () => {
    navigate('/About');
  };

  const handleOku = () => {
    navigate('/oku');
  };

  const handleHistory = () => {
    navigate('/info');
  };

  const HandleQuiz = () => {
    navigate('/Quiz');
  };

  const HandleHome = () => {
    navigate('/home');
  };

  const HandleNamaz = () => {
    navigate('/намаз');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            startIcon={<MosqueIcon />}
            variant="contained"
            onClick={HandleHome}
          >
            Home
          </Button>
          <Box sx={{ flexGrow: 2 }} />

          {isLoggedIn && (
            <>
              <Button color="inherit" onClick={HandleQuiz}>
                Тест
              </Button>
              <Button color="inherit" onClick={handleHistory}>
                Тарых
              </Button>
              <Button color="inherit" onClick={HandleNamaz}>
                Намаз
              </Button>
              <Button color="inherit" onClick={handleOku}>
                Окуялар
              </Button>
              <Button color="inherit" onClick={handleAboutUs}>
                Биз жөнүндө
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                <MeetingRoomIcon />
              </Button>
            </>
          )}
        </Toolbar>
        <div
          style={{
            backgroundColor: 'black',
            padding: '0.4rem',
            textAlign: 'center',
          }}
        >
          Laa Ilaaha Illallah Muhammadur rasulAllah
        </div>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
