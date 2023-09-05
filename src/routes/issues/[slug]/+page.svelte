<script>
  import Issue from '../../../components/Issue.svelte';
  import Meta from '../../../components/Meta.svelte';

  export let data
  const post  = data
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
