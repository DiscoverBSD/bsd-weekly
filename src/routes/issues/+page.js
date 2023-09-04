export const prerender = true;

export async function load({ fetch }) {
  const res = await fetch('/issues.json');
  return await res.json();
}

