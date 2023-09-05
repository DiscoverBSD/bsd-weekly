<script>
  import Issue from '../../components/Issue.svelte';
  import Meta from '../../components/Meta.svelte';
  export let data
  let { posts } = data
  const meta = {
    name: "BSD Weekly - Issues",
    description: "Free, once–weekly e-mail round-up of BSD news and articles.",
    url: "https://bsdweekly.com/issues"
  }
</script>

<svelte:head>
  <Meta {...meta}/>
</svelte:head>

<div>
  {#each posts as post}
    <Issue post="{post}" excerptOnly={true}/>
  {/each}
</div>