import CalendarItem from "../misc/calendarItem";
import CourtColumn from "./courtColumn";
import TimeColumn from "./timeColumn";
export default function Calendar(){
    return (
        <div className=" h-[60%] max-w-[90%] flex border-[.5px] shadow-lg rounded overflow-scroll">
            <div className="sticky left-0 z-10">
                <TimeColumn/>
            </div>
            <CourtColumn courtNumber = {1}/>
            <CourtColumn courtNumber = {2}/>
        </div>
    )
}