import { Placeholder } from "react-select/animated";
import "./selectBox.css"
import ApplyButton from "../applyButton/applyButton";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { useState } from "react";

function SelectBox(){
    const [date,setDate]=useState(null);
    const locationOptions = [
  { value: "Critical", label: "Critical" },
  { value: "Normal", label: "Normal" }
]; 
    const timeOptions=[
        {value:"4AM - 9AM",label:"4AM - 9AM"},
        {value:"5AM - 6AM",label:"5AM - 6AM"}
    ]
    return(
        // <select name="locations" id="locations" >
        //     <option value="" disabled>All Locations</option>
        //     <option value="Goa">Goa</option>
        //     <option value="Hydrabad">Hydrabad</option>
        //     <option value="marthandam">Marthandam</option>
        // </select>
         <div className="filter">
            <h6>filter</h6>
            <Select className="select-box" options={locationOptions} placeholder="All Locations" menuPosition="fixed"/>
            {/* <DatePicker selected={date}  placeholderText="Calender" className="calender-input" /> */}
            <input type="date" placeholder="Calander" />
            <Select className="select-box" options={timeOptions} placeholder="Time" menuPosition="fixed"/>
            <div className="buttons">
                <ApplyButton></ApplyButton>
                <ApplyButton></ApplyButton>
            </div>
            
         </div>
        
           
     
    )

}
export default SelectBox