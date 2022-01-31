const events = new Map(); // map event name to array of Date

let firstDateGetTime;
let onAddEvent;
let onSetFirstDateGetTime;

function setOnSetFirstDateGetTime(callback) {
  onSetFirstDateGetTime = callback;
}

function setOnAddEventCallback(callback) {
  onAddEvent = callback;
}

function setFirstDateGetTime(date) {
  firstDateGetTime = date.getTime();
  if (onSetFirstDateGetTime) {
    onSetFirstDateGetTime();
  }
}

function addEvent(eventName) {
  const now = new Date();

  if (!firstDateGetTime) {
    // firstDateGetTime = now;
    setFirstDateGetTime(now);
  }

  if (!events.has(eventName)) {
    events.set(eventName, []);
  }
  events.get(eventName).push(now);

  if (onAddEvent) {
    onAddEvent();
  }
}

function getAllEvents() {
  // --- I do not that events will be changed without API.
  // --- However, Object.freeze of Map is not enough so i do not use it
  // --- todo nath : return clone of freezed Map
  return events;
}

export {
  getAllEvents,
  addEvent,
  setFirstDateGetTime,
  firstDateGetTime,
  setOnAddEventCallback,
  setOnSetFirstDateGetTime,
};
