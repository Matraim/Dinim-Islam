import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
} from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import { signInWithGooglePopup } from '../firebase';

const LoginForm = ({ onSignIn, onSignUp }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      city: '',
      email: '',
      password: '',
      gender: 'male',
    },
    onSubmit: async (values) => {
      try {
        if (!values.name || !values.email || !values.password) {
          console.error('Please fill in all required fields');
          return;
        }

        if (isSignIn) {
          await onSignIn(values.email, values.password);
        } else {
          await onSignUp(
            values.name,
            values.city,
            values.email,
            values.password,
            values.gender
          );
        }

        const userData = JSON.parse(localStorage.getItem('userData')) || [];
        userData.push(values);
        localStorage.setItem('userData', JSON.stringify(userData));

        navigate('/quiz');
      } catch (error) {
        console.error('Authentication error:', error);
      }
    },
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
      <form onSubmit={formik.handleSubmit} style={styles.form}>
        {!isSignIn && (
          <div style={styles.inputWrapper}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              margin="normal"
              required
            />
          </div>
        )}
        {!isSignIn && (
          <div style={styles.inputWrapper}>
            <TextField
              fullWidth
              id="city"
              name="city"
              label="City"
              onChange={formik.handleChange}
              value={formik.values.city}
              margin="normal"
            />
          </div>
        )}
        <div style={styles.inputWrapper}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            margin="normal"
            required
          />
        </div>
        <div style={styles.inputWrapper}>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            margin="normal"
            required
          />
        </div>
        {!isSignIn && (
          <div style={styles.inputWrapper}>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={styles.button}
        >
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </Button>
        <p style={styles.toggleText} onClick={() => setIsSignIn(!isSignIn)}>
          {isSignIn
            ? "Don't have an account? Sign Up"
            : 'Already have an account? Sign In'}
        </p>
        <div
          style={styles.googleSignInContainer}
          onClick={signInWithGooglePopup}
        >
          <span>Войти с помощью</span>
          <IconButton color="primary">
            <GoogleIcon />
          </IconButton>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputWrapper: {
    marginBottom: '15px',
  },
  button: {
    marginTop: '20px',
  },
  toggleText: {
    textAlign: 'center',
    cursor: 'pointer',
    color: '#007bff',
    marginTop: '10px',
  },
  googleSignInContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
    backgroundColor: '#f5f5f5',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default LoginForm;
