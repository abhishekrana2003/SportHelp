import CalendarItem from "../misc/calendarItem";
import CourtColumn from "./courtColumn";
import TimeColumn from "./timeColumn";
export default function Calendar(){
    return (
        <div className="h-[60%] flex border border-black rounded overflow-scroll">
            <TimeColumn/>
            <CourtColumn/>
            <CourtColumn/>

        </div>
    )
}