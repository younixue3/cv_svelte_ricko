<script>
    import logo from '$lib/asset/photo1x1.png';
</script>

<footer class="fixed bottom-0 z-50 w-full">
    <div class="flex justify-center">
        <div class="bg-gray-800/90 backdrop-blur-sm h-16 w-auto md:w-2/3 rounded-t-3xl flex px-10 gap-10 items-center text-white">
            <div class="flex-1 flex relative items-center gap-4">
                <img src={logo} alt="Logo" class="h-8 w-8 rounded-full" />
                <span class="sr-only">Email:</span>
                <span>bussiness.needs.rctka@gmail.com</span>
            </div>

            <a 
                href="mailto:bussiness.needs.rctka@gmail.com"
                class="animate-bounce flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg rounded-full px-6 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-label="Send email to bussiness.needs.rctka@gmail.com"
            >
                <i class="fa-solid fa-envelope"></i>
                Contact Me
            </a>
            
            <div class="flex gap-8">
                <a 
                    class="social-link group relative"
                    href="https://www.instagram.com/mynameis.ricko/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <span class="tooltip">Instagram</span>
                    <i class="fa-brands fa-instagram text-xl"></i>
                </a>
                <a 
                    class="social-link group relative"
                    href="https://www.linkedin.com/in/ricko-caesar-aprilla-tiaka-191095200/details/projects/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <span class="tooltip">LinkedIn</span>
                    <i class="fa-brands fa-linkedin text-xl"></i>
                </a>
                <a 
                    class="social-link group relative"
                    href="https://github.com/younixue3"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <span class="tooltip">GitHub</span>
                    <i class="fa-brands fa-github text-xl"></i>
                </a>
            </div>
        </div>
    </div>
</footer>

<style lang="postcss">
    .social-link {
        @apply transition-all duration-300 ease-in-out opacity-75 hover:opacity-100 hover:scale-110 focus:opacity-100 focus:scale-110 outline-none;
    }
    .tooltip {
        @apply invisible group-hover:visible group-focus:visible absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white text-gray-800 text-xs font-medium rounded-full shadow-lg;
    }
</style>