export const prerender = true;

export async function load({ params, fetch }) {
  const res = await fetch('/issues.json');
  let data =  await res.json()
  return data.posts[0]
}