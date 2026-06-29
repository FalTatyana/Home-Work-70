import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ContactList from './components/ContactList/ContactList';
import EditContact from './components/EditContact/EditContact';
import FormContact from './components/FormContact/FormContact';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<ContactList />} />
        <Route path='/new-contact' element={<FormContact />} />
        <Route path='/edit-contact/:id' element={<EditContact />} />
      </Routes>
    </Layout>
  )
};

export default App;
