import {User} from "../models/User.model";

const API_URL = 'http://localhost:8080';

//GET all users
export const getUsers = async (): Promise<User[]> => {
    const response = await fetch(`${API_URL}/user/ver`);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
};

//POST new user
export async function createUser (user: User): Promise<User> {
    const response = await fetch(`${API_URL}/auth/register`, {
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

//POST login user
export async function loginUser (email: string, password: string): Promise<{ token: string }> {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
        throw new Error('Failed to login');
    }
    
    const data = await response.json();

    // Guardar token SOLO si localStorage está disponible
    if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
    }
    return data;
}

//GET user authenticated
export async function getAuthenticatedUser(): Promise<User> {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error('No token found');
    }

    const response = await fetch(`${API_URL}/auth/me`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error('Failed to fetch authenticated user');
    }
    return data.user;
}

//PUT update user
export async function updateUser(user: User): Promise<User> {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error('No token found');
    }

    const response = await fetch(`${API_URL}/auth/update`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        throw new Error('Failed to update user');
    }
    return response.json();
}

//DELETE user account
export async function deleteUserAccount(): Promise<void> {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error('No token found');
    }

    const response = await fetch(`${API_URL}/auth/delete`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error('Failed to delete user account');
    }
}