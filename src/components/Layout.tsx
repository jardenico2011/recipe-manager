import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/features/auth/auth.hooks";

interface LayoutProps {
  savedCount: number;
}

export default function Layout({ savedCount }: LayoutProps) {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `btn btn-ghost btn-sm ${isActive ? "btn-active" : ""}`;

  return (
    <div className="min-h-screen bg-base-200">
      <header className="navbar bg-base-100 shadow-sm px-4">
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold">
            Recipe Manager
          </Link>
        </div>

        <nav className="flex items-center gap-2">
          <NavLink to="/" end className={navClass}>
            Search
          </NavLink>

          {isLoggedIn && (
            <NavLink to="/saved" className={navClass}>
              Saved ({savedCount})
            </NavLink>
          )}

          {isLoggedIn ? (
            <>
              <span className="text-sm hidden sm:inline">
                Hi, {user}!
              </span>
              <button
                onClick={handleLogout}
                className="btn btn-outline btn-sm"
              >
                Sign out
              </button>
            </>
          ) : (
            <NavLink to="/login" className={navClass}>
              Sign in
            </NavLink>
          )}
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}