import { LuCircle } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { VscLayers } from "react-icons/vsc";

export const statusIcons = {
  Todo: (
    <LuCircle
      style={{
        width: "20px",
        color: "black",
      }}
    />
  ),
  "In progress": (
    <FaCircleHalfStroke
      style={{
        width: "20px",
        color: "blue",
      }}
    />
  ),
  Done: (
    <FaCheckCircle
      style={{
        width: "20px",
      }}
    />
  ),
  Backlog: (
    <VscLayers
      style={{
        width: "20px",
        color: "red",
      }}
    />
  ),
};
