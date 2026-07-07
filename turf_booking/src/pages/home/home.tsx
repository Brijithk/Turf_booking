import "../home/home.css"
import HomeBox from "../../components/homeBox/homeBox";
import HomeHeader from "../../components/homeHeader/homeHeader";
import ApplyButton from "../../components/applyButton/applyButton";
import SelectBox from "../../components/selectBox/selectBox";
import BookCourt from "../../components/bookCourt/bookCourt";
import TimeSlote from "../../components/timeSlotes/timeSlotes";
function Home(){
    const courts=[
        {"name":"court1",
        "location":"sang , singapor",
        "time_start":"4am",
        "time_end":"12am",
        "slot_count":4,
        "img-url":""
    },
    {"name":"court2",
        "location":"kazhakuttam ,india",
        "time_start":"3am",
        "time_end":"12am",
        "slot_count":5,
        "img-url":""
    },
    {"name":"court3",
        "location":"koluturai ,india",
        "time_start":"3am",
        "time_end":"2am",
        "slot_count":5,
        "img-url":""
    }

]
   

    // courts.forEach=>(index){
    //        <div>
    //                 <HomeBox name={index.name} location={index.location} />
    //             </div>
    // }
    return(
     <div className="home-mainContainer">
        <div className="home-navBar">
      
        </div>
        <div className="home-banner">
                  <HomeHeader />
        </div>
        <div className="home-contents">
            <div className="home-leftContent">
                {/* <SelectBox /> */}
            </div>
            <div className="home-rightContent">
                {
                    courts.map((home,index)=>(
                            
                            <div key={index}>
                                <HomeBox name={home.name} location={home.location} timestart={home.time_start} timeend={home.time_end}  slot={home.slot_count}/>
                            </div>
                            
                            ))
                }
                
                  
            </div>
        </div>
     </div>
    )
}
export default Home