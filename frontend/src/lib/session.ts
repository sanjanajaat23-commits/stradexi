const SESSION_KEY =
  "stradexi_session";

export interface Session {
  authenticated: boolean;
  email?: string;
  name?: string;
}

export function getSession(): Session | null {
  try {
    const raw =
      localStorage.getItem(
        SESSION_KEY
      );

    if (!raw) {
      return null;
    }

    return JSON.parse(raw) as Session;
  } catch {
    return null;
  }
}

export function setSession(
  session: Session
) {
  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify(session)
  );
}

export function clearSession() {
  localStorage.removeItem(
    SESSION_KEY
  );
}

export function isAuthenticated() {
  return Boolean(
    getSession()?.authenticated
  );
}