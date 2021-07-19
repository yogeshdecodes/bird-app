import React from 'react';

const Layout = ({ title, children }) => {
  return (
    <div className="wrapper">
      <div className="row">
        <nav className="col-2">
          <div className="logo">
            <a className="blue " href="/">
              <img src="/images/twitter.png" alt="logo" />
            </a>
          </div>
          <a href="/">
            <i className="fas fa-home"></i>
          </a>
          <a href="/search">
            <i className="fas fa-search"></i>
          </a>
          <a href="/notifications">
            <i className="fas fa-bell"></i>
          </a>
          <a href="/messages">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="/profile">
            <i className="fas fa-user"></i>
          </a>
          <a href="/signout">
            <i className="fas fa-sign-out-alt"></i>
          </a>
        </nav>
        <div className="mainSectionContainers col-10 col-md-8 col-lg-6">
          <div className="titleContainer">
            <h1>{title}</h1>
          </div>
          {children}
        </div>
        <div className=" d-none d-md-block col-2 col-lg-4"></div>
      </div>
    </div>
  );
};

export default Layout;
