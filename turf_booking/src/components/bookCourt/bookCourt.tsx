import "./bookCourt.css"
import badminton from "../../assets/badmintot-player.png"
import locationIcon from "../../assets/location_on.png"
function BookCourt(){
    return(
        <div className="main-box">
            <div className="pic">
                <img src={badminton} alt="No Image" />
            </div>
            <div className="court-details">
                <h3>Book court 1</h3>
            <div className="location">
                <img src={locationIcon} alt="NoImage" />
                <p>Seng kang, singapore</p>
            </div>
            

            </div>

        </div>

    );
}
export default BookCourt;