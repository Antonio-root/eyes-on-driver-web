import {User} from "../models/User.model";

const API_URL = 'http://localhost:8080/user';

//GET all users
export const getUsers = async (): Promise<User[]> => {
    const response = await fetch(`${API_URL}/ver`);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
};

//POST new user
export async function createUser (user: User): Promise<User> {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        throw new Error('Failed to create user');
    }
    return response.json();
}