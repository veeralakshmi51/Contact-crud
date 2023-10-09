import React, { useState } from 'react';
import './ContactList.css';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', number: '' });
  const [editingIndex, setEditingIndex] = useState(-1);

  const addContact = () => {
    if (newContact.name && newContact.number) {
      setContacts([...contacts, newContact]);
      setNewContact({ name: '', number: '' });
    }
  };

  const editContact = (index) => {
    const editedContact = contacts[index];
    setNewContact({ ...editedContact });
    setEditingIndex(index);
  };

  const updateContact = () => {
    if (newContact.name && newContact.number) {
      const updatedContacts = [...contacts];
      updatedContacts[editingIndex] = newContact;
      setContacts(updatedContacts);
      setNewContact({ name: '', number: '' });
      setEditingIndex(-1);
    }
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div>
        
      <h1>Contact List</h1>
      <input
        type="text"
        placeholder="Name"
        value={newContact.name}
        onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Number"
        value={newContact.number}
        onChange={(e) => setNewContact({ ...newContact, number: e.target.value })}
      />
      {editingIndex === -1 ? (
        <button onClick={addContact}>Add</button>
      ) : (
        <button onClick={updateContact}>Update</button>
      )}
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.number}
            <button onClick={() => editContact(index)}>Edit</button>
            <button onClick={() => deleteContact(index)}>Delete</button>
          </li>
        ))}
      </ul>
     
    </div>
  );
}

export default ContactList;
