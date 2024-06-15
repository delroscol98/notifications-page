import "./Notifications.css";

import Item from "./Item";

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications">
      {notifications.map((item) => {
        return <Item item={item} key={item.name} />;
      })}
    </div>
  );
};

export default Notifications;
