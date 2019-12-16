<script>
	import Subscribe from '../components/Subscribe.svelte';
	import Meta from '../components/Meta.svelte';
</script>

<svelte:head>
	<title>BSD Weekly</title>
	<Meta/>
</svelte:head>

<div class="text-center text-xl text-gray-800">
	<p class="pb-2">
		BSD Weekly is a free, once–weekly e-mail round-up of BSD news and articles.<br/>
		Currated by <a class="text-red-800 hover:text-red-700" href="https://hovancik.net">Jan Hovancik</a>
		from your content on <a class="text-red-800 hover:text-red-700" href="https://discoverbsd.com">DiscoverBSD</a>
		and <a class="text-red-800 hover:text-red-700" href="https://bsdsec.net">BSDSec</a>.
	</p>
	<div class="my-8">
		<Subscribe/>
	</div>
	<h1 class="w-full my-2 text-4xl font-bold leading-tight">
		Soon-<span class="italic text-red-400">ish</span> in your inbox!
	</h1>
</div>
