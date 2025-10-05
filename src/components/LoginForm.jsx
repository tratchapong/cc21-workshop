import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema for the login form
const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean().optional(),
});

export default function LoginForm() {
  const [serverError, setServerError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: { email: "", password: "", remember: false },
  });

  // Mock submit handler — replace with your real API call
  const onSubmit = async (data) => {
    setServerError(null);
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 900)); // simulate network

      if (data.email === "blocked@example.com") {
        throw new Error("This account is blocked. Contact support.");
      }

      console.log("Logged in", data);
      alert("Login successful (mock)");
    } catch (err) {
      setServerError(err?.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-start bg-gray-50 p-6 pt-30 flex-1">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6"
        noValidate
        aria-describedby={serverError ? "server-error" : undefined}
      >
        <h2 className="text-2xl font-semibold mb-2">Sign in to your account</h2>
        <p className="text-sm text-gray-500 mb-6">Enter your email and password to continue.</p>

        {serverError && (
          <div id="server-error" role="alert" className="mb-4 text-sm text-red-700 bg-red-50 p-3 rounded">
            {serverError}
          </div>
        )}

        {/* Email */}
        <label className="block mb-3">
          <span className="text-sm font-medium text-gray-700">Email</span>
          <input
            type="email"
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
              errors.email ? "border-red-300" : "border-gray-200"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </label>

        {/* Password + toggle */}
        <label className="block mb-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="text-xs text-indigo-600 hover:underline"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            aria-invalid={errors.password ? "true" : "false"}
            aria-describedby={errors.password ? "password-error" : undefined}
            className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
              errors.password ? "border-red-300" : "border-gray-200"
            }`}
            placeholder="Your strong password"
          />
          {errors.password && (
            <p id="password-error" className="mt-1 text-xs text-red-600">
              {errors.password.message}
            </p>
          )}
        </label>

        {/* Remember me */}
        <label className="flex items-center gap-2 mb-6">
          <input type="checkbox" {...register("remember")} className="h-4 w-4" />
          <span className="text-sm text-gray-600">Remember me</span>
        </label>

        <button
          type="submit"
          disabled={loading || !isDirty || !isValid}
          className={`w-full py-2 rounded-lg font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 ${
            loading || !isDirty || !isValid
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <div className="mt-4 text-center text-sm text-gray-500">
          <a href="#" className="text-indigo-600 hover:underline">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
}

/*
Usage notes:
- This is a React component using plain JavaScript (no TypeScript).
- Install dependencies:
  npm install react-hook-form zod @hookform/resolvers

- Replace the mock submit in `onSubmit` with your real API call.
- Uses Tailwind CSS for styling. Replace classes if you use a different CSS setup.
*/
