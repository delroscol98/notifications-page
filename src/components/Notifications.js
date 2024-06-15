import "./Notifications.css";

import markWebberImg from "../assets/images/avatar-mark-webber.webp";
import angelaGrayImg from "../assets/images/avatar-angela-gray.webp";
import jacobThompsonImg from "../assets/images/avatar-jacob-thompson.webp";
import rizkyHasanuddinImg from "../assets/images/avatar-rizky-hasanuddin.webp";
import kimberlySmithImg from "../assets/images/avatar-kimberly-smith.webp";
import nathanPetersonImg from "../assets/images/avatar-nathan-peterson.webp";
import annaKimImg from "../assets/images/avatar-anna-kim.webp";

const notifications = [
  {
    image: { markWebberImg },
    name: "Mark Webber",
    details: "reacted to your recent post",
    message: null,
    link: "My first tournament today!",
    time: "1m ago",
  },
  {
    image: { angelaGrayImg },
    name: "Angela Gray",
    details: "followed you",
    message: null,
    link: null,
    time: "5m ago",
  },
  {
    image: { jacobThompsonImg },
    name: "Jacob Thompson",
    details: "has joined your group",
    message: null,

    link: "Chess club",
    time: "1 day ago",
  },
  {
    image: { rizkyHasanuddinImg },
    name: "Rizky Hasanuddin",
    details: "sent you a private message",
    message:
      "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    link: null,
    time: "5 days ago",
  },
  {
    image: { kimberlySmithImg },
    name: "Kimberly Smith",
    details: "commented on your picture",
    message: null,
    link: null,
    time: "1 week ago",
  },
  {
    image: { nathanPetersonImg },
    name: "Nathan Peterson",
    details: "reacted to your recent post",
    message: null,
    link: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
  },
  {
    image: { annaKimImg },
    name: "Anna Kim",
    details: "left the group",
    message: null,
    link: "Chess Club",
    time: "2 weeks ago",
  },
];

const Notifications = () => {
  return (
    <div className="notifications">
      <div className="notification unread">
        <img
          className="notification__image"
          src={markWebberImg}
          alt="Mark Webber"
        />
        <div className="notification__details-box">
          <p>
            <span className="notification__name ff-body-bold">Mark Webber</span>
            &nbsp;
            <span className="notification__details ff-body">
              reacted to your recent post
            </span>
            &nbsp;
            <a href="#" className="notification__link ff-body-bold">
              My first tournament today!
            </a>
            <span className="notification__unread">&nbsp;</span>
          </p>
          <p className="notification__time ff-body">1m ago</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
