import CalendarItem from "../misc/calendarItem"
import { useEffect,useState } from "react";
export default function CourtColumn(props){
    const [columnList,setColumnList] = useState([]);
    useEffect(() => {
        
        for(let i=0;i<25;i++){
            if(i==0)
            {
                setColumnList(columnList=>[...columnList,<CalendarItem key={i} type="courtHeader" data={props.courtNumber}/>]);
            }
            else
                setColumnList(columnList=>[...columnList,<CalendarItem key={i} data={i-1} status={i==4?"booked":"available"}/>]);
        }
    },[])
    return (
        <div className="">
            {columnList}
        </div>
    )
}