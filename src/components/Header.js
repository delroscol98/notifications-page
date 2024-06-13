import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <section className="header__box">
        <h1 className="header__heading heading">Notifications</h1>
        <span className="header__number ff-body-bold">3</span>
      </section>
      <button className="header__button ff-body">Mark all as read</button>
    </header>
  );
};

export default Header;