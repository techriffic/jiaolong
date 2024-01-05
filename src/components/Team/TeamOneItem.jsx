import React from "react";
import { urlFor } from "../../lib/client";

const TeamOneItem = (props) => {


  return (
    <div className="team-item">
      <div className="team-thumb">
        <img src={urlFor(props.item.member_image).url()} alt='member image' />
      </div>
      <div className="team-content">
        <h2 className="title">{props.item.member_name}</h2>
        <span>{props.item.member_destination}</span>

      
      </div>
    </div>
  );
};

export default TeamOneItem;
