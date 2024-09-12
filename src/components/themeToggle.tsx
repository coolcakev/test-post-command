'use client';
import {useEffect, useState} from 'react';
import Switch from "@/components/switch";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="p-4">
            <Switch onClick={toggleTheme}/>
        </div>
    );
}