import * as eventLogger from "../logic/eventLogger";
import Events from "./Events";

const Sample = () => {
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
