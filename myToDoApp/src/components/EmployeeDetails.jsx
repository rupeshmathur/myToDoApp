import { useState } from "react";
import Button from "./Button";

function EmployeeDetails({ empName, empCompany, empExp, empLocation }) {

    const [isVisible, setIsVisible] = useState(true);

    function hideEmp() {
        setIsVisible(!isVisible);

    }



    return (
        <div>

            {
                isVisible && (
                    <>
                        Name         {empName} <br />
                        Company      {empCompany}<br />
                        Experience   {empExp}<br />
                        Location     {empLocation}<br />
                    </>

                )}
            <Button disabled={false}
                className="primary"
                type="submit"
                onClick={hideEmp}

            >
                {isVisible ? "Hide Employee" : "Show Employee"}
            </Button>
        </div>




    );
}
export default EmployeeDetails;