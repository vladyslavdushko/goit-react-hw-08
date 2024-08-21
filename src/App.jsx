import './App.css';
import AppBar from './components/AppBar/AppBar';
import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading/Loading';

const Home = lazy(() => import('./pages/Home/Home'));
const ContactList = lazy(() => import('./components/ContactList/ContactList'));
const Register = lazy(() => import('./pages/Registration/Register'));
const Login = lazy(() => import('./pages/Login/Login'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <div className="container">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<ContactList />} />
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
