import { Employee } from "../types/Employee";
import { API } from "./client";

export class EmployeeDataAccess {

    async getAll(): Promise<Employee[] | undefined> {
        return await API.get<Employee[]>("employees")
    }

}