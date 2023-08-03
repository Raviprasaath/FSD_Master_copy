import React, { useEffect, useState } from "react";

function Car(props) {
    const [btn, setCount] = useState("dfdfa");
    
    useEffect(() => {
        // setTimeout(() => {
          setCount((count) => count + 1);
        // }, 1000);
      }, []);

    function tapBtn() {
        setCount(btn + 1);
    };


    return <h1 onClick={tapBtn}>{props.name}</h1>
}

export default Car;