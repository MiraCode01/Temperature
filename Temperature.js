import React, { useState } from "react";
import "./Temp.css";

const Temperature =()=>{

    const[Temp, setTemp] = useState(10);

    const[Color, setColor] = useState("cold");

    function IncreaseTemp(){
        const newTemp = Temp + 1;
        setTemp(newTemp)

        if(newTemp >= 15){
            setColor("hot")
        }
        if(newTemp >= 25){
            setColor("burning")
        }
        if(newTemp > 30){
            setColor("cold")
            setTemp(10)
        }
    }
    function DecreaseTemp(){
        const newTemp = Temp - 1;
        setTemp(newTemp)
        if(newTemp <= 7){
            setColor("freezing")
        }
        if(newTemp <0){
            setTemp(10)
        }
    }



   

    // if (Temp >= 0){
    //     document.body.style.backgroundColor = "white"
    // }

    // if (Temp >= 20){
    //     document.body.style.backgroundColor = "blue"
    // }

    // if (Temp >= 30){
    //     document.body.style.backgroundColor = "green"
    // }

    // if (Temp >= 40){
    //     document.body.style.backgroundColor = "pink"
    // }

    // if (Temp >= 50){
    //     document.body.style.backgroundColor = "orange"
    // }

    // if (Temp >= 60){
    //     document.body.style.backgroundColor = "red"
    // }
    // if (Temp >= 70){
    //     document.body.style.backgroundColor = "black"
    //     document.body.style.color = "white"
    //     alert("Stay indoors people")
    // }

    return(
        <div>
        <h1>Temperature and Color change</h1>
            <div className="central">
                <h2 className={`circle ${Color}`}>{Temp}°C</h2><br/>
                <section>
                    <button onClick={IncreaseTemp} className="smallcircle">+</button>
                    <button onClick={DecreaseTemp} className="smallcircle">-</button>
                </section>
            </div>
        </div>
    )
}

export default Temperature