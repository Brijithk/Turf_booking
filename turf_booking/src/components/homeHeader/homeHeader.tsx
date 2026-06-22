import homeHead from "../../assets/Group6.png"
import "./homeHeader.css"
function HomeHeader(){
    return(
        <div className="home-title-head"> 
                    {/* <img src={homeHead}></img> */}
                    <div className="home-title-head-image-slot"><h3>Slot Booking</h3></div> 
                    <div className="home-title-head-image-see-slot"><h6>See slotes available for booking</h6></div>    
                </div>
    )
}
export default HomeHeader;