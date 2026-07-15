import { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown, User as UserIcon } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Header() {
  const { user, toggleRole } = useAppContext();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center flex-1">
        <div className="relative w-96 hidden md:block group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500">
            <Search size={18} />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-colors duration-200"
            placeholder="Search... (Ctrl + K)"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-400 text-xs font-semibold border border-gray-200 rounded px-1.5 py-0.5 bg-white">Ctrl K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="hidden sm:flex items-center space-x-1 text-sm font-medium text-gray-600 bg-gray-100 py-1.5 px-3 rounded-full">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>IST: {time}</span>
        </div>

        <button className="text-gray-400 hover:text-gray-500 relative p-1 rounded-full hover:bg-gray-100 transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
        </button>

        <div className="flex items-center space-x-3 border-l border-gray-200 pl-6 cursor-pointer group" onClick={toggleRole}>
          {user?.avatarUrl ? (
            <img src={user.avatarUrl} alt="Avatar" className="h-8 w-8 rounded-full border border-gray-200" />
          ) : (
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              <UserIcon size={16} />
            </div>
          )}
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{user?.name}</span>
            <span className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors" title="Click to toggle role for testing">
              {user?.role}
            </span>
          </div>
          <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600" />
        </div>
      </div>
    </header>
  );
}
