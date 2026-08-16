import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear messages when user starts typing again
    if (error) {
      setError("");
    }

    if (success) {
      setSuccess("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Basic validation
    if (!formData.email.trim()) {
      setError("Please enter your work email.");
      return;
    }

    if (!formData.password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://skillsphere-backend-2brw.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email.trim(),
            password: formData.password,
          }),
        }
      );

      let data;

      try {
        data = await response.json();
      } catch {
        throw new Error(
          "The server returned an invalid response. Please make sure the backend is running."
        );
      }

      if (!response.ok) {
        throw new Error(
          data?.message || "Invalid email or password."
        );
      }

      // Make sure backend returned the user
      if (!data?.user) {
        throw new Error(
          "Login succeeded, but user information was not returned by the server."
        );
      }

      /*
       * Save the authenticated user and token.
       *
       * AuthContext should store these values so that
       * ProtectedRoute / RoleRoute can recognize the user.
       */
      login(data.user, data.token);

      setSuccess("Login successful! Redirecting...");

      /*
       * IMPORTANT:
       *
       * Employee    -> /dashboard
       * Manager     -> /manager/dashboard
       * Admin       -> /admin/dashboard
       */
      const role = String(
        data.user.role || "employee"
      ).toLowerCase();

      // Navigate after login
      if (role === "admin") {
        navigate("/admin/dashboard", {
          replace: true,
        });
      } else if (role === "manager") {
        navigate("/manager/dashboard", {
          replace: true,
        });
      } else {
        navigate("/dashboard", {
          replace: true,
        });
      }
    } catch (err) {
      console.error("Login error:", err);

      setError(
        err?.message ||
          "Unable to login. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      {/* ================= BRAND ================= */}

      <div className="auth-brand">
        <Link to="/" className="brand">
          <div className="brand-icon">
            S
          </div>

          <span>
            SkillSphere
          </span>
        </Link>
      </div>

      {/* ================= LOGIN CONTAINER ================= */}

      <div className="auth-container">

        <div className="auth-card">

          {/* ================= HEADING ================= */}

          <div className="auth-heading">

            <span className="eyebrow">
              WELCOME BACK
            </span>

            <h1>
              Welcome back
            </h1>

            <p>
              Sign in to continue your career journey.
            </p>

          </div>

          {/* ================= ERROR ================= */}

          {error && (
            <div
              className="auth-message error"
              role="alert"
            >
              {error}
            </div>
          )}

          {/* ================= SUCCESS ================= */}

          {success && (
            <div
              className="auth-message success"
              role="status"
            >
              {success}
            </div>
          )}

          {/* ================= LOGIN FORM ================= */}

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}

            <div className="form-group">

              <label htmlFor="login-email">
                Work Email
              </label>

              <input
                id="login-email"
                type="email"
                name="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                disabled={loading}
                required
              />

            </div>

            {/* PASSWORD */}

            <div className="form-group">

              <label htmlFor="login-password">
                Password
              </label>

              <input
                id="login-password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                disabled={loading}
                required
              />

            </div>

            {/* OPTIONS */}

            <div className="form-options">

              <label className="remember">

                <input
                  type="checkbox"
                  name="remember"
                  disabled={loading}
                />

                <span>
                  Remember me
                </span>

              </label>

              <button
                type="button"
                className="forgot-button"
                onClick={() => {
                  setError(
                    "Password reset is not connected yet."
                  );
                }}
              >
                Forgot password?
              </button>

            </div>

            {/* SIGN IN BUTTON */}

            <button
              type="submit"
              className="primary-button full"
              disabled={loading}
            >
              {loading ? (
                "Signing in..."
              ) : (
                "Sign In"
              )}
            </button>

          </form>

          {/* ================= DIVIDER ================= */}

          <div className="auth-divider">
            <span>
              or continue with
            </span>
          </div>

          {/* ================= SOCIAL LOGIN ================= */}

          <div className="social-buttons">

            <button
              type="button"
              disabled={loading}
              onClick={() => {
                setError(
                  "Google sign-in is not connected yet."
                );
              }}
            >
              Google
            </button>

            <button
              type="button"
              disabled={loading}
              onClick={() => {
                setError(
                  "Microsoft sign-in is not connected yet."
                );
              }}
            >
              Microsoft
            </button>

          </div>

          {/* ================= REGISTER ================= */}

          <div className="auth-footer">

            <span>
              Don't have an account?
            </span>

            <Link to="/register">
              Create one
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;