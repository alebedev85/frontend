import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { setUser } from '../../redux/slices/authSlice';
import { LoginFormData } from './types';
import { useSignInMutation, useGetCurrentUserQuery } from './api';
import leftTriangle from '../../assets/left_triangle.svg';
import topCircle from '../../assets/top_circle.svg';
import bottomRectangle from '../../assets/bottom_rectangle.svg';
import { BEARER_KEY } from '../../utils/const';
import styles from './AuthPage.module.scss';

function AuthPage() {
  const dispatch = useAppDispatch();
  const { data: currentUser } = useGetCurrentUserQuery();
  const [signIn] = useSignInMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    defaultValues: { username: '', password: '' },
    mode: 'onChange',
  });

  const mockLogin = () => {
    dispatch(
      setUser({
        email: 'test',
        id: 1,
        username: 'test',
      })
    );
    navigate('/', { replace: true });
  };

  const onSubmit = async (data: LoginFormData) => {
    signIn(data)
      .unwrap()
      .then(({ access }) => {
        localStorage.setItem(BEARER_KEY, `Bearer ${access}`);
      })
      .then(() => {
        currentUser && dispatch(setUser(currentUser));
        navigate('/', { replace: true });
      })
      .catch(() => {
        setError('username', { message: 'Invalid username or password' });
        setError('password', { message: 'Invalid username or password' });
        mockLogin();
      });
  };

  return (
    <div className={styles.authPage}>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="320px"
        paddingTop="172px"
        margin="auto"
      >
        <h1 className={styles.authPage__heading}>Войти</h1>
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '20px',
            }}
          >
            <InputLabel
              disableAnimation
              shrink={false}
              filled={false}
              focused={false}
              variant="standard"
              sx={{
                position: 'initial',
                color: 'white',
                marginBottom: '4px',
                textAlign: 'left',
                animation: 'none',
              }}
            >
              Логин
            </InputLabel>
            <Input
              disableUnderline
              sx={{
                backgroundColor: 'white',
                height: '40px',
                borderRadius: '4px',
                border: '1px solid var(--Black-100, #DDE0E4)',
                padding: '10px 12px',
              }}
              {...register('username', {
                required: 'Username is required',
              })}
            />
            <FormHelperText
              className={styles.authPage__formError}
              error
              sx={{ textAlign: 'left', margin: '0', height: '12px' }}
            >
              {errors.username?.message}
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel
              disableAnimation
              shrink={false}
              filled={false}
              focused={false}
              variant="standard"
              sx={{
                position: 'initial',
                color: 'white',
                marginBottom: '4px',
                textAlign: 'left',
                animation: 'none',
              }}
              className="authPage__form-label"
            >
              Пароль
            </InputLabel>
            <Input
              type="password"
              disableUnderline
              sx={{
                backgroundColor: 'white',
                height: '40px',
                borderRadius: '4px',
                border: '1px solid var(--Black-100, #DDE0E4)',
                padding: '10px 12px',
              }}
              {...register('password', { required: 'Password is required' })}
            />
            <FormHelperText
              className={styles.authPage__formError}
              error
              sx={{ textAlign: 'left', margin: '0', height: '12px' }}
            >
              {errors.password?.message}
            </FormHelperText>
          </FormControl>
          <Button
            variant="contained"
            type="submit"
            sx={{
              marginTop: '40px',
              width: '250px',
              fontSize: '16px',
              alignSelf: 'center',
            }}
          >
            Войти
          </Button>
        </Box>
      </Box>

      <img className={styles.authPage__leftTriangle} src={leftTriangle} />
      <img className={styles.authPage__topCircle} src={topCircle} />
      <img className={styles.authPage__bottomRectangle} src={bottomRectangle} />
    </div>
  );
}

export default AuthPage;
