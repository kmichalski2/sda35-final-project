import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/API";
import { STATUS_OPTIONS, StatusOption } from "../models/StatusOption";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function AddPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [statusOptions] = useState<StatusOption[]>(STATUS_OPTIONS);

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
            <h1 className="pt-4 pb-4">{t('add_epmloyee_title')}</h1>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="firstname" className="form-label">{t('firstname')}</label>
                    <input className="form-control" type="text" name="firstname" required />
                </div>
                <div className="col">
                    <label htmlFor="lastname" className="form-label">{t('lastname')}</label>
                    <input className="form-control" type="text" name="lastname" required/>
                </div>
                <div className="col">
                    <label htmlFor="birthdate" className="form-label">{t('birthdate')}</label>
                    <input className="form-control" type="date" name="birthdate" required />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                <label htmlFor="phonenumber" className="form-label">{t('phonenumber')}</label>
                <input className="form-control" type="text" name="phonenumber" required />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="address" className="form-label">{t('address')}</label>
                    <input type="text" className="form-control" name="address" required />
                </div>
                <div className="col">
                    <label htmlFor="city" className="form-label">{t('city')}</label>
                    <input type="text" className="form-control" name="city" required />
                </div>
                <div className="col">
                    <label htmlFor="postalcode" className="form-label">{t('postalcode')}</label>
                    <input type="text" className="form-control" name="postalcode" required />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="status" className="form-label">{t('status')}</label>
                    <select className="form-control" name="status">
                        {statusOptions.map((status) => (<option key={status.value} value={status.value}>{status.label}</option>))}
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="salary" className="form-label">{t('salary')}</label>
                    <input type="text" className="form-control" name="salary" required />
                </div>
            </div>
            <div className="row">
                <button className="btn btn-primary" type="submit">{t('add')}</button>
            </div>
        </form>
    )
}