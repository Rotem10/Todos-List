import { NavLink } from 'react-router-dom';

export function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg bg-light mb-3'>
      <div className='container-fluid'>
        <span className='navbar-brand'>Todo</span>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink
              aria-current='page'
              to='home'
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link '
              }>
              Home
            </NavLink>
            <NavLink
              to='my-list'
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link '
              }>
              My List
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
