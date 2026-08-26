import { useState } from "react";

function Greetings() {

    const [name, setName] = useState("");


    function onNameChange(event) {
        setName(event.target.value);

    }

    return (

        <>
            Name  <input onChange={onNameChange}></input> <br />
            Hello <label>{name} !!</label>
            User Name Length <label>{name.length}</label>
        </>

    );

}
export default Greetings;