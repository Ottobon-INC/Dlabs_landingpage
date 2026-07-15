import { Search, FlaskConical, AlertCircle, FileSignature, CheckCircle2, Activity, Beaker } from 'lucide-react';

export default function Operations() {
  return (
    <div className="space-y-6 flex flex-col h-[calc(100vh-8rem)]">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Operations Console</h1>
        <p className="text-sm text-gray-500 mt-1">Manage sample processing and test parameter entry.</p>
      </div>

      <div className="flex-1 flex gap-6 min-h-0">
        {/* Left Pane: Waiting List */}
        <div className="w-1/3 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50/50">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Search size={16} />
              </div>
              <input
                type="text"
                className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors shadow-sm"
                placeholder="Search accession numbers or names..."
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            
            {/* Category: Emergency Reports */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-2 flex items-center">
                <AlertCircle size={14} className="mr-1.5 text-red-500" />
                Emergency Reports
              </h3>
              <ul className="space-y-1.5">
                <li className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg cursor-pointer">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-gray-900 text-sm">Ramesh Kumar</span>
                    <span className="text-[10px] font-bold bg-red-100 text-red-700 px-1.5 py-0.5 rounded border border-red-200">STAT</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    ACC-2410-089 • 45 Yrs • Male
                  </div>
                  <div className="flex items-center text-xs font-medium text-blue-700 bg-blue-100/80 w-fit px-2 py-1 rounded">
                    <Beaker size={12} className="mr-1.5" />
                    Complete Blood Count (CBC)
                  </div>
                </li>
                
                <li className="p-3 hover:bg-gray-50 border-l-4 border-transparent rounded-r-lg cursor-pointer transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-gray-900 text-sm">Sneha Patel</span>
                    <span className="text-[10px] font-bold bg-red-100 text-red-700 px-1.5 py-0.5 rounded border border-red-200">STAT</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    ACC-2410-091 • 28 Yrs • Female
                  </div>
                  <div className="flex items-center text-xs font-medium text-gray-600 bg-gray-100 w-fit px-2 py-1 rounded">
                    <FlaskConical size={12} className="mr-1.5" />
                    Arterial Blood Gas (ABG)
                  </div>
                </li>
              </ul>
            </div>

            {/* Category: Incomplete */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-2 mt-4 flex items-center">
                <Activity size={14} className="mr-1.5 text-amber-500" />
                Incomplete
              </h3>
              <ul className="space-y-1.5">
                <li className="p-3 hover:bg-gray-50 border-l-4 border-transparent rounded-r-lg cursor-pointer transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-gray-900 text-sm">Amit Singh</span>
                    <span className="text-xs font-medium text-gray-500">ACC-2410-092</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    34 Yrs • Male
                  </div>
                  <div className="flex items-center text-xs font-medium text-gray-600 bg-gray-100 w-fit px-2 py-1 rounded">
                    <FlaskConical size={12} className="mr-1.5" />
                    Lipid Profile
                  </div>
                </li>
                <li className="p-3 hover:bg-gray-50 border-l-4 border-transparent rounded-r-lg cursor-pointer transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-gray-900 text-sm">Vikram Desai</span>
                    <span className="text-xs font-medium text-gray-500">ACC-2410-093</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    52 Yrs • Male
                  </div>
                  <div className="flex items-center text-xs font-medium text-gray-600 bg-gray-100 w-fit px-2 py-1 rounded">
                    <Beaker size={12} className="mr-1.5" />
                    Thyroid Profile (T3, T4, TSH)
                  </div>
                </li>
              </ul>
            </div>

            {/* Category: Signed */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-2 mt-4 flex items-center">
                <FileSignature size={14} className="mr-1.5 text-green-500" />
                Signed
              </h3>
              <ul className="space-y-1.5">
                <li className="p-3 hover:bg-gray-50 border-l-4 border-transparent rounded-r-lg cursor-pointer transition-colors opacity-75">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-gray-900 text-sm">Priya Sharma</span>
                    <CheckCircle2 size={14} className="text-green-500" />
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    ACC-2410-088 • 31 Yrs • Female
                  </div>
                  <div className="flex items-center text-xs font-medium text-gray-600 bg-gray-100 w-fit px-2 py-1 rounded">
                    <FlaskConical size={12} className="mr-1.5" />
                    HbA1c
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Right Pane: Parameter Entry Panel */}
        <div className="w-2/3 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col">
          <div className="p-6 border-b border-gray-200 bg-gray-50/50 rounded-t-xl">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Ramesh Kumar</h2>
                <p className="text-sm text-gray-500 mt-1 flex items-center">
                  <span className="font-medium text-gray-700 mr-2">ACC-2410-089</span> 
                  <span className="mx-1">•</span> 45 Yrs <span className="mx-1">•</span> Male <span className="mx-1">•</span>
                  <span className="ml-2 text-[10px] font-bold bg-red-100 text-red-700 px-1.5 py-0.5 rounded border border-red-200">STAT PRIORITY</span>
                </p>
              </div>
              <div className="px-3 py-1.5 rounded-full text-xs font-semibold flex items-center bg-amber-100 text-amber-700 border border-amber-200">
                <Activity size={14} className="mr-1.5" />
                In Processing
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center border-b pb-3">
                <Beaker className="mr-2 text-blue-500" size={20} />
                Complete Blood Count (CBC)
              </h3>
            </div>

            {/* Clinical Data Entry Table */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/3">Parameter Name</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/4">Observed Value</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/6">Unit</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Reference Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  
                  {/* Hemoglobin - Hardcoded Warning State */}
                  <tr className="bg-red-50/30">
                    <td className="px-4 py-4">
                      <span className="text-sm font-medium text-gray-900">Hemoglobin (Hb)</span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="relative max-w-[120px]">
                        <input
                          type="text"
                          defaultValue="7.8"
                          className="block w-full pr-10 pl-3 py-2 border-2 border-red-500 rounded-md shadow-sm bg-red-50 text-red-900 font-bold text-sm focus:outline-none"
                        />
                        <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
                          <AlertCircle size={16} className="text-red-500" />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-gray-600 font-medium">g/dL</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-gray-700 font-mono text-xs font-medium border border-gray-200">
                        13.0 - 17.5
                      </span>
                    </td>
                  </tr>

                  {/* RBC Count - Normal State */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4">
                      <span className="text-sm font-medium text-gray-700">Total RBC Count</span>
                    </td>
                    <td className="px-4 py-4">
                      <input
                        type="text"
                        defaultValue="4.5"
                        className="block w-full max-w-[120px] px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                      />
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-gray-600 font-medium">mill/mm³</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-gray-700 font-mono text-xs font-medium border border-gray-200">
                        4.5 - 5.5
                      </span>
                    </td>
                  </tr>

                  {/* WBC Count - Normal State */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4">
                      <span className="text-sm font-medium text-gray-700">Total WBC Count</span>
                    </td>
                    <td className="px-4 py-4">
                      <input
                        type="text"
                        defaultValue="8500"
                        className="block w-full max-w-[120px] px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                      />
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-gray-600 font-medium">cells/mm³</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-gray-700 font-mono text-xs font-medium border border-gray-200">
                        4000 - 11000
                      </span>
                    </td>
                  </tr>

                  {/* Platelet Count - Empty State */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4">
                      <span className="text-sm font-medium text-gray-700">Platelet Count</span>
                    </td>
                    <td className="px-4 py-4">
                      <input
                        type="text"
                        placeholder="Enter value"
                        className="block w-full max-w-[120px] px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors placeholder-gray-400"
                      />
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-gray-600 font-medium">lakhs/mm³</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-gray-700 font-mono text-xs font-medium border border-gray-200">
                        1.5 - 4.5
                      </span>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

            {/* Abnormal Value Alert Banner */}
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start shadow-sm">
              <AlertCircle size={20} className="text-red-600 mr-3 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-red-800">Critical Value Alert</h4>
                <p className="text-sm text-red-700 mt-1">
                  Hemoglobin (7.8 g/dL) is significantly below the normal reference range (13.0 - 17.5 g/dL). 
                  Auto-flagging has marked this for priority review.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl flex justify-end">
            <button className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition-colors flex items-center shadow-md">
              <FileSignature size={18} className="mr-2" />
              Sign & Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
