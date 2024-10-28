import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { getData } from "../../services/api";

export const KanbanBoard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const response = await getData();
    console.log(response.data);
    setData(response.data.tickets);
  };

  return (
    <div>
      {data.length > 0 &&
        data.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            tags={card.tag}
            userId={card.userId}
          />
        ))}
    </div>
  );
};
