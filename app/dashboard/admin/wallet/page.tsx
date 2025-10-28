export default function WalletPage() {
    return (
      <div>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Wallet</h1>
            <p className="text-sm text-gray-600">
              Manage your platform finances and payouts
            </p>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 text-sm font-medium">
            Payout Request
          </button>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-sm font-medium text-gray-600">
                Total Balance
              </h3>
              <span className="text-green-500 text-xl">💵</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-sm font-medium text-gray-600">
                Monthly Inflow
              </h3>
              <span className="text-orange-500 text-xl">📈</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-sm font-medium text-gray-600">
                Pending Payouts
              </h3>
              <span className="text-pink-500 text-xl">⏳</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="border-b border-gray-200">
            <div className="flex gap-6 px-6">
              <button className="py-4 text-sm font-medium text-purple-600 border-b-2 border-purple-600">
                Transactions
              </button>
              <button className="py-4 text-sm font-medium text-gray-600 hover:text-gray-900">
                Pay out
              </button>
            </div>
          </div>

          {/* Payout Management Section */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                Payout Management
              </h2>
              <div className="flex gap-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search transactions"
                    className="text-sm border border-gray-300 rounded pl-8 pr-3 py-2 w-64"
                  />
                  <svg
                    className="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <select className="text-sm border border-gray-300 rounded px-3 py-2">
                  <option>All Types</option>
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>Processing</option>
                </select>
                <button className="text-sm border border-gray-300 rounded px-3 py-2 flex items-center gap-1">
                  Export ↓
                </button>
              </div>
            </div>

            {/* Payout Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                      Payout ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                      Bank Fee
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                      Request Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">TXN001</td>
                    <td className="px-6 py-4 text-sm text-gray-900">$299.99</td>
                    <td className="px-6 py-4 text-sm text-gray-900">$8.99</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      2024-01-14
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                        completed
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        ⋮
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">TXN001</td>
                    <td className="px-6 py-4 text-sm text-gray-900">$299.99</td>
                    <td className="px-6 py-4 text-sm text-gray-900">$8.99</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      2024-01-14
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                        pending
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        ⋮
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">TXN001</td>
                    <td className="px-6 py-4 text-sm text-gray-900">$299.99</td>
                    <td className="px-6 py-4 text-sm text-gray-900">$8.99</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      2024-01-14
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                        pending
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        ⋮
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">TXN001</td>
                    <td className="px-6 py-4 text-sm text-gray-900">$299.99</td>
                    <td className="px-6 py-4 text-sm text-gray-900">$8.99</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      2024-01-14
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                        processing
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        ⋮
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">TXN001</td>
                    <td className="px-6 py-4 text-sm text-gray-900">$299.99</td>
                    <td className="px-6 py-4 text-sm text-gray-900">$8.99</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      2024-01-14
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                        completed
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        ⋮
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">TXN001</td>
                    <td className="px-6 py-4 text-sm text-gray-900">$299.99</td>
                    <td className="px-6 py-4 text-sm text-gray-900">$8.99</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      2024-01-14
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                        pending
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        ⋮
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}