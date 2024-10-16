import { useEffect, useState } from "react";

export default function CalendarItem(props){
    return (    
        <div className="border border-black h-[50px] w-[150px]">
            {props.data}
        </div>
    );
}