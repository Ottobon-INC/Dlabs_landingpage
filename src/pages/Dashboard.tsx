import { Users, IndianRupee, FlaskConical, ArrowUpRight, ArrowDownRight, Building2, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const REVENUE_DATA = [
  { day: 'Mon', revenue: 18000 },
  { day: 'Tue', revenue: 21500 },
  { day: 'Wed', revenue: 19200 },
  { day: 'Thu', revenue: 24800 },
  { day: 'Fri', revenue: 22100 },
  { day: 'Sat', revenue: 15400 },
  { day: 'Sun', revenue: 12000 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
        <p className="text-sm text-gray-500 mt-1">Key metrics and performance indicators for your lab.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Encounters */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Encounters</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">1,284</h3>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
              <Users size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowUpRight size={16} className="text-green-500 mr-1" />
            <span className="text-green-600 font-medium">+12.5%</span>
            <span className="text-gray-400 ml-2">from last month</span>
          </div>
        </div>

        {/* Expected Collections */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Expected Collections</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">₹1,45,200</h3>
            </div>
            <div className="p-3 bg-green-50 rounded-lg text-green-600">
              <IndianRupee size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowUpRight size={16} className="text-green-500 mr-1" />
            <span className="text-green-600 font-medium">+8.2%</span>
            <span className="text-gray-400 ml-2">from last month</span>
          </div>
        </div>

        {/* Pending Accession Count */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Pending Accession Count</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">24</h3>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
              <FlaskConical size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowDownRight size={16} className="text-red-500 mr-1" />
            <span className="text-red-600 font-medium">-4.1%</span>
            <span className="text-gray-400 ml-2">from yesterday</span>
          </div>
        </div>

        {/* Active B2B Corporate Clients */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Active B2B Corporate Clients</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">87</h3>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
              <Building2 size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowUpRight size={16} className="text-green-500 mr-1" />
            <span className="text-green-600 font-medium">+3.0%</span>
            <span className="text-gray-400 ml-2">from last month</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">7-Day Revenue Trend</h2>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={REVENUE_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 12 }} 
                dy={10} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 12 }} 
                tickFormatter={(value: any) => `₹${value / 1000}k`} 
              />
              <Tooltip 
                cursor={{ fill: '#F3F4F6' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                formatter={(value: any) => [`₹${value.toLocaleString()}`, 'Revenue']}
              />
              <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>
                {REVENUE_DATA.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 3 ? '#2563EB' : '#93C5FD'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Patient Intake Ledger */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Recent patient intake ledger</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Accession Number</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Patient Name</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">B2B Partner</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Bill Amount</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">#ACC-2410-001</td>
                <td className="px-6 py-4 text-sm text-gray-700">Ramesh Kumar</td>
                <td className="px-6 py-4 text-sm text-gray-700">City Hospital</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">₹4,500</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle2 size={14} className="mr-1" /> Completed
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">#ACC-2410-002</td>
                <td className="px-6 py-4 text-sm text-gray-700">Priya Sharma</td>
                <td className="px-6 py-4 text-sm text-gray-700">Apex Clinics</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">₹1,250</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    <Clock size={14} className="mr-1" /> Pending
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">#ACC-2410-003</td>
                <td className="px-6 py-4 text-sm text-gray-700">Amit Singh</td>
                <td className="px-6 py-4 text-sm text-gray-700">Dr. Mehta's Clinic</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">₹8,900</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle2 size={14} className="mr-1" /> Completed
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">#ACC-2410-004</td>
                <td className="px-6 py-4 text-sm text-gray-700">Sneha Patel</td>
                <td className="px-6 py-4 text-sm text-gray-700">City Hospital</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">₹3,200</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    <Clock size={14} className="mr-1" /> Pending
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">#ACC-2410-005</td>
                <td className="px-6 py-4 text-sm text-gray-700">Vikram Desai</td>
                <td className="px-6 py-4 text-sm text-gray-700">MediCare Life</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">₹2,100</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <AlertCircle size={14} className="mr-1" /> Failed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
