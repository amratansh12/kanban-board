import { useEffect, useState, useContext } from "react";

import { DisplayContext } from "../../contexts/displayContext";
import { getData } from "../../services/api";
import { groupData } from "../../utils/groupData";

import { Navbar } from "../Navbar/Navbar";
import { CardColumns } from "../CardColumns/CardColumns";
import { populateUserId } from "../../utils/populateUserId";
import { sortData } from "../../utils/sortData";

export const KanbanBoard = () => {
  const [data, setData] = useState([]);
  const [groupedData, setGroupedData] = useState([]);
  const { grouping, ordering } = useContext(DisplayContext);

  useEffect(() => {
    const getCards = async () => {
      const response = await getData();

      //populate the users in the data
      const populatedData = populateUserId(
        response.data.tickets,
        response.data.users
      );
      console.log(populatedData);
      setData(populatedData);

      //group the data based on the grouping
      const result = groupData(data, grouping);
      setGroupedData(result);
    };

    getCards();
  }, []);

  useEffect(() => {
    localStorage.setItem("grouping", grouping);
    const result = groupData(data, grouping);
    // setGroupedData(result);

    localStorage.setItem("ordering", ordering);
    const sortedResult = sortData(result, ordering);
    setGroupedData(sortedResult);
  }, [data, grouping, ordering]);

  return (
    <>
      <Navbar />
      <CardColumns groupedData={groupedData} />
    </>
  );
};
