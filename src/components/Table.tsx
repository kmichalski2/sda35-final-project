import { Employee } from '../models/Employee';

interface TableProps {
    data: Employee[];
}

export function Table({data}: TableProps) {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Salary</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            { data.map(item => <tr>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.salary}</td>
                <td>{item.status}</td>
            </tr>)}
            </tbody>
      </table>
    )
}