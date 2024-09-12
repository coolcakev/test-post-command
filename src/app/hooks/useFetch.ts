import React from 'react';

const useFetch = async<T>(url: string, init?: RequestInit): Promise<T> => {
    const res = await fetch(url, init)
    return await res.json()
};

export default useFetch;