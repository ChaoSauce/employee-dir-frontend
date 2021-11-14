import {
  API_URL, EMPLOYEES_BASE_URL
} from './config';

const apiConfig = (method: string) => ({
  method: method,
  headers: {
    'Content-Type': 'application/json'
  }
});


// Types
export type Name = {
  title: string;
  first: string;
  last: string;
};

export type Street = {
  number: number;
  name: string;
};

export type Coordinates = {
  latitude: string;
  longitude: string;
};

export type TimeZone = {
  offset: string;
  description: string;
};

export type Location = {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: TimeZone;
};

export type Login = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

export type Dob = {
  date: string;
  age: number;
};

export type Registered = {
  date: string;
  age: number;
};

export type Id = {
  name: string;
  value: string;
};

export type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
}

export type CreateEmployee = {
  gender: string;
  name: Name;
  email: string;
  phone: string;
  department: string;
}

export type Employee = {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  department: string
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
};

export type Employees = {
  employees: Employee[];
  count: number;
};

export default {
  fetchEmployees: async (query: string, page: number): Promise<Employees> => {
    const endpoint: string = query
      ? `${EMPLOYEES_BASE_URL}?${query}&page=${page}`
      : `${EMPLOYEES_BASE_URL}?page=${page}`;

    return await (await fetch(endpoint)).json();
  },
  fetchEmployee: async (employeeId: number): Promise<Employee> => {
    const endpoint: string = `${EMPLOYEES_BASE_URL}/${employeeId}`;
    return await (await fetch(endpoint)).json();
  },
  createEmployee: async (value: Employee): Promise<Employee> => {
    const endpoint: string = EMPLOYEES_BASE_URL;

    const employee = await (
      await fetch(endpoint, {
        ...apiConfig('POST'),
        body: JSON.stringify({ value })
      })
    ).json();

    return employee;
  },
  updateEmployee: async (employeeId: number, value: Employee): Promise<Employee> => {
    const endpoint: string = `${EMPLOYEES_BASE_URL}/${employeeId}`;

    const employee = await (
      await fetch(endpoint, {
        ...apiConfig('PATCH'),
        body: JSON.stringify({ value })
      })
    ).json();

    return employee;
  },
  deleteEmployee: async (employeeId: number, value: Employee): Promise<Employee> => {
    const endpoint: string = `${EMPLOYEES_BASE_URL}/${employeeId}`;

    const employee = await (
      await fetch(endpoint, {
        ...apiConfig('DELETE'),
        body: JSON.stringify({ value })
      })
    ).json();

    return employee;
  }
};