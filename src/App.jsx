import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const contacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox setSearch={setSearch} search={search} />
      <ContactList contacts={contacts} search={search} />
    </div>
  );
}

export default App;
