"use client";
import React, { useState } from "react";
import {
  Search,
  Download,
  Eye,
  Edit2,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  UserCheck,
} from "lucide-react";

const OrganizationManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All Types");

  const stats = [
    {
      label: "Total Organizations",
      value: "4",
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      label: "Total Students",
      value: "4,000",
      icon: Users,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      label: "Monthly Revenue",
      value: "₦469,500",
      icon: DollarSign,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      label: "Avg. Retention",
      value: "87.3%",
      icon: UserCheck,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
  ];

  const organizations = [
    {
      id: 1,
      name: "Lagos State College",
      enrolled: "2021-03-15",
      type: "Government School",
      contact: "Mrs. Aduni Ogundimu",
      email: "admin@lagosstatecollege.edu.ng",
      students: 450,
      revenue: "₦155,000",
      plan: "Premium",
      planColor: "text-orange-600 bg-orange-50",
    },
    {
      id: 2,
      name: "Erudite College",
      enrolled: "2023-04-16",
      type: "Private School",
      contact: "Dr. Michael Adebayo",
      email: "admin@eruditeschool.com",
      students: 450,
      revenue: "₦155,000",
      plan: "Standard",
      planColor: "text-blue-600 bg-blue-50",
    },
    {
      id: 3,
      name: "Hope Foundation NGO",
      enrolled: "2023-08-11",
      type: "NGO",
      contact: "Fatima Yusuf",
      email: "info@hopefoundation.org",
      students: 450,
      revenue: "₦155,000",
      plan: "Enterprise",
      planColor: "text-green-600 bg-green-50",
    },
    {
      id: 4,
      name: "Lagos State College",
      enrolled: "2021-04-18",
      type: "University",
      contact: "Mrs. Aduni Ogundimu",
      email: "admin@lagosstatecollege.edu.ng",
      students: 450,
      revenue: "₦155,000",
      plan: "Basic",
      planColor: "text-gray-600 bg-gray-50",
    },
    {
      id: 5,
      name: "Lagos State College",
      enrolled: "2023-04-16",
      type: "NGO",
      contact: "Mrs. Aduni Ogundimu",
      email: "admin@lagosstatecollege.edu.ng",
      students: 450,
      revenue: "₦155,000",
      plan: "Enterprise",
      planColor: "text-green-600 bg-green-50",
    },
    {
      id: 6,
      name: "Lagos State College",
      enrolled: "2023-04-16",
      type: "Private School",
      contact: "Mrs. Aduni Ogundimu",
      email: "admin@lagosstatecollege.edu.ng",
      students: 450,
      revenue: "₦155,000",
      plan: "Enterprise",
      planColor: "text-green-600 bg-green-50",
    },
  ];

  const filteredOrgs = organizations.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All Types" || org.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Organization Management
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage institutional partnerships and group accounts
            </p>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Add Organization
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                  <stat.icon size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Organization Directory */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              Organization Directory
            </h2>
          </div>

          {/* Search and Filter */}
          <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search organization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
                <option>All Types</option>
                <option>Government School</option>
                <option>Private School</option>
                <option>NGO</option>
                <option>University</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Download size={18} />
                Export
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Organization
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Type
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Contact Person
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Students
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Revenue
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Plan
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredOrgs.map((org) => (
                  <tr
                    key={org.id}
                    className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
                          {org.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {org.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            Enrolled: {org.enrolled}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm text-gray-700">{org.type}</span>
                    </td>
                    <td className="py-4 px-5">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {org.contact}
                        </p>
                        <p className="text-xs text-gray-500">{org.email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm text-gray-900">
                        {org.students}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm font-medium text-gray-900">
                        {org.revenue}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${org.planColor}`}>
                        {org.plan}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <div className="flex gap-2">
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="View">
                          <Eye size={16} className="text-gray-500" />
                        </button>
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Edit">
                          <Edit2 size={16} className="text-gray-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationManagement;
