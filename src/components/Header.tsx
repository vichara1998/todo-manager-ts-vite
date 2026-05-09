import { useEffect, useState } from 'react';
import { GoMoon } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        return JSON.parse(localStorage.getItem('darkMode') || 'false');
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <header className="flex justify-between items-center h-[6vh]">
            <div>
                <p className="text-3xl text-primary-fg font-bold font-special uppercase">
                    Finito
                </p>
                <p className="text-gray-400">Minimal Todo List</p>
            </div>
            <div className="flex gap-4 justify-between items-center">
                <IoMdNotificationsOutline className="text-3xl text-primary-fg cursor-pointer" />
                <button
                    onClick={() => {
                        setIsDarkMode((pre) => !pre);
                    }}
                >
                    {isDarkMode ? (
                        <LuSun className="text-3xl text-primary-fg cursor-pointer" />
                    ) : (
                        <GoMoon className="text-3xl text-primary-fg cursor-pointer" />
                    )}
                </button>

                <IoSettingsOutline className="text-3xl text-primary-fg cursor-pointer" />
            </div>
        </header>
    );
};

export default Header;
