
function UsersTable({ users, onDelete, deletingId }) {
  if (users.length === 0) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-10 text-center">
        <h3 className="font-semibold">No users found</h3>
        <p className="mt-2 text-sm text-slate-400">
          There are no users to display.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-800">
      <table className="w-full min-w-[650px] text-left text-sm">
        <thead className="bg-slate-900 text-slate-400">
          <tr>
            <th className="px-5 py-4 font-medium">User</th>
            <th className="px-5 py-4 font-medium">Email</th>
            <th className="px-5 py-4 font-medium">Role</th>
            <th className="px-5 py-4 text-right font-medium">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-800 bg-slate-950">
          {users.map((user) => {
            const id = user.id ?? user._id;
            const name =
              user.name ||
              user.username ||
              user.email ||
              "Unnamed user";

            return (
              <tr key={id ?? user.email} className="hover:bg-slate-900/60">
                <td className="px-5 py-4 font-medium text-white">
                  {name}
                </td>

                <td className="px-5 py-4 text-slate-400">
                  {user.email || "—"}
                </td>

                <td className="px-5 py-4">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    {user.role || "User"}
                  </span>
                </td>

                <td className="px-5 py-4 text-right">
                  <button
                    type="button"
                    disabled={id == null || deletingId === id}
                    onClick={() => onDelete(user)}
                    className="rounded-lg px-3 py-2 font-medium text-red-400 hover:bg-red-500/10 disabled:opacity-50"
                  >
                    {deletingId === id ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
