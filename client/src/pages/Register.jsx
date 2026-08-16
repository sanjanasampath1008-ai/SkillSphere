import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

    // Remove old validation message as soon as user edits
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // IMPORTANT:
    // Trim the values before checking them.
    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password.trim();

    if (!name || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to create your account."
        );
      }

      setSuccess(
        data.message ||
          "Account created successfully! Redirecting to login..."
      );

      // Clear form
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      // Go to login after successful registration
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1000);
    } catch (err) {
      console.error("Registration error:", err);

      setError(
        err.message ||
          "Unable to create your account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page register-page">

      {/* LEFT / BRAND AREA */}
      <div className="auth-brand">
        <Link to="/" className="brand">
          <div className="brand-icon">S</div>
          <span>SkillSphere</span>
        </Link>
      </div>

      {/* REGISTER AREA */}
      <div className="auth-container">

        <div className="auth-card">

          <div className="auth-heading">

            <span className="eyebrow">
              GET STARTED
            </span>

            <h1>Create your account</h1>

            <p>
              Start building your career development journey.
            </p>

          </div>

          {/* ERROR */}
          {error && (
            <div className="auth-message error">
              {error}
            </div>
          )}

          {/* SUCCESS */}
          {success && (
            <div className="auth-message success">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="form-group">

              <label htmlFor="register-name">
                Name
              </label>

              <input
                id="register-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />

            </div>

            {/* EMAIL */}
            <div className="form-group">

              <label htmlFor="register-email">
                Work Email
              </label>

              <input
                id="register-email"
                type="email"
                name="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />

            </div>

            {/* PASSWORD */}
            <div className="form-group">

              <label htmlFor="register-password">
                Password
              </label>

              <input
                id="register-password"
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                minLength={6}
                required
              />

            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="primary-button full"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          {/* FOOTER */}
          <div className="auth-footer">

            Already have an account?

            <Link to="/login">
              {" "}Sign in
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;