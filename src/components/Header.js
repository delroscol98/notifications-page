import "./Header.css";

const Header = ({ numReadNotifications, onReadAllNotifications }) => {
  return (
    <header className="header">
      <section className="header__box">
        <h1 className="header__heading heading">Notifications</h1>
        {numReadNotifications.length !== 0 && (
          <span className="header__number ff-body-bold">
            {numReadNotifications.length}
          </span>
        )}
      </section>
      <button
        className="header__button ff-body"
        onClick={onReadAllNotifications}
      >
        Mark all as read
      </button>
    </header>
  );
};

export default Header;
