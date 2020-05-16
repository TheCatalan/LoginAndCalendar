import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

// import "./styles.css";

// must manually import the stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";


export default class MainCalendar extends React.Component {
  calendarComponentRef = React.createRef();

  constructor(props) {
    super(props)
    this.state = {
      calendarWeekends: true,
      calendarEvents: [
        // initial event data
        // { title: "Event Now", start: new Date() }
      ],
      textDisabled: true,
      eventTitle: '',
      date: null,
      singleArg: null
    };
  }

  

  render() {
    return (
      <div className="demo-app">
        <div className="demo-app-top">
          <button onClick={this.toggleWeekends}>toggle weekends</button>&nbsp;
          <button onClick={this.gotoPast}>go to a date in the past</button>
          &nbsp; (also, click a date/time to add an event)
        </div>
        <div className="demo-app-calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
          />
        </div>
        <div>
          <form onSubmit={this.onTextButton}>
            <input
            type="text"
            placeholder="Enter Your Userame"
            disabled={this.state.textDisabled}
            onChange={this.handleEventAdd}
            name="eventTitle"
            /> 
            <br></br>
            <button /*onClick={this.onTextButton}*/></button>
            <br></br>
          </form> 
        </div>
      </div>
    );
  }

  onTextButton = (event) => {
    event.preventDefault();
    
    console.log("Text flipped")
    const eventTitle = this.state.eventTitle;
    console.log(eventTitle);

    this.setState({ 
      textDisabled : true,
      calendarEvents: this.state.calendarEvents.concat({
        // creates a new array
        title: eventTitle,
        start: this.state.singleArg.date,
        allDay: this.state.singleArg.allDay
      })
    });

  }

  handleEventAdd = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });

  }

  toggleWeekends = () => {
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends
    });
  };

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  };

  handleDateClick = arg => {
    this.setState({ 
      textDisabled : false,
      singleArg : arg
     })
     console.log(this.state.singleArg);
    /*
    if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
      this.setState({
        textDisabled: !this.state.textDisabled,
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay
        })
      });
      console.log(this.state.calendarEvents);
    }
    */

  };
}
