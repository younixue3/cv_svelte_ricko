<script lang="ts">
  import { fade, scale, fly } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';

  export let imageSrc = '';
  export let altText = '';

  let showModal = false;

  function toggleModal(e?: MouseEvent | KeyboardEvent) {
    if (e) {
      e.stopPropagation();
    }
    showModal = !showModal;

    if (!browser) return;

    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && showModal) {
      toggleModal();
    }
  }

  onMount(() => {
    if (browser) {
      window.addEventListener('keydown', handleKeydown);
    }
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'auto';
    }
  });
</script>

<button
  on:click={toggleModal}
  transition:scale={{ duration: 200 }}
  class="text-left w-full h-full"
  type="button"
>
  <slot />
</button>

{#if showModal}
  <div
    transition:fade={{ duration: 300 }}
    class="fixed inset-0 bg-black/90 flex justify-center items-center z-[1000]"
    on:click={toggleModal}
    role="dialog"
    aria-modal="true"
    aria-label="Image preview modal"
  >
    <div
      class="relative max-w-[95%] max-h-[95%]"
      in:fly={{ y: 50, duration: 400, delay: 200 }}
      out:fly={{ y: -50, duration: 300 }}
    >
      <img
        src={imageSrc}
        alt={altText}
        class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
        on:click|stopPropagation
        in:scale={{ duration: 400, delay: 200, start: 0.8 }}
        out:scale={{ duration: 300, start: 1 }}
      />
      <button
        class="absolute -top-12 -right-12 bg-transparent border-0 text-white text-4xl cursor-pointer hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:text-gray-300"
        on:click={toggleModal}
        aria-label="Close preview"
        type="button"
        in:fly={{ x: 50, duration: 400, delay: 200 }}
        out:fly={{ x: 50, duration: 300 }}
      >
        &times;
      </button>
    </div>
  </div>
{/if}
