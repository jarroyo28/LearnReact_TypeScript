import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Task } from "./model";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [listOfTasks, setListOfTasks] = useState<Task[]>([]);

  console.log(task);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField task={task} setTask={setTask} />
    </div>
  );
};

export default App;
