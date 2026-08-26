import Employee from "./Employee";

function EmployeeObjects() {


    const employees = [

        {
            id: 1,
            name: "Rupesh",
            company: "Barclays"
        },

        {
            id: 2,
            name: "Vedarth",
            company: "Google"
        },

        {
            id: 3,
            name: "John",
            company: "Microsoft"
        }

    ];

    return (

        <>
            {
                employees.map(employee => (
                    <Employee
                        key={employee.id}
                        empName={employee.name}
                        empCompany={employee.company}
                    />

                ))
            }
        </>
    );

}
export default EmployeeObjects;