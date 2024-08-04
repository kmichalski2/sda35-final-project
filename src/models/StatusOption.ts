import { EmployeeStatus } from "./Employee";

export interface StatusOption { 
    label: string, 
    value: EmployeeStatus 
}

export const STATUS_OPTIONS: EmployeeStatus[] = [
    "FIRED", "HIRED", "ON_LEAVE"
]