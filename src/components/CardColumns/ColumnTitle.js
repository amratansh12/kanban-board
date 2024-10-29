import { useContext } from "react";

import plus from "../../assets/svgs/add.svg";
import threeDots from "../../assets/svgs/3 dot menu.svg";

import { statusIcons } from "../../assets/statusIcons";
import { priorityIcons } from "../../assets/priorityIcons";
import { DisplayContext } from "../../contexts/displayContext";

export const ColumnTitle = ({ heading, length }) => {
  const { grouping } = useContext(DisplayContext);
  const priorityNames = ["No priority", "Low", "Medium", "High", "Urgent"];

  let icon = null;
  if (grouping === "status") {
    icon = statusIcons[heading];
  }

  if (grouping === "priority") {
    heading = priorityNames[heading];
    icon = priorityIcons[heading];
  }

  if (grouping === "user") {
    icon = <div className="title-profile-image">{heading[0]}</div>;
  }

  return (
    <div className="column-heading">
      <div className="column-title">
        {grouping === "user" ? icon : <img src={icon} width={20} alt="Icon" />}
        <h2>{heading}</h2>
        <span>{length}</span>
      </div>

      <div className="column-actions">
        <img src={plus} width={20} alt="Add" />
        <img src={threeDots} width={20} alt="Menu" />
      </div>
    </div>
  );
};
