import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { Search, User, Phone, MapPin, Activity, Stethoscope } from 'lucide-react';
import TestOrderCart from '../components/TestOrderCart';

export default function Registration() {
  const [lookupQuery, setLookupQuery] = useState('');
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: 'Male',
    contact: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    symptoms: '',
    covidStatus: 'Negative'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Registration</h1>
          <p className="text-sm text-gray-500 mt-1">Register new patients or look up existing ones.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          {/* Smart Lookup Engine */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 transition-shadow hover:shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Search className="mr-2 text-blue-500" size={20} />
          Smart Lookup Engine
        </h2>
        <div className="relative max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:text-sm transition-all duration-200"
            placeholder="Search by Patient Name or Phone Number..."
            value={lookupQuery}
            onChange={(e) => setLookupQuery(e.target.value)}
          />
          <button className="absolute inset-y-1.5 right-1.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors shadow-sm">
            Lookup
          </button>
        </div>
      </div>

      {/* New Patient Onboarding Form */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center border-b pb-4">
          <User className="mr-2 text-blue-500" size={24} />
          New Patient Onboarding
        </h2>

        <form className="space-y-8">
          {/* Demographics Section */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center mb-4">
              <User size={16} className="mr-2 text-gray-500" />
              Demographics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="col-span-1 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                  placeholder="John"
                />
              </div>
              <div className="col-span-1 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                  placeholder="Doe"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                  placeholder="30"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm bg-white"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-span-1 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone size={14} className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* Address Section */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center mb-4">
              <MapPin size={16} className="mr-2 text-gray-500" />
              Address
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="col-span-1 md:col-span-2 lg:col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                  placeholder="123 Main St, Apt 4B"
                />
              </div>
              <div className="col-span-1 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                  placeholder="Mumbai"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                  placeholder="Maharashtra"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP / Postal</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                  placeholder="400001"
                />
              </div>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* Medical History Section */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center mb-4">
              <Activity size={16} className="mr-2 text-gray-500" />
              Medical History
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Stethoscope size={14} className="mr-1.5 text-gray-500" />
                  Presenting Symptoms
                </label>
                <textarea
                  name="symptoms"
                  rows={3}
                  value={formData.symptoms}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                  placeholder="Describe patient's current symptoms or reason for visit..."
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">COVID Vaccination Status</label>
                <select
                  name="covidStatus"
                  value={formData.covidStatus}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm bg-white"
                >
                  <option value="Fully Vaccinated">Fully Vaccinated</option>
                  <option value="Partially Vaccinated">Partially Vaccinated</option>
                  <option value="Not Vaccinated">Not Vaccinated</option>
                </select>
              </div>
            </div>
          </section>

          <div className="pt-4 flex justify-end space-x-3">
            <button type="button" className="px-5 py-2.5 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm">
              Clear Form
            </button>
            <button type="button" className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
              Register Patient
            </button>
          </div>
        </form>
      </div>
        </div>
        <div className="xl:col-span-1">
          <TestOrderCart />
        </div>
      </div>
    </div>
  );
}
