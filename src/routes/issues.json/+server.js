import { basename } from 'path'

const getPosts = async () => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('./posts/*.md')).map(
      async ([path, resolver]) => {
        const { ...resolved } = await resolver()
        const { metadata } = resolved
        let { html } = resolved.default.render()
        const excerpt = html.split('<h2')[0]
        html = html.replace(excerpt, '')
        const slug = basename(path, '.md')
        const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit'  });
        const printDate = dtf.format(new Date(metadata.date));
        return { ...metadata, printDate, slug, html, excerpt }
      }
    )
  )

  let sortedPosts = posts.sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  )
  

  sortedPosts = sortedPosts.map(post => ({
    ...post,
  }))
 
  return {
    posts: sortedPosts,
  }
}

export async function GET() {
  const posts = await getPosts()
  return new Response(JSON.stringify(posts, null, 2))
}