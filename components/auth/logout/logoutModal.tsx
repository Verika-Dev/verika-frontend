export default function LogoutModal({
  open,
  onCancel,
  onConfirm,
  loading,
}: {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  loading: boolean;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white/20 bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-sm rounded-lg shadow-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900">Confirm Logout</h2>
        <p className="text-sm text-gray-600 mt-2">
          Are you sure you want to log out of your account?
        </p>

        <div className="flex items-center justify-end gap-3 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm cursor-pointer rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-4 py-2 text-sm rounded-md cursor-pointer bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">
            {loading ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
}
