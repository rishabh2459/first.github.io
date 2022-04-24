import React from "react";
import web from "../src/Images/ho.jpg";
import Common from "./Common";
import Choose from "./Choose";
import './style.css'

const Home = () => {
    return (
        <>           
            <div>
            <Common  name="Shape your body with" 
              imgsrc={web}
               visit="/Services" 
              btname="Get Started" />
            </div>
            <div>
                <Choose />
            </div>
            
        </>
    );

};

export default Home;
