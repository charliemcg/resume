import React from "react";
import "./styles.css";
import strings from "./strings";

const { workHistoryItems } = strings;

const getWorkHistoryItems = ({ item, i }) => {
  return (
    <div key={i} id="work-history-item">
      <div id="work-history-item-wrapper">
        <div id="work-history-item-job">{item.job}</div>
        <div className="date">{item.date}</div>
      </div>
      <div> {item.company}</div>
      <div id="work-history-item-points">
        {item.points.map((point, i) => (
          <div key={i} id="work-history-item-point-wrapper">
            <div style={{ flex: 1 }}>&#8226; </div>
            <div style={{ flex: 16 }}>{point}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

function MainContent() {
  return (
    <div id="main-content-background">
      <div id="main-content">
        {/* header */}
        <div id="header">
          <div id="name">{strings.name}</div>
          <div id="role">{strings.role}</div>
        </div>
        {/* summary */}
        <div id="summary-wrapper">
          <div id="summary-title" className="title">
            {strings.summaryTitle}
          </div>
          <div id="summary-content">{strings.summaryContent}</div>
        </div>
        {/* programming experience */}
        <div id="programming-experience-wrapper">
          <div id="programming-experience-title" className="title">
            {strings.programmingExperienceTitle}
          </div>
          <div id="programming-experience-app-developer-wrapper">
            <div id="programming-experience-app-developer">
              {strings.programmingExperienceAppDeveloper}
            </div>
            <div
              id="programming-experience-app-developer-date"
              className="date"
            >
              {strings.programmingExperienceAppDeveloperDate}
            </div>
          </div>
          <ul id="programming-experience-apps">
            {strings.programmingExperienceApps.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div id="programming-experience-youtube-wrapper">
            <div id="programming-experience-youtube">
              {strings.programmingExperienceYoutube}
            </div>
            <div id="programming-experience-youtube-date" className="date">
              {strings.programmingExperienceYoutubeDate}
            </div>
          </div>
          <div id="programming-experience-youtube-description">
            {strings.programmingExperienceYoutubeDescription}
          </div>
        </div>
        {/* work history */}
        <div id="work-history-wrapper">
          <div id="work-history-title" className="title">
            {strings.workHistoryTitle}
          </div>
          {workHistoryItems.map((item, i) => getWorkHistoryItems({ item, i }))}
          {/* <div id="work-history-security-analyst-wrapper">
            <div id="work-history-security-analyst">
              {strings.workHistorySecurityAnalyst}
            </div>
            <div id="work-history-security-analyst-date" className="date">
              {strings.workHistorySecurityAnalystDate}
            </div>
          </div>
          <div id="work-history-security-analyst-company">
            {strings.workHistorySecurityAnalystCompany}
          </div>
          <ul id="work-history-security-analyst-points">
            {strings.workHistorySecurityAnalystPoints.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
          <div id="work-history-sales-associate-wrapper">
            <div id="work-history-sales-associate">
              {strings.workHistorySalesAssociate}
            </div>
            <div id="work-history-sales-associate-date" className="date">
              {strings.workHistorySalesAssociateDate}
            </div>
          </div>
          <div id="work-history-sales-associate-company">
            {strings.workHistorySalesAssociateCompany}
          </div>
          <ul id="work-history-sales-associate-points">
            {strings.workHistorySalesAssociatePoints.map((point) => (
              <li>{point}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
