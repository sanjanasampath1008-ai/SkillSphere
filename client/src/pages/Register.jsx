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

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password;

    // Check the actual values
    if (name === "" || email === "" || password === "") {
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
  "https://skillsphere-backend-2brw.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to create account."
        );
      }

      setSuccess(
        "Account created successfully! Redirecting to login..."
      );

      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1000);

    } catch (err) {
      console.error("Registration error:", err);

      setError(
        err.message || "Unable to create account."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page register-page">

      <div className="auth-brand">
        <Link to="/" className="brand">
          <div className="brand-icon">S</div>
          <span>SkillSphere</span>
        </Link>
      </div>

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

          {error && (
            <div className="auth-message error">
              {error}
            </div>
          )}

          {success && (
            <div className="auth-message success">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label htmlFor="register-name">
                Name
              </label>

              <input
                id="register-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="register-email">
                Work Email
              </label>

              <input
                id="register-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="register-password">
                Password
              </label>

              <input
                id="register-password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />

            </div>

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