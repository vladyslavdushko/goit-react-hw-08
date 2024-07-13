import Contact from '../Contact/Contact';

const ContactList = ({ contacts, search }) => {
  return (
    <ul>
      {contacts
        .filter((contact) => contact.name.toLowerCase().includes(search))
        .map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

export default ContactList;
