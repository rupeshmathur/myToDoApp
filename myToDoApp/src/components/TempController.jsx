import Button from "./Button";
import { useState } from "react";


function TempController() {

    const [temp, setTemp] = useState(0);

    function increaseTemp() {
        if (temp != 50) {
            setTemp(temp + 1);
        }

    }

    function decreaseTemp() {
        if (temp != 0) {
            setTemp(temp - 1);
        }

    }

    return (
        <div>
            Temprature  

            <h3> {temp} °C </h3>

            <br/>

            <Button disabled={false}
                className="primary"
                type="submit"
                onClick={increaseTemp}
            >
                Increase Temp
            </Button>
            <Button disabled={false}
                className="primary"
                type="submit"
                onClick={decreaseTemp}
            >
                Decrease Temp
            </Button>

        </div>

    );
}
export default TempController;