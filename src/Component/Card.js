import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="parent-user-card-div">
        {props.user.map((info, index) => {
          return (
            <div className="card-div" key={index}>
              <figure className="card-figure">
                <img src={info.avatar_url} alt="#"></img>
              </figure>
              <div className="detail-div">
                <h2>{info.login}</h2>
                <div className="other-user-parent-div">
                  <h3>Follwing other_user</h3>
                  <div className="other_user_details">
                    <div className="info-div">
                      <small>Article</small>
                      <small>38</small>
                    </div>
                    <div className="info-div">
                      <small>Followers</small>
                      <small>980</small>
                    </div>
                    <div className="info-div">
                      <small>Rating</small>
                      <small>8.9</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
