import Button from "./Button";
import EmployeeDetails from "./EmployeeDetails";

function Employee(props) {

    return (
        <>
            <EmployeeDetails
                empName={props.empName}
                empCompany={props.empCompany}
                empExp={props.empExp}
                empLocation={props.empLocation}
            />

        </>


    );
}
export default Employee;