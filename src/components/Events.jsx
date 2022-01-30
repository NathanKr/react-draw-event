import EventSeries from "./EventSeries";
import { useState } from "react";

const Events = ({ eventLogger, svgMaxTimeSec }) => {
  const [eventsCount, setEventsCount] = useState(0);

  eventLogger.setOnAddEventCallback(() => setEventsCount((c) => c + 1));

  const elemEvents = [];
  const events = eventLogger.getAllEvents();
  const firstDateGetTime = eventLogger.getFirstDateGetTime();

  events.forEach((value, key) => {
    const eventName = key;
    const listEventsDate = value;
    const elem = (
      <EventSeries
        key={eventName}
        eventName={eventName}
        listEventsDate={listEventsDate}
        svgMaxTimeSec={svgMaxTimeSec}
        firstDateGetTime={firstDateGetTime}
      />
    );
    elemEvents.push(elem);
  });

  return (
    <div>
      <p>
        Time window {svgMaxTimeSec} [s] , Evented add {eventsCount}
      </p>
      {elemEvents}
    </div>
  );
};

export default Events;
