import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";


const TrainingCalendar = ({eventData, clickedEvent}:any) =>{
    const initialView = window.innerWidth <= 767 ? "dayGridDay" : "dayGridMonth";
    const toolBar = window.innerWidth <= 767 ? "dayGridDay" : "dayGridMonth,timeGridWeek,dayGridDay,listWeek";
    
    const handleChangeTitleToHMTL = (elem:any) => {
        return (
          <>
            <div dangerouslySetInnerHTML={{ __html: elem.event.title }} />
          </>
        );
    }; 
    
    return (
        <FullCalendar
        // timeGridWeek
            initialView={initialView}
            allDayContent={false}
            headerToolbar={{
                left: 'prev,next',
                center: 'title',
                right: `${toolBar}`
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            editable={true}
            selectable={true}
            events={eventData}
            eventClick={clickedEvent}
            eventContent={handleChangeTitleToHMTL}
        />
    );


}

export default TrainingCalendar;