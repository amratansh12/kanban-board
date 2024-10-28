import "./CardColumns.css";

import { IoEllipsisHorizontal } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

import { statusIcons } from "../../assets/statusIcons";
import { Card } from "../Card/Card";

export const CardColumns = ({ groupedData }) => {
  return (
    <div className="columns">
      {groupedData &&
        Object.keys(groupedData).map((heading, index) => (
          <div key={index}>
            <div className="column-heading">
              <div className="column-title">
                <h2>
                  {statusIcons[heading]}
                  {heading}
                </h2>
                <span>{groupedData[heading].length}</span>
              </div>

              <div className="column-actions">
                <FaPlus />
                <IoEllipsisHorizontal />
              </div>
            </div>

            <div>
              {groupedData[heading].map((card, index) => (
                <Card
                  key={index}
                  id={card.id}
                  title={card.title}
                  tags={card.tag}
                  userId={card.userId}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

//id, title, tags, userId
