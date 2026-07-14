import "../home/home.css"
import HomeBox from "../../components/homeBox/homeBox";
import HomeHeader from "../../components/homeHeader/homeHeader";
import { Topbar } from "../../components/topbar/Topbar";
import HomeFilter from "../../components/homeFilter/homeFilter";
import { useEffect, useState } from "react";
// import ApplyButton from "../../components/applyButton/applyButton";
// import SelectBox from "../../components/selectBox/selectBox";
// import BookCourt from "../../components/bookCourt/bookCourt";
// import TimeSlote from "../../components/timeSlotes/timeSlotes";
interface Court {
    _id: string;
    name: string;
    location: string;
    time_start: string;
    time_end: string;
    slot_count: number;
    image_url: string;
}
function Home(){
    const [courts, setCourts] = useState<Court[]>([]);
  useEffect(() => {
    fetchCourts();
}, []);

const fetchCourts = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/courts");

        const data = await response.json();

        setCourts(data);
    } catch (error) {
        console.error(error);
    }
};
   

    // courts.forEach=>(index){
    //        <div>
    //                 <HomeBox name={index.name} location={index.location} />
    //             </div>
    // }
    return(
     <div className="home-mainContainer">
        <div className="home-navBar">
      <Topbar />
        </div>
        <div className="home-banner">
                  <HomeHeader />
        </div>
        <div className="home-contents">
            <div className="home-leftContent">
                <HomeFilter />
                
            </div>
         <div className="home-rightContent">
    {courts.map((court) => (
        <div key={court._id}>
            <HomeBox
                name={court.name}
                location={court.location}
                timestart={court.time_start}
                timeend={court.time_end}
                slot={court.slot_count}
                image={court.image_url}
            />
        </div>
    ))}
</div>
        </div>
     </div>
    )
}
export default Home