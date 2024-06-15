import { useState } from "react";
import "./App.css";

import markWebberImg from "./assets/images/avatar-mark-webber.webp";
import angelaGrayImg from "./assets/images/avatar-angela-gray.webp";
import jacobThompsonImg from "./assets/images/avatar-jacob-thompson.webp";
import rizkyHasanuddinImg from "./assets/images/avatar-rizky-hasanuddin.webp";
import kimberlySmithImg from "./assets/images/avatar-kimberly-smith.webp";
import nathanPetersonImg from "./assets/images/avatar-nathan-peterson.webp";
import annaKimImg from "./assets/images/avatar-anna-kim.webp";
import chess from "./assets/images/image-chess.webp";

import Header from "./components/Header";
import Notifications from "./components/Notifications";

const initialNotifications = [
  {
    id: 1,
    image: markWebberImg,
    name: "Mark Webber",
    details: "reacted to your recent post",
    message: null,
    link: "My first tournament today!",
    linkImg: null,
    time: "1m ago",
    read: false,
  },
  {
    id: 2,
    image: angelaGrayImg,
    name: "Angela Gray",
    details: "followed you",
    message: null,
    link: null,
    linkImg: null,
    time: "5m ago",
    read: false,
  },
  {
    id: 3,
    image: jacobThompsonImg,
    name: "Jacob Thompson",
    details: "has joined your group",
    message: null,
    link: "Chess club",
    linkImg: null,
    time: "1 day ago",
    read: false,
  },
  {
    id: 4,
    image: rizkyHasanuddinImg,
    name: "Rizky Hasanuddin",
    details: "sent you a private message",
    message:
      "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    link: null,
    linkImg: null,
    time: "5 days ago",
    read: false,
  },
  {
    id: 5,
    image: kimberlySmithImg,
    name: "Kimberly Smith",
    details: "commented on your picture",
    message: null,
    link: null,
    linkImg: chess,
    time: "1 week ago",
    read: false,
  },
  {
    id: 6,
    image: nathanPetersonImg,
    name: "Nathan Peterson",
    details: "reacted to your recent post",
    message: null,
    link: "5 end-game strategies to increase your win rate",
    linkImg: null,
    time: "2 weeks ago",
    read: false,
  },
  {
    id: 7,
    image: annaKimImg,
    name: "Anna Kim",
    details: "left the group",
    message: null,
    link: "Chess Club",
    linkImg: null,
    time: "2 weeks ago",
    read: false,
  },
];

function App() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const readAllNotifications = () => {
    setNotifications((notifications) =>
      notifications.map((notification) => {
        return { ...notification, read: true };
      })
    );
  };

  const setNotificationsHandler = (selected) => {
    setNotifications((notifications) => {
      return notifications.map((notification) => {
        return selected?.name === notification.name
          ? { ...notification, read: true }
          : notification;
      });
    });
  };

  return (
    <div className="App">
      <Header onReadAllNotifications={readAllNotifications} />
      <Notifications
        notifications={notifications}
        onSelectNotification={setNotificationsHandler}
      />
    </div>
  );
}

export default App;
