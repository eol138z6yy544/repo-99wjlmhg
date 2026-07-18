export function getApiUrl(): string {
  const env = import.meta.env.VITE_API_URL;
  if (env && env !== '/') return env;
  if (typeof window !== 'undefined') return window.location.origin;
  return 'http://localhost:3001';
}
