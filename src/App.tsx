import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ContactList from './components/ContactList/ContactList'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<ContactList/>}/>
      </Routes>
    </Layout>
  )
}

export default App
