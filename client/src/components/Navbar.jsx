import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar({
  onSearch,
  placeholder = "Search…",
}) {
  const { user, logout } = useAuth();

  const firstName =
    user?.firstName ||
    user?.name?.split(" ")[0] ||
    "Alex";

  const lastName =
    user?.lastName ||
    user?.name?.split(" ").slice(1).join(" ") ||
    "Rivera";

  const fullName =
    user?.name ||
    `${firstName} ${lastName}`;

  const initials =
    `${firstName[0] || ""}${lastName[0] || ""}`.toUpperCase();

  return (
    <header className="top-navbar">
      <div className="navbar-search">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) =>
            onSearch?.(e.target.value)
          }
        />
      </div>

      <div className="navbar-user">
        <div className="navbar-avatar">
          {initials}
        </div>

        <div className="navbar-user-info">
          <strong>{fullName}</strong>

          <span>
            {user?.currentRole ||
              user?.role ||
              "Frontend Developer"}
          </span>
        </div>

        <button
          type="button"
          className="navbar-logout"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}