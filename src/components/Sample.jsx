import {useState, useEffect } from "react";
import * as eventLogger from "../logic/eventLogger";
import Events from "./Events";

const Sample = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    handle = setInterval(() => {
      setCount((c) => c + 1);
      eventLogger.addEvent("increment");
    }, 5000);
  }, []);

  let handle;

  return (
    <div>
      <button onClick={() => eventLogger.setFirstDateGetTime(new Date())}>
        Start time window
      </button>
      <button onClick={() => eventLogger.addEvent("click1")}>Click1</button>
      <button onClick={() => eventLogger.addEvent("click2")}>Click2</button>
      <Events eventLogger={eventLogger} svgMaxTimeSec={15} />
    </div>
  );
};

export default Sample;
