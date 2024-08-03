import { Employee } from "../models/Employee";

export const createEmployee = (newEmployee: Omit<Employee, 'id'>) => {
    const apiUrl = "http://localhost:3001/employees";

    return fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(newEmployee)
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Cannot add new employee');
        }
    })
}