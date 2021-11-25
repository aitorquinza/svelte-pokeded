<script>
  import Header from "../components/header.svelte";

</script>
<div class="p-8 max-w-6xl mx-auto">
  <Header />
  <slot />
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>