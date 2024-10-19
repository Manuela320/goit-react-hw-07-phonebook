import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Contact Book</h1>
        <ContactForm />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;