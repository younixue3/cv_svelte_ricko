<script>
  import logo from '$lib/asset/photo1x1.png';
</script>

<footer class="bg-gray-900 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
      <div class="flex items-center gap-3">
        <img src={logo} alt="Ricko Tiaka" class="h-10 w-10 rounded-full ring-2 ring-white/20" />
        <div>
          <p class="text-sm font-medium">Ricko Caesar Aprilla Tiaka</p>
          <p class="text-xs text-gray-400">Frontend & Full-Stack Developer</p>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <a
          href="mailto:bussiness.needs.rctka@gmail.com"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:shadow-purple-500/25"
        >
          <i class="fa-solid fa-envelope"></i>
          Contact Me
        </a>
      </div>

      <div class="flex items-center gap-6">
        <a
          href="https://www.instagram.com/mynameis.ricko/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="text-gray-400 hover:text-pink-400 transition-colors duration-300 hover:scale-110 transform"
        >
          <i class="fa-brands fa-instagram text-xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ricko-caesar-aprilla-tiaka-191095200/details/projects/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
        >
          <i class="fa-brands fa-linkedin text-xl"></i>
        </a>
        <a
          href="https://github.com/younixue3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="text-gray-400 hover:text-gray-200 transition-colors duration-300 hover:scale-110 transform"
        >
          <i class="fa-brands fa-github text-xl"></i>
        </a>
      </div>
    </div>

    <div class="mt-8 pt-8 border-t border-gray-800 text-center">
      <p class="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Ricko Caesar Aprilla Tiaka. Built with SvelteKit &amp; Tailwind CSS.
      </p>
    </div>
  </div>
</footer>
