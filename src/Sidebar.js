import React from "react";
import "./styles.css";
import strings from "./strings";
import locationIcon from "./assets/pin.png";
import phoneIcon from "./assets/phone.png";
import emailIcon from "./assets/mail.png";
import playStoreIcon from "./assets/PlayStoreIcon.png";
import appStoreIcon from "./assets/AppStoreIcon.png";
import githubIcon from "./assets/GithubIcon.png";
import youtubeIcon from "./assets/YoutubeIcon.png";

function SideBar() {
  return (
    <div id="sidebar">
      {/* contact */}
      <div id="contact-wrapper">
        <div className="contact-attribute-wrapper">
          <div className="icon-wrapper">
            <img src={locationIcon} alt="" style={{ height: "20px" }} />
          </div>
          <div className="link">{strings.contactLocation}</div>
        </div>
        <div className="contact-attribute-wrapper">
          <div className="icon-wrapper">
            <img src={phoneIcon} alt="" style={{ height: "20px" }} />
          </div>
          <div className="link">{strings.contactPhone}</div>
        </div>
        <div className="contact-attribute-wrapper">
          <div className="icon-wrapper">
            <img src={emailIcon} alt="" style={{ height: "20px" }} />
          </div>
          <div className="link">{strings.contactEmail}</div>
        </div>
      </div>
      {/* links */}
      <div id="links-wrapper">
        <div className="link-attribute-wrapper">
          <div className="icon-wrapper">
            <img src={playStoreIcon} alt="" className="img" />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={strings.linksAndroid}
            className="link"
          >
            {strings.linksAndroid}
          </a>
        </div>
        <div className="link-attribute-wrapper">
          <div className="icon-wrapper">
            <img src={appStoreIcon} alt="" className="img" />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={strings.linksIos}
            className="link"
          >
            {strings.linksIos}
          </a>
        </div>
        <div className="link-attribute-wrapper">
          <div className="icon-wrapper">
            <img src={githubIcon} alt="" className="img" />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={strings.linksGithub}
            className="link"
          >
            {strings.linksGithub}
          </a>
        </div>
        <div className="link-attribute-wrapper">
          <div className="icon-wrapper">
            <img src={youtubeIcon} alt="" className="img" />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={strings.linksYoutube}
            className="link"
          >
            {strings.linksYoutube}
          </a>
        </div>
      </div>
      {/* education */}
      <div id="education-wrapper">
        <div id="education-title" class="title">
          {strings.educationTitle}
        </div>
        <div id="education-degree">{strings.educationDegree}</div>
        <div id="education-institution">{strings.educationInstitution}</div>
        <div id="education-gpa">{strings.educationGpa}</div>
      </div>
      {/* skills */}
      <div id="skills-wrapper">
        <div id="skills-title">
          <div>{strings.skillsTitle}</div>
        </div>
        <ul id="skills">
          {strings.skills.map((skill) => (
            <li id="skill-point">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
