import "./homeBox.css"
import courPic from "../../assets/courtpic.png"
import timeCircle from "../../assets/TimeCircle.png"
type homeProps={
    name:string;
    location:string;
    timestart:string;
    timeend:string;
    slot:number;
    image: string;
}
function HomeBox({name,location,timestart,timeend,slot,image,}:homeProps){
    return(
        <div className="home-item-box">
                    <div className="home-box-left">
                        <img className="home-box-image" src={image} alt="No image found" />
                    </div>
                    <div className="home-box-right">
                        <div className="home-box-right-first">
                            <h3>{name}</h3>
                            <div className="slot-count">
                                <div>
                                    <p>{slot} Slotes</p>
                                </div>
                                
                            </div>
                            

                        </div>
                        <div className="home-box-right-second">
                            <p>{location}</p>

                            
                        </div>
                        <div className="home-box-right-last">
                            <div className="home-box-right-last-timeandimage">
                            <img src={timeCircle}></img>
                            <p>{timestart} to {timeend}</p>
                            </div>
                            
                            <button>Book</button>
                            
                        </div>
                    </div>
                    


                </div>
        
    )
}
export default HomeBox;