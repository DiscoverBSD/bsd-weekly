<script>
    import '../tailwind.css';
    import Footer from '../components/Footer.svelte'
	import Nav from '../components/Nav.svelte';
</script>


<div class="layout">
    <Nav />
	<main>
		<slot />
	</main>
	<Footer />
</div>
