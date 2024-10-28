import "./CardColumns.css";

import { Card } from "../Card/Card";
import { ColumnTitle } from "./ColumnTitle";

export const CardColumns = ({ groupedData }) => {
  return (
    <div className="columns">
      {groupedData &&
        Object.keys(groupedData).map((heading, index) => (
          <div key={index}>
            <ColumnTitle
              heading={heading}
              length={groupedData[heading].length}
            />

            <div>
              {groupedData[heading].length === 0 && (
                <p className="no-cards">No cards in this column</p>
              )}
              {groupedData[heading].length > 0 &&
                groupedData[heading].map((card, index) => (
                  <Card
                    key={index}
                    id={card.id}
                    title={card.title}
                    tags={card.tag}
                    username={card.user.name}
                    available={card.user.available}
                  />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

//id, title, tags, userId
