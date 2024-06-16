import "./Item.css";

const Item = ({ item, onClick }) => {
  return (
    <div
      className={`item ${!item.read ? "unread" : ""}`}
      onClick={() => onClick(item)}
    >
      <img className="item__image" src={item.image} alt={item.name} />
      <div className="item__details-box">
        <p>
          <span className="item__name ff-body-bold">{item.name}</span>
          &nbsp;
          <span className="item__details ff-body">{item.details}</span>
          &nbsp;
          <a href="./" className="item__link ff-body-bold">
            {item.link}
          </a>
          {!item.read && <span className="item__unread">&nbsp;</span>}
        </p>
        <p className="item__time ff-body">{item.time}</p>
        {item.message && (
          <p className="item__message ff-body">{item.message}</p>
        )}
      </div>
      {item.linkImg && (
        <img className="item__linkImg" src={item.linkImg} alt="" />
      )}
    </div>
  );
};

export default Item;
