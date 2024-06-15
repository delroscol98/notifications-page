import "./Notifications.css";

import markWebberImg from "../assets/images/avatar-mark-webber.webp";
import angelaGrayImg from "../assets/images/avatar-angela-gray.webp";
import jacobThompsonImg from "../assets/images/avatar-jacob-thompson.webp";
import rizkyHasanuddinImg from "../assets/images/avatar-rizky-hasanuddin.webp";
import kimberlySmithImg from "../assets/images/avatar-kimberly-smith.webp";
import nathanPetersonImg from "../assets/images/avatar-nathan-peterson.webp";
import annaKimImg from "../assets/images/avatar-anna-kim.webp";
import chess from "../assets/images/image-chess.webp";

import Item from "./Item";

const notifications = [
  {
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

const Notifications = () => {
  return (
    <div className="notifications">
      {notifications.map((item) => {
        return <Item item={item} key={item.name} />;
      })}
    </div>
  );
};

export default Notifications;
