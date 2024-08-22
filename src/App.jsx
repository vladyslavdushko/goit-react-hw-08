import './App.css';
import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading/Loading';
import Layout from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const ContactList = lazy(() => import('./components/ContactList/ContactList'));
const Register = lazy(() => import('./pages/Registration/Register'));
const Login = lazy(() => import('./pages/Login/Login'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <div>
      <div>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<ContactList />} />
            </Route>
            <Route path="/registration" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
