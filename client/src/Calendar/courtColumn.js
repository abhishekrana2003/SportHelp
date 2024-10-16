import CalendarItem from "../misc/calendarItem"
import { useEffect,useState } from "react";
export default function CourtColumn(){
    const [columnList,setColumnList] = useState([]);
    useEffect(() => {
        for(let i=0;i<24;i++){
            setColumnList(columnList=>[...columnList,<CalendarItem key={i}/>]);
        }
    },[])
    return (
        <div className="">
            {columnList}
        </div>
    )
}