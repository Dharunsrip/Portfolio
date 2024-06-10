import React from "react";
import "./Skillsinfocard.css";

const SkillsInfoCard =({ heading, skills }) => {
    return <div className="skills-info-card">
        <h2 className="Paragraph">{heading}</h2>
        <div className="skills-info-content">
            {skills.map((item, index) => (
                <React.Fragment key={`skill ${index}`}>
                    <div className="skill-info">
                        <p>{item.skill}</p>
                        <p className="percentage">{item.percentage}</p>
                    </div>
                    <div className="skill-progress-bg">
                        <div className="skill-progress" style={{ width: item.percentage }} />
                    </div>
                </React.Fragment>
            ))}
        </div>
    </div>
};
export default SkillsInfoCard;
