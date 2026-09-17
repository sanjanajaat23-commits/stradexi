import { useEffect, useState } from "react";
import { LogOut, Mail, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { api } from "@/lib/api";


type Contact = {
  id: number;
  name: string;
  email: string;
  company: string;
  role: string;
  industry: string;
  process: string;
  pain: string;
  created_at: string;
};


export default function AdminInbox() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadContacts() {
    const token = sessionStorage.getItem(
      "stradexi_admin_token",
    );

    if (!token) {
      navigate("/admin/login", {
        replace: true,
      });

      return;
    }

    setLoading(true);

    try {
      const response = await api.get(
        "/api/admin/contacts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setContacts(response.data.contacts || []);
    } catch (error: any) {
      if (error?.response?.status === 401) {
        sessionStorage.removeItem(
          "stradexi_admin_token",
        );

        navigate("/admin/login", {
          replace: true,
        });

        return;
      }

      toast.error("Could not load enquiries.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadContacts();
  }, []);

  function logout() {
    sessionStorage.removeItem(
      "stradexi_admin_token",
    );

    navigate("/admin/login", {
      replace: true,
    });
  }

  return (
    <main className="min-h-screen bg-[#080909] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-400">
              STRADEXI
            </p>

            <h1 className="mt-1 text-xl font-semibold">
              Enquiry inbox
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadContacts}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 px-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>

            <button
              onClick={logout}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 px-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/5">
            <Mail className="h-5 w-5 text-emerald-400" />
          </div>

          <div>
            <p className="text-sm text-white/50">
              Total enquiries
            </p>

            <p className="text-2xl font-semibold">
              {contacts.length}
            </p>
          </div>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-white/10 p-10 text-center text-white/50">
            Loading enquiries...
          </div>
        ) : contacts.length === 0 ? (
          <div className="rounded-2xl border border-white/10 p-10 text-center">
            <p className="text-lg font-medium">
              No enquiries yet
            </p>

            <p className="mt-2 text-sm text-white/40">
              New contact submissions will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <article
                key={contact.id}
                className="rounded-2xl border border-white/10 bg-white/2 p-6"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div>
                    <h2 className="text-lg font-semibold">
                      {contact.name}
                    </h2>

                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-1 block text-sm text-emerald-400 hover:text-emerald-300"
                    >
                      {contact.email}
                    </a>
                  </div>

                  <div className="text-sm text-white/40">
                    {contact.created_at}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-4">
                  <Info
                    label="Company"
                    value={contact.company}
                  />

                  <Info
                    label="Role"
                    value={contact.role}
                  />

                  <Info
                    label="Industry"
                    value={contact.industry}
                  />

                  <Info
                    label="ID"
                    value={String(contact.id)}
                  />
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <Info
                    label="Current process"
                    value={contact.process}
                  />

                  <Info
                    label="Biggest time sink"
                    value={contact.pain}
                  />
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}


function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.16em] text-white/30">
        {label}
      </p>

      <p className="mt-1 text-sm leading-6 text-white/70">
        {value || "—"}
      </p>
    </div>
  );
}