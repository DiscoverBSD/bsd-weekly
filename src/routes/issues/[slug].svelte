<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`issues/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Issue from '../../components/Issue.svelte';
  import Meta from '../../components/Meta.svelte';

  export let post
  const meta = {
    name: `BSD Weekly - ${post.title}`,
    description: "Free, once–weekly e-mail round-up of BSD news and articles.",
    url: `https://bsdweekly.com/issues/${post.slug}`
  }
</script>

<svelte:head>
  <Meta {...meta}/>
</svelte:head>

<Issue {post}/>
