<script>
  import '../app.css';
  import HeaderComponent from "./Component/HeaderComponent.svelte";
  import FooterComponent from "./Component/FooterComponent.svelte";
</script>

<div class="flex flex-col min-h-screen">
  <HeaderComponent />
  <main class="flex-1 pt-16">
    <slot />
  </main>
  <FooterComponent />
</div>
