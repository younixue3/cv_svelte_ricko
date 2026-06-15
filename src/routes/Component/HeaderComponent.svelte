<script>
  import { slide } from 'svelte/transition';

  let mobileOpen = false;

  const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
  ];

  function toggleMobile() {
    mobileOpen = !mobileOpen;
  }

  function closeMobile() {
    mobileOpen = false;
  }
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100/50 transition-all duration-300"
>
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a
        href="/"
        class="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
      >
        RT
      </a>

      <div class="hidden md:flex items-center space-x-1">
        {#each links as link}
          <a
            href={link.href}
            class="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-200 group"
          >
            {link.label}
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        {/each}
      </div>

      <button
        class="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200"
        on:click={toggleMobile}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
      >
        <div class="w-5 h-4 relative flex flex-col justify-between">
          <span
            class="block h-0.5 w-full bg-gray-600 rounded-full transition-all duration-300 origin-center"
            class:rotate-45={mobileOpen}
            class:translate-y-[7px]={mobileOpen}
          ></span>
          <span
            class="block h-0.5 w-full bg-gray-600 rounded-full transition-all duration-300"
            class:opacity-0={mobileOpen}
          ></span>
          <span
            class="block h-0.5 w-full bg-gray-600 rounded-full transition-all duration-300 origin-center"
            class:-rotate-45={mobileOpen}
            class:-translate-y-[7px]={mobileOpen}
          ></span>
        </div>
      </button>
    </div>
  </nav>

  {#if mobileOpen}
    <div
      class="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-lg shadow-lg"
      transition:slide={{ duration: 200 }}
    >
      <div class="px-4 py-3 space-y-1">
        {#each links as link}
          <a
            href={link.href}
            class="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200"
            on:click={closeMobile}
          >
            {link.label}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</header>
