import { EmployeeStatus } from "../models/Employee";
import { STATUS_OPTIONS, useTranslateStatus } from "../models/StatusOption";

export interface StatusPros {
    data: string;
}

export function Status({ data }: StatusPros) {
    const {translateStatus} = useTranslateStatus();

    const getClassName = (status: EmployeeStatus): string => {
        switch (status) {
            case 'FIRED':
                return 'text-bg-danger';
            case 'ON_LEAVE':
                return 'text-bg-warning';
            case 'HIRED':
                return 'text-bg-success';
            default: 
                return 'text-bg-secondary';
        }
    }

    const status = data as EmployeeStatus;
    if (STATUS_OPTIONS.includes(status)) {
        return (<span className={"badge " + getClassName(status)}>{ translateStatus(status) }</span>);
    } else {
        return (<span className="badge text-bg-secondary">Nieokreślony</span>);
    }
}