
import { useLocation, useNavigate } from "react-router-dom";
import { createEmployee } from "../services/API";
import { STATUS_OPTIONS, StatusOption } from '../models/StatusOption';
import { useState } from "react";
import { Employee } from "../models/Employee";


export function EditPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state as Employee;
    const [statusOptions] = useState<StatusOption[]>(STATUS_OPTIONS);
    const [firstname, setFirstname] = useState(data.firstname);
    const [lastname, setLastname] = useState(data.lastname);
    const [phonenumber, setPhonenumber] = useState(data.phonenumber);
    const [birthdate, setBirthdate] = useState(data.birthdate);
    const [salary, setSalary] = useState(data.salary);
    const [status, setStatus] = useState(data.status);
    const [address, setAddress] = useState(data.address);
    const [city, setCity] = useState(data.city);
    const [postalcode, setPostalcode] = useState(data.postalcode);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const data: any = {};

        formData.forEach((value, key) => {
            data[key] = value;
        })

        createEmployee(data).then(() => {
            navigate('/');
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="pt-4 pb-4">Edit Employee</h1>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="firstname" className="form-label">Firstname</label>
                    <input value={firstname} onChange={event => setFirstname(event.target.value)} className="form-control" type="text" name="firstname" required />
                </div>
                <div className="col">
                    <label htmlFor="lastname" className="form-label">Lastname</label>
                    <input value={lastname} onChange={event => setLastname(event?.target.value)} className="form-control" type="text" name="lastname" required/>
                </div>
                <div className="col">
                    <label htmlFor="birthdate" className="form-label">Birthdate</label>
                    <input value={birthdate} onChange={event => setBirthdate(event.target.value)} className="form-control" type="date" name="birthdate" required />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                <label htmlFor="phonenumber" className="form-label">Phonenumber</label>
                <input value={phonenumber} onChange={(event => setPhonenumber(event.target.value))} className="form-control" type="text" name="phonenumber" required />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input value={address} onChange={(event => setAddress(event.target.value))} type="text" className="form-control" name="address" required />
                </div>
                <div className="col">
                    <label htmlFor="city" className="form-label">City</label>
                    <input value={city} onChange={(event => setCity(event.target.value))} type="text" className="form-control" name="city" required />
                </div>
                <div className="col">
                    <label htmlFor="postalcode" className="form-label">Postal Code</label>
                    <input value={postalcode} onChange={(event) => setPostalcode(event.target.value)} type="text" className="form-control" name="postalcode" required />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select value={status} onChange={(event) => setStatus(event.target.value)} className="form-control" name="status">
                        {statusOptions.map((status) => (<option value={status.value}>{status.label}</option>))}
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input value={salary} onChange={(event) => setSalary(event.target.value)} type="text" className="form-control" name="salary" required />
                </div>
            </div>
            <div className="row">
                <button className="btn btn-primary" type="submit">Save</button>
            </div>
        </form>
    )
}