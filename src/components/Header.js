function Header(props) {
  return (
    <header className="header">
      <div
        role="img"
        aria-label="Around The U.S."
        className="header__logo"
      ></div>
      {props.children}
    </header>
  );
}

export default Header;
