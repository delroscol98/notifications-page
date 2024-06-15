import "./Notifications.css";

import Item from "./Item";

const Notifications = ({ notifications, onSelectNotification }) => {
  return (
    <div className="notifications">
      {notifications.map((item) => {
        return (
          <Item item={item} key={item.id} onClick={onSelectNotification} />
        );
      })}
    </div>
  );
};

export default Notifications;
