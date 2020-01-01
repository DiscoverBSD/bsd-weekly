<script context="module">

  export function preload({ params, query }) {
    return this.fetch(`issues.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>

<script>
  import Issue from '../../components/Issue.svelte';
  import Meta from '../../components/Meta.svelte';
  export let posts;
  const meta = {
    name: "BSD Weekly - Issues",
    description: "Free, once–weekly e-mail round-up of BSD news and articles.",
    url: "https://bsdweekly.com/issues"
  }
</script>

<svelte:head>
  <title>{meta.name}</title>
  <Meta {...meta}/>
</svelte:head>

<div>
  {#each posts as post}
    <Issue {post}/>
  {/each}
</div>
