import "./homeBox.css"

import courPic from "../../assets/courtpic.png"
import timeCircle from "../../assets/timeCircle.png"
type homeProps={
    name:string;
    location:string;
}
function HomeBox({name,location}:homeProps){
    return(
        <div className="home-item-box">
                    <div className="home-box-left">
                        <img className="home-box-image" src={courPic} alt="No image found" />
                    </div>
                    <div className="home-box-right">
                        <div className="home-box-right-first">
                            <h3>{name}</h3>
                            <div className="slot-count">
                                <div>
                                    <p>4 Slotes</p>
                                </div>
                                
                            </div>
                            

                        </div>
                        <div className="home-box-right-second">
                            <p>{location}</p>

                            
                        </div>
                        <div className="home-box-right-last">
                            <div className="home-box-right-last-timeandimage">
                            <img src={timeCircle}></img>
                            <p>4am to 12am</p>
                            </div>
                            
                            <button>Book</button>
                            
                        </div>
                    </div>
                    


                </div>
        
    )
}
export default HomeBox;