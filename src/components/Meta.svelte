<script>
  export let name = "BSD Weekly - free BSD e-mail newsletter";
  export let description = "Free, once–weekly e-mail round-up of BSD news and articles.";
  export let url = "https://bsdweekly.com"
  const imageUrl = `https://motif.imgix.com/i?url=${encodeURIComponent(url)}&image_url=${encodeURIComponent('https://bsdweekly.com/mr-cup-fabien-barral-Mwuod2cm8g4-unsplash.jpg')}&color=deacac&logo_url=${encodeURIComponent("https://bsdweekly.com/bsdweekly.png")}&logo_alignment=top%2Ccenter&text_alignment=bottom%2Ccenter&logo_padding=70&font_family=Avenir%20Next%20Demi%2CBold&text_color=1d1d1d`
</script>

<meta name="description" content={description}>

<meta itemprop="name" content={name}>
<meta itemprop="description" content={description}>
<meta itemprop="image" content={imageUrl}>

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content={name}>
<meta name="twitter:description" content={description}>
<meta name="twitter:site" content={url}>
<meta name="twitter:image" content={imageUrl}>

<meta property="og:title" content={name}>
<meta property="og:description" content={description}>
<meta property="og:image" content={imageUrl}>
<meta property="og:type" content="article">
<meta property="og:url" content={url}>

<meta name="flattr:id" content="en32oj">
