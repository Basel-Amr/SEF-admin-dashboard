
import { useState } from "react";
import { NavLink } from "react-router-dom";
import nexCartLogo from "../../assets/NexCart-logo.png";

const navigationGroups = [
  {
    label: "OVERVIEW",
    items: [
      {
        label: "Dashboard",
        icon: "fa-solid fa-house",
        to: ".",
        end: true,
      },
    ],
  },
  {
    label: "STORE MANAGEMENT",
    items: [
      {
        label: "Customers",
        icon: "fa-solid fa-users",
        to: "customers",
      },
      {
        label: "Products",
        icon: "fa-solid fa-box-open",
        to: "products",
      },
      {
        label: "Add Product",
        icon: "fa-solid fa-circle-plus",
        to: "products/new",
        highlight: true,
      },
      {
        label: "Orders",
        icon: "fa-solid fa-receipt",
        to: "orders",
      },
      {
        label: "Carts",
        icon: "fa-solid fa-cart-shopping",
        to: "carts",
      },
    ],
  },
  {
    label: "INSIGHTS & PREFERENCES",
    items: [
      {
        label: "Analytics",
        icon: "fa-solid fa-chart-line",
        to: "analytics",
      },
      {
        label: "Settings",
        icon: "fa-solid fa-gear",
        to: "settings",
      },
    ],
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  const getLinkClass = ({ isActive }) =>
    `group relative flex items-center gap-3 rounded-lg px-3 py-2.5
    text-[13px] font-medium transition-all duration-200
    ${
      isActive
        ? "border border-(--nc-primary)/20 bg-(--nc-primary)/10 text-(--nc-primary) shadow-sm shadow-cyan-950/20"
        : "border border-transparent text-slate-400 hover:bg-slate-800/70 hover:text-white"
    }`;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        className="fixed left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-white shadow-lg transition hover:border-(--nc-primary) hover:text-(--nc-primary) lg:hidden"
      >
        <i className="fa-solid fa-bars text-lg" aria-hidden="true" />
      </button>

      {/* Mobile Backdrop */}
      {isOpen && (
        <button
          type="button"
          onClick={closeSidebar}
          aria-label="Close navigation menu"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-dvh w-72 flex-col
          overflow-hidden border-r border-slate-800/80 bg-slate-950
          text-white shadow-2xl shadow-black/30
          transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Brand */}
        <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-slate-800/80 px-5">
          <NavLink
            to="."
            end
            onClick={closeSidebar}
            className="flex min-w-0 items-center gap-2.5"
            aria-label="NexCart Dashboard"
          >
            <img
              src={nexCartLogo}
              alt="NexCart logo"
              className="h-10 w-10 shrink-0 object-contain"
            />

            <span className="text-xl font-extrabold tracking-tight text-white">
              Nex<span className="text-(--nc-primary)">Cart</span>
            </span>
          </NavLink>

          <button
            type="button"
            onClick={closeSidebar}
            aria-label="Close navigation menu"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-white lg:hidden"
          >
            <i className="fa-solid fa-xmark text-lg" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Main navigation"
          className="flex-1 space-y-5 overflow-hidden px-3 py-4"
        >
          {navigationGroups.map((group) => (
            <div key={group.label}>
              <h2 className="mb-2 px-3 text-[9px] font-bold tracking-[0.16em] text-slate-500">
                {group.label}
              </h2>

              <div className="space-y-1">
                {group.items.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    end={item.end}
                    onClick={closeSidebar}
                    className={getLinkClass}
                  >
                    <i
                      className={`${item.icon} w-5 shrink-0 text-center text-sm ${
                        item.highlight ? "text-(--nc-primary)" : ""
                      }`}
                      aria-hidden="true"
                    />

                    <span className="flex-1">{item.label}</span>

                    {item.highlight && (
                      <span className="rounded-md bg-(--nc-primary)/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-(--nc-primary)">
                        New
                      </span>
                    )}

                    <i
                      className={`fa-solid fa-chevron-right text-[9px] transition-all ${
                        item.highlight
                          ? "text-(--nc-primary)/60"
                          : "text-transparent group-hover:translate-x-0.5 group-hover:text-slate-500"
                      }`}
                      aria-hidden="true"
                    />
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom Status */}
        <div className="shrink-0 border-t border-slate-800/80 p-3">
          <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[11px] font-medium text-slate-300">
                Dashboard services
              </span>

              <span className="ml-auto text-[9px] font-semibold text-emerald-400">
                Ready
              </span>
            </div>

            <p className="mt-1.5 text-[10px] leading-4 text-slate-500">
              Your store management, all in one place.
            </p>
          </div>

          <p className="mt-2 text-center text-[9px] tracking-wide text-slate-600">
            NEXCART ADMIN · V1.0
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
