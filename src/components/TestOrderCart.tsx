import { ShoppingCart, Search, Trash2, Tag, CreditCard, Banknote, Smartphone } from 'lucide-react';

export default function TestOrderCart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-24">
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center border-b pb-4">
        <ShoppingCart className="mr-2 text-blue-500" size={24} />
        Test Order Cart
      </h2>

      {/* Test Selection */}
      <div className="mb-6 relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">Add Diagnostic Tests</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm transition-colors"
            placeholder="Search for tests..."
          />
        </div>
      </div>

      {/* Selected Tests List (Hardcoded) */}
      <div className="mb-6 bg-gray-50 rounded-lg border border-gray-200 overflow-hidden min-h-[120px]">
        <ul className="divide-y divide-gray-200">
          <li className="p-3 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors">
            <span className="text-sm font-medium text-gray-800 truncate pr-2">CBC (Complete Blood Count)</span>
            <div className="flex items-center space-x-3 shrink-0">
              <span className="text-sm font-semibold text-gray-700">₹300.00</span>
              <button className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </li>
          <li className="p-3 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors">
            <span className="text-sm font-medium text-gray-800 truncate pr-2">HbA1c</span>
            <div className="flex items-center space-x-3 shrink-0">
              <span className="text-sm font-semibold text-gray-700">₹400.00</span>
              <button className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </li>
          <li className="p-3 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors">
            <span className="text-sm font-medium text-gray-800 truncate pr-2">Lipid Profile</span>
            <div className="flex items-center space-x-3 shrink-0">
              <span className="text-sm font-semibold text-gray-700">₹600.00</span>
              <button className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        </ul>
      </div>

      {/* B2B Partner */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
          <Tag size={14} className="mr-1.5 text-blue-500" />
          B2B Partner / Corporate
        </label>
        <select
          defaultValue="TechCorp"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm bg-white"
        >
          <option value="None">None (Direct Walk-in)</option>
          <option value="TechCorp">TechCorp (15% off)</option>
          <option value="HealthPlus">HealthPlus (10% off)</option>
        </select>
      </div>

      {/* Static Billing Summary */}
      <div className="mb-6 p-4 bg-blue-50/50 rounded-lg border border-blue-100">
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold text-gray-800">₹1,300.00</span>
        </div>
        <div className="flex justify-between items-center mb-2 text-sm text-green-600">
          <span>B2B Discount Applied (15%)</span>
          <span className="font-semibold">-₹195.00</span>
        </div>
        <div className="border-t border-blue-200 my-3"></div>
        <div className="flex justify-between items-center">
          <span className="text-base font-bold text-gray-900">Net Payable</span>
          <span className="text-lg font-bold text-blue-600">₹1,105.00</span>
        </div>
      </div>

      {/* Payment Mode */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">Payment Mode</label>
        <div className="grid grid-cols-3 gap-3">
          <button
            type="button"
            className="flex flex-col items-center justify-center p-3 border rounded-lg transition-all border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
          >
            <Banknote size={20} className="mb-1" />
            <span className="text-xs font-semibold">Cash</span>
          </button>
          <button
            type="button"
            className="flex flex-col items-center justify-center p-3 border rounded-lg transition-all border-blue-500 bg-blue-50 text-blue-700 shadow-sm"
          >
            <Smartphone size={20} className="mb-1" />
            <span className="text-xs font-semibold">UPI</span>
          </button>
          <button
            type="button"
            className="flex flex-col items-center justify-center p-3 border rounded-lg transition-all border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
          >
            <CreditCard size={20} className="mb-1" />
            <span className="text-xs font-semibold">Card</span>
          </button>
        </div>
      </div>

      <button 
        type="button"
        className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-colors shadow-sm flex items-center justify-center"
      >
        Complete Order (₹1,105.00)
      </button>
    </div>
  );
}
