import { useEffect, useState, useContext } from "react";

import { DisplayContext } from "../../contexts/displayContext";
import { getData } from "../../services/api";
import { groupData } from "../../utils/groupData";

import { Navbar } from "../Navbar/Navbar";
import { CardColumns } from "../CardColumns/CardColumns";

export const KanbanBoard = () => {
  const [data, setData] = useState([]);
  const [groupedData, setGroupedData] = useState([]);
  const { grouping, ordering } = useContext(DisplayContext);

  useEffect(() => {
    const getCards = async () => {
      const response = await getData();
      setData(response.data.tickets);
      const result = groupData(data, grouping);
      setGroupedData(result);
    };

    getCards();
  }, []);

  useEffect(() => {
    localStorage.setItem("grouping", grouping);
    const result = groupData(data, grouping);
    setGroupedData(result);
    localStorage.setItem("ordering", ordering);
  }, [data, grouping, ordering]);

  return (
    <>
      <Navbar />
      <CardColumns groupedData={groupedData} />
    </>
  );
};
