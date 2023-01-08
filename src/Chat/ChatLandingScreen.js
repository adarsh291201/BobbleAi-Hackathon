import React from "react";
import LaptopIcon from "@material-ui/icons/Laptop";
import Divider from "@material-ui/core/Divider";
import technica from "../images/technica.jpg";
import boobleAi from "../images/boobleAi.png";
import "./ChatLandingScreen.css";
import Zoom from "@material-ui/core/Zoom";

function ChatLandingScreen({ showLandingScreenPhoto }) {
  return (
    <div className="chat-landing-screen">
      <div>
        {/* <Zoom
          in={showLandingScreenPhoto}
          style={{ transitionDelay: showLandingScreenPhoto ? "300ms" : "0ms" }}
        > */}
          <img
            className="chat-landing-screen__photo"
            src={technica}
            alt="technica"
          /><img className="boble-img" src={boobleAi} alt="bobbleAi"/>
          
          
        {/* </Zoom> */}
      </div>

      <div className="chat-landing-screen__title">
        <p>Bobble AI Web Chat Application </p>
      </div>

      <div>
        <p>
          This is a Web based Chat room in which you can connect with your friends.
        </p>
      </div>

      <Divider />

      <div className="chat-landing-screen__footer">
        <LaptopIcon />
        
      </div>
    </div>
  );
}

export default ChatLandingScreen;