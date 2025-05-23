<script lang="ts">
  import { fade, scale, fly } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';

  export let imageSrc = '';
  export let altText = '';
  
  let showModal = false;
  
  function toggleModal(e:any) {
    if (e) {
      // Prevent click event from bubbling up when clicking the image
      e.stopPropagation();
    }
    showModal = !showModal;

    if (showModal) {
      // Disable scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scroll when modal is closed
      document.body.style.overflow = 'auto';
    }
  }

  // Handle escape key press
  function handleKeydown(e:any) {
    if (e.key === 'Escape' && showModal) {
      toggleModal(e);
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
  });

  onDestroy(() => {
    window.removeEventListener('keydown', handleKeydown);
    // Ensure scroll is re-enabled when component is destroyed
    document.body.style.overflow = 'auto';
  });
</script>

<button 
  on:click={toggleModal}
  transition:scale={{ duration: 200 }}
>
    <div class="text-left h-full">
        <slot />
    </div>
</button>

{#if showModal}
  <div
    on:keydown={handleKeydown}
    transition:fade={{ duration: 300 }}
    class="fixed inset-0 bg-black/90 flex justify-center items-center z-[1000]" 
    on:click={toggleModal}
    role="dialog"
    aria-label="Image preview modal"
  >
    <div 
      class="relative max-w-[95%] max-h-[95%]"
      in:fly={{ y: 50, duration: 400, delay: 200 }}
      out:fly={{ y: -50, duration: 300 }}
    >
      <img
        on:keydown
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
        in:fly={{ x: 50, duration: 400, delay: 200 }}
        out:fly={{ x: 50, duration: 300 }}
      >
        ×
      </button>
    </div>
  </div>
{/if}
