<script>
	import Meta from '../components/Meta.svelte';
	import Issue from '../components/Issue.svelte';
	export let data
  	const post  = data
</script>

<svelte:head>
	<Meta/>
</svelte:head>

<Issue {post}/>