import type { ElementType } from 'react';
import { 
  LayoutDashboard, 
  UserPlus, 
  FolderOpen, 
  Activity, 
  DollarSign, 
  Settings,
  LogOut,
  Hexagon
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import type { UserRole } from '../context/AppContext';

interface NavItem {
  name: string;
  icon: ElementType;
  roles: UserRole[];
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', icon: LayoutDashboard, roles: ['Admin'], href: '#' },
  { name: 'Registration', icon: UserPlus, roles: ['Admin', 'Employee'], href: '#' },
  { name: 'Accession', icon: FolderOpen, roles: ['Admin'], href: '#' },
  { name: 'Operations', icon: Activity, roles: ['Admin'], href: '#' },
  { name: 'Finance', icon: DollarSign, roles: ['Admin'], href: '#' },
  { name: 'Admin', icon: Settings, roles: ['Admin'], href: '#' },
];

export default function Sidebar() {
  const { user, currentView, setCurrentView } = useAppContext();
  
  if (!user) return null;

  const filteredNavItems = navItems.filter(item => item.roles.includes(user.role));

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col h-screen sticky top-0 transition-all duration-300">
      <div className="h-16 flex items-center px-6 border-b border-gray-800">
        <Hexagon className="text-blue-500 mr-3" size={28} />
        <span className="text-xl font-bold tracking-wider text-white">D-LABS</span>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-3">
        <div className="mb-6 px-3">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Navigation
          </p>
        </div>
        <nav className="space-y-1.5">
          {filteredNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentView(item.name);
                }}
                className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg group transition-all duration-200 ${
                  currentView === item.name 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Icon size={20} className={`mr-3 transition-colors ${
                  currentView === item.name ? 'text-white' : 'text-gray-400 group-hover:text-blue-400'
                }`} />
                {item.name}
              </a>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-800">
        <button className="flex w-full items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-400 hover:text-white hover:bg-red-500/10 hover:text-red-400 transition-all duration-200">
          <LogOut size={20} className="mr-3" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
