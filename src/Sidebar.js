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

const contactItems = [
  { icon: locationIcon, label: strings.contactLocation },
  { icon: phoneIcon, label: strings.contactPhone },
  { icon: emailIcon, label: strings.contactEmail },
];

const linkItems = [
  {
    icon: playStoreIcon,
    link: strings.linksAndroid,
  },
  { icon: appStoreIcon, link: strings.linksIos },
  {
    icon: githubIcon,
    link: strings.linksGithub,
  },
  {
    icon: youtubeIcon,
    link: strings.linksYoutube,
  },
];

function SideBar() {
  return (
    <div id="sidebar">
      {/* contact */}
      <div id="contact-wrapper">
        {contactItems.map((item, i) => {
          return (
            <div key={i} className="contact-attribute-wrapper">
              <div className="icon-wrapper">
                <img src={item.icon} alt="" style={{ height: "20px" }} />
              </div>
              <div className="link">{item.label}</div>
            </div>
          );
        })}
      </div>
      {/* links */}
      <div id="links-wrapper">
        {linkItems.map((item, i) => {
          return (
            <div key={i} className="link-attribute-wrapper">
              <div className="icon-wrapper">
                <img src={item.icon} alt="" className="img" />
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
                className="link"
              >
                {item.link}
              </a>
            </div>
          );
        })}
      </div>
      {/* education */}
      <div id="education-wrapper">
        <div id="education-title" className="title">
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
          {strings.skills.map((skill, i) => (
            <li key={i} id="skill-point">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
