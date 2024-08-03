import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/API";

export function AddPage() {
    const navigate = useNavigate();

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
            <h1 className="pt-4 pb-4">Add Employee</h1>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="firstname" className="form-label">Firstname</label>
                    <input className="form-control" type="text" name="firstname"/>
                </div>
                <div className="col">
                    <label htmlFor="lastname" className="form-label">Lastname</label>
                    <input className="form-control" type="text" name="lastname"/>
                </div>
                <div className="col">
                    <label htmlFor="birthdate" className="form-label">Birthdate</label>
                    <input className="form-control" type="text" name="birthdate"/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                <label htmlFor="phonenumber" className="form-label">Phonenumber</label>
                <input className="form-control" type="text" name="phonenumber"/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" />
                </div>
                <div className="col">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" name="city" />
                </div>
                <div className="col">
                    <label htmlFor="postalcode" className="form-label">Postal Code</label>
                    <input type="text" className="form-control" name="postalcode"/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="status" className="form-label">Status</label>
                    <input type="text" className="form-control" name="status" />
                </div>
                <div className="col">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input type="text" className="form-control" name="salary" />
                </div>
            </div>
            <div className="row">
                <button className="btn btn-primary" type="submit">Add</button>
            </div>
        </form>
    )
}