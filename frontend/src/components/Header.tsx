const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-placeholder">TF</div>
        <h1 className="app-name">TaskFlow</h1>
      </div>
      <button className="btn btn-logout">Logout</button>
    </header>
  );
};

export default Header;