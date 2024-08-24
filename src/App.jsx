import './App.css';
import { Route, Routes } from 'react-router';
import { lazy, Suspense, useEffect } from 'react';
import Loading from './components/Loading/Loading';
import Layout from './components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from './redux/auth/operations';
import PrivateRoute from './routes/PrivateRoute';
import RestrictedRoute from './routes/RestrictedRoute';
import { selectIsRefreshing } from './redux/auth/selectors';

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const Register = lazy(() => import('./pages/Registration/RegistrationPage'));
const Login = lazy(() => import('./pages/Login/LoginPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  const refreshing = useSelector(selectIsRefreshing);
  return refreshing ? null : (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <Register />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <Login />
              </RestrictedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
