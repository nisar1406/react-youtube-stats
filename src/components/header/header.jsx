import React from "react";
import backButton from "../../assets/images/ArrowLeft.png";
import youtube from "../../assets/images/youtube.png";
import channelLogo from "../../assets/images/channel-logo.png";
import { intToString } from "../../utils/helper";

const Header = ({ data }) => (
  <div className="header section__padding">
    <div className="header__top-section">
      <img src={backButton} alt="back_button" />
      <div className="header__title">
        <h1>Youtube Stats</h1>
        <img src={youtube} alt="youtube_icon" />
      </div>
    </div>
    <div className="header__channel">
      <img src={channelLogo} alt="channel_logo" />
      <div className="header__channel-details">
        <p>{data?.channelName}</p>
        <div className="header__channel-stats">
          <p>{`${intToString(data?.subscribersCount)} subscribers`}</p>.
          <p>{`${data?.videoCount} videos`}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
