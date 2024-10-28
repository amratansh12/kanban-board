import "./DropdownMenu.css";

export const groupingOptions = ["status", "priority", "user"];
export const orderingOptions = ["priority", "title"];

export const DropdownMenu = ({ isVisible }) => {
  return (
    <div className="dropdown-menu">
      <div className="dropdown-option">
        <span className="font-bold">Grouping</span>
        <select>
          {groupingOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="dropdown-option">
        <span className="font-bold">Ordering</span>
        <select>
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
