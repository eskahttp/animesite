const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000';

type Options = {
    method?: 'GET' | 'POST';
    body?: unknown;
    headers?: Record<string, string>;
};

class ApiError extends Error {
    status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

async function request<T>(path: string, options: Options = {}): Promise<T> {

    const res = await fetch(`${BASE_URL}${path}`, {
        method: options.method ?? 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!res.ok) {
        const text = await res.text();
        throw new ApiError(res.status, text || res.statusText);
    }

    if (res.status === 204) return undefined as T;

    return res.json() as Promise<T>;
}

export const api = {
    get:  <T>(path: string)              => request<T>(path),
    post: <T>(path: string, body?: unknown) => request<T>(path, { method: 'POST', body }),
};