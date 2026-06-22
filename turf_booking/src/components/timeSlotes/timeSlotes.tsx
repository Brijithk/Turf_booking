import "./timeSlotes.css"
import timeIcon from "../../assets/TimeCircle.png"
function TimeSlote(){
    return(
        <div className="main-box">
                <img src={timeIcon}alt="No Image" />
                <p>10am-11am</p>
        </div>
    );
}
export default TimeSlote;