import "./Card.css";

import { priorityIcons } from "../../assets/priorityIcons";

export const Card = ({ id, title, tags, username, available, priority }) => {
  const priorityNames = ["No priority", "Low", "Medium", "High", "Urgent"];
  const icon = priorityIcons[priorityNames[priority]];

  return (
    <div className="card">
      <div className="card-header font-medium">
        <div className="card-heading">
          <p className="card-id">{id}</p>
          <div className="card-profile-image">
            {username[0]}

            <div
              className="profile-status-bar"
              style={{ backgroundColor: available ? "orange" : "#d3d3d3" }}
            />
          </div>
        </div>

        <p className="card-title">{title}</p>
      </div>

      <div className="card-actions">
        <div className="card-actions-button font-medium">
          <img src={icon} width={14} alt="Extra" />
        </div>
        {tags.length > 0 &&
          tags.map((tag, index) => (
            <div key={index} className="card-actions-button font-medium">
              <div className="card-action-tag" />
              {tag}
            </div>
          ))}
      </div>
    </div>
  );
};
