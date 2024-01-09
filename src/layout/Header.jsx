import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
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

  const handleContact = () => {
    navigate('/contact');
  };

  const handleHistory = () => {
    navigate('/info');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MosqueIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          {isLoggedIn && (
            <>
              <Button color="inherit" onClick={handleAboutUs}>
                About
              </Button>
              <Button color="inherit" onClick={handleContact}>
                Contact
              </Button>
              <Button color="inherit" onClick={handleHistory}>
                History
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                <MeetingRoomIcon />
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
