import "./DropdownMenu.css";
import { useContext } from "react";
import { DisplayContext } from "../../contexts/displayContext";

export const groupingOptions = ["status", "priority", "user"];
export const orderingOptions = ["priority", "title"];

export const DropdownMenu = () => {
  const { grouping, setGrouping, ordering, setOrdering } =
    useContext(DisplayContext);

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
  };

  return (
    <div className="dropdown-menu">
      <div className="dropdown-option">
        <span className="font-bold">Grouping</span>
        <select value={grouping} onChange={(e) => handleGroupingChange(e)}>
          {groupingOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="dropdown-option">
        <span className="font-bold">Ordering</span>
        <select value={ordering} onChange={(e) => setOrdering(e.target.value)}>
          {orderingOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
