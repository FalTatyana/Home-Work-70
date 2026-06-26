import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container d-flex ">
        <Link className="navbar-brand" to={'/'}>Contacts</Link>
        <NavLink className="btn btn-outline-success" to={'/new-contact'}>Add new contact</NavLink>
      </div>
    </nav>
  )
}

export default Header