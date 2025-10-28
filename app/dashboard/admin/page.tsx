export default function DashboardPage() {
  return (
    <div>
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-600">
          Comprehensive overview of your educational platform
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded-lg border border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-sm font-medium text-gray-600">
              Total Students
            </h3>
            <span className="text-green-500 text-xl">📊</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">0</p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-sm font-medium text-gray-600">Total Tutors</h3>
            <span className="text-orange-500 text-xl">🎓</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">0</p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
            <span className="text-pink-500 text-xl">💰</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">0</p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-sm font-medium text-gray-600">
              Active Organizations
            </h3>
            <span className="text-purple-500 text-xl">🏢</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">0</p>
        </div>
      </div>

      {/* Second Row Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-5 rounded-lg border border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-sm font-medium text-gray-600">
              Assignments Submitted
            </h3>
            <span className="text-red-500 text-xl">📝</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">0</p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-sm font-medium text-gray-600">
              Live Sessions Conducted
            </h3>
            <span className="text-blue-500 text-xl">📹</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">0</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Revenue Trends */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900">Revenue Trends</h2>
            <select className="text-sm border border-gray-300 rounded px-3 py-1">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Yearly</option>
            </select>
          </div>
          <div className="flex gap-4 text-xs mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="text-gray-600">Assignment Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="text-gray-600">Course Sales</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="text-gray-600">Live Sessions</span>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded relative">
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around px-4 pb-4 h-full">
              {[45, 30, 55, 35, 65, 40, 75, 50, 45, 35, 60, 40].map(
                (height, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1 flex-1 max-w-12">
                    <div className="w-full flex gap-0.5">
                      <div
                        className="flex-1 bg-orange-500 rounded-t"
                        style={{ height: `${height}px` }}></div>
                      <div
                        className="flex-1 bg-red-500 rounded-t"
                        style={{ height: `${height * 0.8}px` }}></div>
                      <div
                        className="flex-1 bg-yellow-500 rounded-t"
                        style={{ height: `${height * 0.6}px` }}></div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Weekly Engagement */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Weekly Engagement
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="20"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="20"
                  strokeDasharray="502"
                  strokeDashoffset="125"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-900">75%</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Student</span>
              <span className="text-sm font-semibold text-gray-900">60</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Tutor</span>
              <span className="text-sm font-semibold text-gray-900">40</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-900">
              Recent Transactions
            </h2>
            <div className="flex gap-2">
              <select className="text-sm border border-gray-300 rounded px-3 py-1">
                <option>All Types</option>
              </select>
              <button className="text-sm border border-gray-300 rounded px-3 py-1 flex items-center gap-1">
                Export ↓
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                  Fee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                  VAT
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-sm text-gray-900">TXN001</td>
                <td className="px-6 py-4 text-sm text-gray-900">Course Sale</td>
                <td className="px-6 py-4 text-sm text-gray-900">$299.99</td>
                <td className="px-6 py-4 text-sm text-gray-900">$4.50</td>
                <td className="px-6 py-4 text-sm text-gray-900">$45.00</td>
                <td className="px-6 py-4 text-sm text-gray-900">2024-01-18</td>
                <td className="px-6 py-4">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    completed
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
