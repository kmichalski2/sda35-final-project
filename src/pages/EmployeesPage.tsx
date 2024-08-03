import React from "react";
import { Table } from "../components/Table";
import { Employee } from "../models/Employee";
import { useNavigate } from "react-router-dom";

export function EmployeesPage() {
    const navigate = useNavigate();

    const mockData: Employee[] = [
        {
          id: '5',
          firstname: 'John',
          lastname: 'Doe',
          salary: 5000,
          status: 'Na urlopie',
          phonenumber: 908908908,
          birthdate: new Date('1996-04-04'),
          address: 'Francuska 22',
          postalcode: '44333',
          city: 'Kraków'
        },
        {
          id: '2',
          firstname: 'Jan',
          lastname: 'Kowalskiego',
          salary: 15000,
          status: 'Na urlopie',
          phonenumber: 123123123,
          birthdate: new Date('1996-04-04'),
          address: 'Francuska 22',
          postalcode: '44333',
          city: 'Kraków'
        },
        {
          id: '1',
          firstname: 'Adam',
          lastname: 'Nowak',
          salary: 25000,
          status: 'Na urlopie',
          phonenumber: 345345345,
          birthdate: new Date('1996-04-04'),
          address: 'Francuska 22',
          postalcode: '44333',
          city: 'Kraków'
        },
        {
          id: '3',
          firstname: 'Adam',
          lastname: 'Nowak',
          salary: 25000,
          status: 'Na urlopie',
          phonenumber: 678678678,
          birthdate: new Date('1996-04-04'),
          address: 'Francuska 22',
          postalcode: '44333',
          city: 'Kraków'
        },
      ];


      const handleAddClick = (event: React.MouseEvent): void => {
        event.preventDefault();
        navigate('/add');
      }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className='pt-4 pb-4'>Employees</h1>
                <button onClick={handleAddClick} className="btn btn-primary">Add</button>
            </div>

            <Table data={mockData}></Table>  
        </>
    )
}