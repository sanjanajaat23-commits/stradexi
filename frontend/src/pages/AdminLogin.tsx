import { FormEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LockKeyhole, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { api } from "@/lib/api";


export default function AdminLogin() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const existingToken = sessionStorage.getItem(
    "stradexi_admin_token",
  );

  if (existingToken) {
    return <Navigate to="/admin/inbox" replace />;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!password.trim()) {
      toast.error("Enter the admin password.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/api/admin/login", {
        password,
      });

      sessionStorage.setItem(
        "stradexi_admin_token",
        response.data.token,
      );

      toast.success("Authenticated.");

      navigate("/admin/inbox", {
        replace: true,
      });
    } catch (error: any) {
      const message =
        error?.response?.data?.detail ||
        "Authentication failed.";

      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#080909] text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="mb-8">
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/5">
            <LockKeyhole className="h-5 w-5 text-emerald-400" />
          </div>

          <p className="mb-2 text-xs font-medium uppercase tracking-[0.24em] text-emerald-400">
            STRADEXI
          </p>

          <h1 className="text-3xl font-semibold tracking-tight">
            Admin access
          </h1>

          <p className="mt-3 text-sm leading-6 text-white/50">
            Sign in to view workflow enquiries and contact
            submissions.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/2.5 p-6"
        >
          <label
            htmlFor="password"
            className="mb-2 block text-sm text-white/70"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            className="h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition focus:border-emerald-400/50"
            placeholder="Enter admin password"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 text-sm font-semibold text-black transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Continue"}

            {!loading && (
              <ArrowRight className="h-4 w-4" />
            )}
          </button>
        </form>
      </motion.div>
    </main>
  );
}