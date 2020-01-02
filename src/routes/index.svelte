<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch('issues/latest.json')
		const post = await res.json()
		return { post }
  }
</script>

<script>
	import Meta from '../components/Meta.svelte';
	import Issue from '../components/Issue.svelte';
	export let post
</script>

<svelte:head>
	<Meta/>
</svelte:head>

<Issue {post}/>
