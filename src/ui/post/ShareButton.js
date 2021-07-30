import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramIcon,
  TelegramShareButton,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";

const ShareButton = ({ url, title }) => (
  <React.Fragment>
    <FacebookShareButton
      url={url}
      style={{ outline: "none" }}
      quote={`Check out this blog post from chrisdiorio.net! - ${title}`}
    >
      <FacebookIcon size="32px" round />
    </FacebookShareButton>
    <TwitterShareButton
      url={url}
      style={{ marginLeft: `15px`, outline: "none" }}
      title={title}
    >
      <TwitterIcon size="32px" round />
    </TwitterShareButton>
    <LinkedinShareButton
      url={url}
      style={{ marginLeft: `15px`, outline: "none" }}
      title={title}
      source={url}
    >
      <LinkedinIcon size="32px" round />
    </LinkedinShareButton>
    <TelegramShareButton
      url={url}
      style={{ marginLeft: `15px`, outline: "none" }}
      title={title}
    >
      <TelegramIcon size="32px" round />
    </TelegramShareButton>
    <FacebookMessengerShareButton
      url={url}
      style={{ marginLeft: `15px`, outline: "none" }}
    >
      <FacebookMessengerIcon size="32px" round />
    </FacebookMessengerShareButton>
    <EmailShareButton
      url={url}
      style={{ marginLeft: `15px`, outline: "none" }}
      subject={`"${title}" from chrisdiorio.net`}
      body={`Check out this blog post from chrisdiorio.net! - ${title}`}
      separator=" - "
    >
      <EmailIcon size="32px" round />
    </EmailShareButton>
  </React.Fragment>
);

export default ShareButton;
