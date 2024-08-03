import { Table } from "../components/Table";
import { Employee } from "../models/Employee";

export function EmployeesPage() {
    const mockData: Employee[] = [
        {
          id: '5',
          firstname: 'John',
          lastname: 'Doe',
          salary: 5000,
          status: 'Na urlopie',
          phonenumber: 908908908,
        },
        {
          id: '2',
          firstname: 'Jan',
          lastname: 'Kowalskiego',
          salary: 15000,
          status: 'Na urlopie',
          phonenumber: 123123123,
        },
        {
          id: '1',
          firstname: 'Adam',
          lastname: 'Nowak',
          salary: 25000,
          status: 'Na urlopie',
          phonenumber: 345345345,
        },
        {
          id: '3',
          firstname: 'Adam',
          lastname: 'Nowak',
          salary: 25000,
          status: 'Na urlopie',
          phonenumber: 678678678,
        },
      ]

    return (
        <>
            <h1 className='pt-4 pb-4'>Employees</h1>

            <Table data={mockData}></Table>  
        </>
    )
}