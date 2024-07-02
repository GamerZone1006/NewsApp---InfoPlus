import React from 'react';

export default function Navbar(props) {
  const handleCategoryChange = (category, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    props.onCategoryChange(category);
  };

  return (
    <>
      <nav className={`navbar sticky-top navbar-expand-lg navbar-${props.mode} bg-body-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">InfoPlus</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {props.categories.map((category) => (
                <li className="nav-item" key={category}>
                  <a
                    className={`nav-link ${props.selectedCategory === category ? 'active' : ''}`}
                    aria-current={props.selectedCategory === category ? 'page' : undefined}
                    href="#"
                    onClick={(e) => handleCategoryChange(category, e)}
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Dark Mode' : 'Light Mode'}</label>
        </div>
      </nav>
    </>
  );
}