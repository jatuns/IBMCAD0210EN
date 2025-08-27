export function withBase(path) {
    const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
    const clean = String(path).replace(/^\/+/, '');
    return `${base}/${clean}`;
  }