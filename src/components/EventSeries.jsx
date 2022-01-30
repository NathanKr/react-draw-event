import "./EventSeries.css";

const EventSeries = ({
  eventName,
  listEventsDate,
  svgMaxTimeSec,
  firstDateGetTime,
}) => {
  function computeCxPerecentage(currentDate) {
    const biasMs = currentDate.getTime() - firstDateGetTime;
    const cxPerecentage = biasMs / (svgMaxTimeSec * 10);
    return cxPerecentage;
  }

  const svgPoints = listEventsDate.map((date, i) => (
    <circle
      key={i}
      cx={computeCxPerecentage(date) + "%"}
      cy="50%"
      r="2"
      fill="red"
    />
  ));
  const svgBackground = (
    <rect x="0" y="0" width="100%" height="100%" fill="lightblue" />
  );

  return (
    <div className="EventSeries">
      <span>{eventName}</span>
      {firstDateGetTime ? (
        <svg height="20px">
          {svgBackground}
          {svgPoints}
        </svg>
      ) : null}
    </div>
  );
};

export default EventSeries;
