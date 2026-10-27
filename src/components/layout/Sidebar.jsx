import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>

      <nav>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/customers">Customers</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/admin/analytics">Analytics</Link>
        <Link to="/admin/settings">Settings</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;