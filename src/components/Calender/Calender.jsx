import "./Calnder.css";
import ca from "./../../assets/Time Editing.svg";

function CalendarPage() {
  return (
    <>
      <h1 className="title">
        Calendar <span className="highlight-text">Event</span>
      </h1>
      <div className="calendar-container">
        {/* Title */}

        {/* Centered Photo */}
        <div className="calendar-widget">
          <img src={ca} alt="Calendar" className="calendar-image" />
        </div>
      </div>
    </>
  );
}

export default CalendarPage;
