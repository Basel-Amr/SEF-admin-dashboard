
import { useCallback, useEffect, useState } from "react";
import { deleteUser, getUsers } from "../../api/users.api";
import UsersTable from "../../components/users/UsersTable";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [notice, setNotice] = useState("");

  const loadUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getUsers();

      // Support common response shapes; adjust to the real API response.
      const list = Array.isArray(data)
        ? data
        : data.users ?? data.data?.users ?? data.data;

      if (!Array.isArray(list)) {
        throw new Error("The API response did not contain a users list.");
      }

      setUsers(list);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Failed to load users."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  async function handleDelete(user) {
    const id = user.id ?? user._id;

    if (id == null) {
      setError("This user has no recognized ID, so it cannot be deleted.");
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete ${user.name || user.email || "this user"}?`
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);
      setError("");
      setNotice("");

      await deleteUser(id);

      setUsers((currentUsers) =>
        currentUsers.filter(
          (item) => (item.id ?? item._id) !== id
        )
      );

      setNotice("User deleted successfully.");
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to delete user."
      );
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <section>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-blue-400">
            MANAGEMENT
          </p>
          <h1 className="mt-2 text-3xl font-bold">Users</h1>
          <p className="mt-2 text-slate-400">
            View and manage registered users.
          </p>
        </div>

        <button
          type="button"
          onClick={loadUsers}
          disabled={loading}
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-900 disabled:opacity-50"
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {notice && (
        <p
          role="status"
          className="mb-5 rounded-lg border border-emerald-800 bg-emerald-950/40 p-3 text-sm text-emerald-300"
        >
          {notice}
        </p>
      )}

      {error && (
        <div
          role="alert"
          className="mb-5 rounded-lg border border-red-800 bg-red-950/40 p-4 text-sm text-red-300"
        >
          {error}
          <button
            type="button"
            onClick={() => setError("")}
            className="ml-3 underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {loading ? (
        <div className="rounded-xl border border-slate-800 p-10 text-center text-slate-400">
          Loading users...
        </div>
      ) : (
        <UsersTable
          users={users}
          onDelete={handleDelete}
          deletingId={deletingId}
        />
      )}
    </section>
  );
}

export default UsersPage;
