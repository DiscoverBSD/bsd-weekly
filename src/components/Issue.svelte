<script>
	export let post;
	export let excerptOnly
</script>

<div class="py-4 leading-relaxed">
	<a rel='prefetch' href='/issues/{post.slug}' class="text-red-800 hover:text-red-700 text-3xl mb-2">{post.title}</a>
	<div class="text-gray-600 pb-2">Published {post.printDate}</div>
	<div class="text-xl markdowned pt-4">
		{#if post.excerpt}	
			{@html post.excerpt}
		{/if}
		{#if post.html && !excerptOnly}
			{@html post.html}
		{/if}
	</div>
</div>
