import "./WorkCardStyles.css";
import React from 'react';
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div  className="work-container">
      <h1 className="project-heading">PROJECTS</h1>
        <div className="project-contianer">
            {WorkCardData.map((val, ind)=>{
                 return(
                    <WorkCard
                 key={ind}
                 imgsrc={val.imgsrc}
                 title={val.title}
                 text={val.text}
                 view={val.view}
                 source={val.source}
                 />
                 )
            })}    {/* here ind is the index of array created in workcarddata project1 is index 0 and so on */}

        </div>
    </div>
  );
};

export default Work;
