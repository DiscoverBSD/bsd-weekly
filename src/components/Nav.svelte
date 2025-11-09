<script>
	import Subscribe from "../components/Subscribe.svelte";
</script>

<nav class="py-2">
	<div class="relative">
		<ul class="absolute top-0 right-0 flex flex-row text-lg">
			<li class="mr-6"><a class="link font-medium" href="/">LATEST</a></li>
			<li class="mr-6"><a class="link font-medium" rel="prefetch" href="/issues">ARCHIVES</a></li>
		</ul>
		<div class="flex items-center justify-center mb-4">
			<a href="/" class="flex items-center">
				<img src="/bsd-weekly.svg" alt="BSD Weekly Logo" class="h-14 mr-3" />
				<span class="text-4xl text-heading hover:text-brand-accent-hover font-semibold leading-tight tracking-tight"
					>BSD Weekly</span
				>
			</a>
		</div>
	</div>
	<div class="text-center text-xl text-gray-800">
		<p class="mt-8">
			BSD Weekly is a free, once–weekly e-mail round-up of BSD news and
			articles.<br />
			Curated by
			<a class="link" href="https://hovancik.net"
				>Jan Hovancik</a
			>
			from your content on
			<a class="link" href="https://discoverbsd.com"
				>DiscoverBSD</a
			>
			and
			<a class="link" href="https://bsdsec.net"
				>BSDSec</a
			>.
		</p>
		<div class="my-6">
			<Subscribe />
		</div>
	</div>
</nav>
