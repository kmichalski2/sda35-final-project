import { useState } from 'react';
import { Employee } from '../models/Employee';

interface TableProps {
    data: Employee[];
}

export function Table({data}: TableProps) {
    const [displayData, setDisplayData] = useState<Employee[]>(data);
    const [sortKey, setSortKey] = useState<null | keyof Employee>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);

    const handleSearchType = (event: React.KeyboardEvent) => {
        const input = event.target as HTMLInputElement;
        const phrase = input.value.toLowerCase();

        const d = data.filter(item => {
            return item.firstname.toLowerCase().includes(phrase) || 
                   item.lastname.toLowerCase().includes(phrase) || 
                   item.phonenumber.toString().includes(phrase); 
                   
        });

        setDisplayData(d);
    }

    const getSortDirection = (key: keyof Employee): 'asc' | 'desc' | null => {
        if (key === sortKey) {
            if (sortDirection === null) {
                return 'asc';
            } else if (sortDirection === 'asc') {
                return 'desc';
            } else {
                return null;
            }
        } 

        return 'asc';
    }

    const handleSort = (event: React.MouseEvent, key: keyof Employee) => {
        event.preventDefault();

        const tempSortDirection = getSortDirection(key);

        let sortedData;
        if (tempSortDirection === 'asc') {
            sortedData = [...displayData].sort((a,b) => sortAsc(a,b,key));
        } else if (tempSortDirection === 'desc') {
            sortedData = [...displayData].sort((a,b) => sortDesc(a,b,key));
        } else {
            sortedData = [...data];
        }

        setDisplayData(sortedData);
        setSortKey(key);
        setSortDirection(tempSortDirection);
    }

    const sortAsc = (a: Employee, b: Employee, key: keyof Employee): number => {
        if (a[key] > b[key]) {
            return 1; 
        }

        if (a[key] < b[key]) {
            return -1;
        }

        return 0;
    }

    const sortDesc = (a: Employee, b: Employee, key: keyof Employee): number => {
        if (a[key] < b[key]) {
            return 1; 
        }

        if (a[key] > b[key]) {
            return -1;
        }

        return 0;
    }

    return (
        <>
            <div className='mb-3'>
                <input onKeyUp={handleSearchType} placeholder='Wyszukiwana fraza...' type='search' className='form-control' />
            </div>
            <table className='table'>
                <thead>
                <tr>
                    <th className='cursor-pointer' onClick={(event) => handleSort(event,'id')}>ID</th>
                    <th className='cursor-pointer' onClick={(event) => handleSort(event,'firstname')}>Firstname</th>
                    <th className='cursor-pointer' onClick={(event) => handleSort(event,'lastname')}>Lastname</th>
                    <th className='cursor-pointer' onClick={(event) => handleSort(event,'salary')}>Salary</th>
                    <th className='cursor-pointer' onClick={(event) => handleSort(event,'status')}>Status</th>
                </tr>
                </thead>
                <tbody>
                { displayData.map(item => <tr>
                    <td>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.salary}</td>
                    <td>{item.status}</td>
                </tr>)}
                </tbody>
            </table>
        </>
        
    )
}