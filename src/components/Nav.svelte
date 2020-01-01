<script>
	import Subscribe from '../components/Subscribe.svelte';
</script>

<nav class="py-2">
	<ul class="float-right flex flex-row text-lg">
		<li class="mr-6">
			<a class="text-red-800 hover:text-red-700" href='.'>LATEST</a>
		</li>
		<!-- for the issues link, we're using rel=prefetch so that Sapper prefetches
				 the issues data when we hover over the link or tap it on a touchscreen -->
		<li class="mr-6">
			<a class="text-red-800 hover:text-red-700" rel=prefetch href='issues'>ARCHIVES</a>
		</li>
		<!-- <li class="">
			<a class="text-red-800 hover:text-red-700" href=".">RSS</a>
		</li> -->
	</ul>
	<a href="." class="text-4xl text-red-800 hover:text-red-700 font-base leading-tight mb-4">BSD Weekly</a>
	<div class="text-center text-xl text-gray-800">
		<p class="mt-8">
			BSD Weekly is a free, once–weekly e-mail round-up of BSD news and articles.<br/>
			Currated by <a class="text-red-800 hover:text-red-700" href="https://hovancik.net">Jan Hovancik</a>
			from your content on <a class="text-red-800 hover:text-red-700" href="https://discoverbsd.com">DiscoverBSD</a>
			and <a class="text-red-800 hover:text-red-700" href="https://bsdsec.net">BSDSec</a>.
		</p>
		<div class="my-6">
			<Subscribe/>
		</div>
	</div>
</nav>
