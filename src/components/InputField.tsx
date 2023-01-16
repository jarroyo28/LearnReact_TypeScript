import React from "react";
import "./styles.css";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = (props) => {
  return (
    <form className="input">
      <input
        onChange={(e) => props.setTask(e.target.value)}
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={props.task}
      />
      <button className="input__submit" type="submit">
        Submit task
      </button>
    </form>
  );
};

export default InputField;
