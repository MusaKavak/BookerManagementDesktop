export type Employee = {
    id: number
    branch_id: number | null
    email: string
    first_name: string | null
    last_name: string | null
    phone_number: string | null
    birth_date: string | null
    created_at: string | null
    updated_at: string | null
    title: string | null
}

export type EmployeeInsert = {
    branch_id?: number | null
    email: string
    password: string
    first_name?: string | null
    last_name?: string | null
    phone_number?: string | null
    birth_date?: string | null
    created_at?: string | null
    title?: string | null
}

export type EmployeeUpdate = {
    id: number
    branch_id?: number | null
    email: string
    password: string
    first_name?: string | null
    last_name?: string | null
    phone_number?: string | null
    birth_date?: string | null
    updated_at?: string | null
    title?: string | null
}