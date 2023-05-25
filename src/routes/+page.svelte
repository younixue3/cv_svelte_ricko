<script>
    import logo from '$lib/asset/1684932722577.jpg';
</script>
<svelte:head>
    <title>Ricko Tiaka</title>
    <meta name="description" content="About Ricko Tiaka" />
</svelte:head>

<section>
    <div class="w-full flex-row gap-5 pt-24">
        <div id="aboutme" class="px-52">
            <div class="bg-white scale-75 hover:scale-100 transform rotate-12 -skew-y-6 hover:rotate-0 hover:-skew-y-0 transition-all ease-in-out rounded-2xl flex p-5 border-2 shadow-lg hover:shadow-xl shadow-slate-300 hover:shadow-slate-400 gap-10">
                <img src={logo} alt="Ricko Tiaka" class="h-96 rounded-xl w-80 bg-gray-200 object-cover w-2/3">
                <div>
                    <h1 class="text-3xl font-bold mb-10">It's me <span class="text-indigo-600">Ricko Tiaka</span></h1>
                    <div>I'm a Freelancer Designer and Programmer, I love Computer, so I decided to learn more about Computer since 10 years old. I have experience in many Creative Industry, I had worked for three years as Full-stack Developer.</div>
                    <div class="mt-5"><span class="bg-amber-400 px-1">Overwhelming</span> project is my goals, <span class="bg-amber-400 px-1">Breathtaking</span> design is my lifestyle, <span class="bg-amber-400 px-1">Supreme</span> is my middle name</div>
                </div>
            </div>
        </div>
        <div class="px-52 py-20">
            <div class="grid grid-cols-3 gap-5">
                <div id="experience" class="bg-white rounded-xl shadow-lg border-2 h-20 p-5 font-bold text-center text-2xl">Experience</div>
                <div class="col-span-2 row-span-1 bg-white rounded-xl shadow-lg border-2 grid grid-cols-1 space-y-4 p-5">
                    <div class="border-b border-black pb-5">
                        <h1 class="text-xl font-bold">Web Developer <span class="text-xs font-medium">(Part-time)</span></h1>
                        <h5 class="font-thin">Yayasan Tunas Cahaya Bangsa | Sep 2021 - Present</h5>
                        <div class="text-sm mt-5">
                            <span>Skills: </span> Vue.js, Git, PhpMyAdmin, PostgreSql, Full-Stack Dev, Django / Django Rest Framework, Dart, Vue Native, React Native, .NET Framework, Scrum Method, Golang, Ruby On Rails
                        </div>
                    </div>
                    <div class="border-b border-black pb-5">
                        <h1 class="text-xl font-bold">Back-End Developer <span class="text-xs font-medium">(Self-employed)</span></h1>
                        <h5 class="font-thin">On-Journey PT. Stargazer Teknologi Indonesia | Feb 2021 - Present</h5>
                        <div class="text-sm mt-5">
                            <span>Skills: </span> Vue.js, Git, PostgreSql, Full-Stack Dev, Django / Django Rest Framework
                        </div>
                    </div>
                    <div class="border-b border-black pb-5">
                        <h1 class="text-xl font-bold">Software Developer <span class="text-xs font-medium">(Freelannce)</span></h1>
                        <h5 class="font-thin">Universitas Muhammadiyah Kalimantan Timur | Sep 2020 - Present</h5>
                        <div class="text-sm mt-5">
                            <span>Skills: </span> Vue.js, Git, PostgreSql, Full-Stack Dev, Django / Django Rest Framework
                        </div>
                    </div>
                    <div class="border-b border-black pb-5">
                        <h1 class="text-xl font-bold">Web Developer <span class="text-xs font-medium">(Freelannce)</span></h1>
                        <h5 class="font-thin">CV. Meja Belakang | Jan 2019 - Dec 2021</h5>
                        <div class="text-sm mt-5">
                            <span>Skills: </span> Django, Laravel, JQuery, Git, PHP, PhpMyAdmin, Tailwind Css
                        </div>
                    </div>
                    <div class="border-b border-black pb-5">
                        <h1 class="text-xl font-bold">Back-End Developer <span class="text-xs font-medium">(Contract)</span></h1>
                        <h5 class="font-thin">UtamaWeb CV. Rimbun Komputindo | Nov 2020 - Jul 2021</h5>
                        <div class="text-sm mt-5">
                            <span>Skills: </span> Laravel, Vue.js, JQuery, Bulma CSS Framework, Flutter, Git, PHP, PhpMyAdmin, Flutter
                        </div>
                    </div>
                    <div class="border-b border-black pb-5">
                        <h1 class="text-xl font-bold">Full-Stack Developer <span class="text-xs font-medium">(Contract)</span></h1>
                        <h5 class="font-thin">Print Inn | Aug 2020 - Oct 2020</h5>
                        <div class="text-sm mt-5">
                            <span>Skills: </span> Laravel, JQuery, Git, PhpMyAdmin, Full-Stack Development
                        </div>
                    </div>
                    <div class="border-b border-black pb-5">
                        <h1 class="text-xl font-bold">Web Developer <span class="text-xs font-medium">(Contract)</span></h1>
                        <h5 class="font-thin">Ayam Thorr | Nov 2019 - Jul 2020</h5>
                        <div class="text-sm mt-5">
                            <span>Skills: </span> CSS, Git, PhpMyAdmin, Full-Stack Development
                        </div>
                    </div>
                </div>
                <div id="education" class="bg-white rounded-xl shadow-lg border-2 h-20 p-5 font-bold text-center text-2xl">Education</div>
                <div class="col-span-2 row-span-1 bg-white rounded-xl shadow-lg border-2 grid grid-cols-1 space-y-4 p-5">
                    <div class="border-b border-black pb-5">
                        <h1 class="text-xl font-bold">SMK Negeri 7 Samarinda</h1>
                        <h5 class="font-thin">Computer Software Engineering | Sep 2016 - 2019</h5>
                    </div>
                    <div class="border-b border-black pb-5">
                        <h1 class="text-xl font-bold">S1 Teknik Informatika</h1>
                        <h5 class="font-thin">Universitas Muhammadiyah Kalimantan Timur | Sep 2020 - Present</h5>
                    </div>
                </div>
                <div id="projects" class="bg-white rounded-xl shadow-lg border-2 h-20 p-5 font-bold text-center text-2xl">Projects</div>
                <div class="col-span-2 row-span-1 bg-white rounded-xl shadow-lg border-2 grid grid-cols-1 space-y-4 p-5">
                    <div class="border-b border-black pb-5">
                        <a href="https://my.umkt.ac.id/" target="_blank" class="text-xl font-bold hover:text-sky-500 hover:after:content-['_↗'] transition-all ease-in-out">Metaffice / MyUMKT</a>
                        <h5 class="font-thin">Associated with Universitas Muhammadiyah Kalimantan Timur</h5>
                        <div class="mt-5">
                            <div class="font-bold">Stack:</div>
                            <div class="flex gap-3 mt-2">
                                <i class="text-2xl fa-brands fa-bootstrap"></i>
                                <i class="text-2xl fa-brands fa-python"></i>
                                <img class="w-8 h-8" src="https://img.icons8.com/windows/32/django.png" alt="django"/>
                                <img class="w-8 h-8" src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql"/>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-black pb-5">
                        <a href="https://sikemas.umkt.ac.id/" target="_blank" class="text-xl font-bold hover:text-sky-500 hover:after:content-['_↗'] transition-all ease-in-out">SIKEMAS</a>
                        <h5 class="font-thin">Associated with Universitas Muhammadiyah Kalimantan Timur</h5>
                        <div class="mt-5">
                            <div class="font-bold">Stack:</div>
                            <div class="flex gap-3 mt-2">
                                <i class="text-2xl fa-brands fa-vuejs"></i>
                                <i class="text-2xl fa-brands fa-python"></i>
                                <img class="w-8 h-8" src="https://img.icons8.com/windows/32/django.png" alt="django"/>
                                <img class="w-8 h-8" src="https://img.icons8.com/material-rounded/24/tailwind_css.png" alt="tailwind_css"/>
                                <img class="w-8 h-8" src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql"/>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-black pb-5">
                        <a href="https://survey.umkt.ac.id/" target="_blank" class="text-xl font-bold hover:text-sky-500 hover:after:content-['_↗'] transition-all ease-in-out">Survey</a>
                        <h5 class="font-thin">Associated with Universitas Muhammadiyah Kalimantan Timur</h5>
                        <div class="mt-5">
                            <div class="font-bold">Stack:</div>
                            <div class="flex gap-3 mt-2">
                                <i class="text-2xl fa-brands fa-react"></i>
                                <i class="text-2xl fa-brands fa-python"></i>
                                <img class="w-8 h-8" src="https://img.icons8.com/windows/32/django.png" alt="django"/>
                                <i class="text-2xl fa-brands fa-bootstrap"></i>
                                <img class="w-8 h-8" src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql"/>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-black pb-5">
                        <a href="https://kidspreneurship.co.id/" target="_blank" class="text-xl font-bold hover:text-sky-500 hover:after:content-['_↗'] transition-all ease-in-out">Kidspreneurship.co.id</a>
                        <h5 class="font-thin">Associated with Yayasan Tunas Cahaya Bangsa</h5>
                        <div class="mt-5">
                            <div class="font-bold">Stack:</div>
                            <div class="flex gap-3 mt-2">
                                <i class="text-2xl fa-brands fa-vuejs"></i>
                                <i class="text-2xl fa-brands fa-python"></i>
                                <img class="w-8 h-8" src="https://img.icons8.com/windows/32/django.png" alt="django"/>
                                <img class="w-8 h-8" src="https://img.icons8.com/material-rounded/24/tailwind_css.png" alt="tailwind_css"/>
                                <img class="w-8 h-8" src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql"/>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-black pb-5">
                        <a href="http://simpol.samarindakota.go.id/" target="_blank" class="text-xl font-bold hover:text-sky-500 hover:after:content-['_↗'] transition-all ease-in-out">SIMPOL</a>
                        <h5 class="font-thin">Associated with DISNAKER Kota Samarinda</h5>
                        <div class="mt-5">
                            <div class="font-bold">Stack:</div>
                            <div class="flex gap-3 mt-2">
                                <i class="text-2xl fa-brands fa-laravel"></i>
                                <i class="text-2xl fa-brands fa-bootstrap"></i>
                                <i class="text-2xl fa-brands fa-square-js"></i>
                                <img class="w-8 h-8" src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql"/>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-black pb-5">
                        <a href="https://obrolantetangga.com/login" target="_blank" class="text-xl font-bold hover:text-sky-500 hover:after:content-['_↗'] transition-all ease-in-out">obrolantetangga.com</a>
                        <h5 class="font-thin">Associated with CV. Rimbun Komputindo</h5>
                        <div class="mt-5">
                            <div class="font-bold">Stack:</div>
                            <div class="flex gap-3 mt-2">
                                <i class="text-2xl fa-brands fa-laravel"></i>
                                <i class="text-2xl fa-brands fa-bootstrap"></i>
                                <i class="text-2xl fa-brands fa-square-js"></i>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-black pb-5">
                        <a href="https://mitra.onjourney.id/" target="_blank" class="text-xl font-bold hover:text-sky-500 hover:after:content-['_↗'] transition-all ease-in-out">On-Journey</a>
                        <h5 class="font-thin">Associated with PT. Stargazer Teknologi Indonesia</h5>
                        <div class="mt-5">
                            <div class="font-bold">Stack:</div>
                            <div class="flex gap-3 mt-2">
                                <i class="text-2xl fa-brands fa-python"></i>
                                <img class="w-8 h-8" src="https://img.icons8.com/windows/32/django.png" alt="django"/>
                                <img class="w-8 h-8" src="https://img.icons8.com/material-rounded/24/tailwind_css.png" alt="tailwind_css"/>
                                <img class="w-8 h-8" src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql"/>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-black pb-5">
                        <a href="https://hbics.sch.id/" target="_blank" class="text-xl font-bold hover:text-sky-500 hover:after:content-['_↗'] transition-all ease-in-out">hbics.sch.id</a>
                        <h5 class="font-thin">Associated with Yayasan Tunas Cahaya Bangsa</h5>
                        <div class="mt-5">
                            <div class="font-bold">Stack:</div>
                            <div class="flex gap-3 mt-2">
                                <i class="text-2xl fa-brands fa-wordpress"></i>
                                <i class="text-2xl fa-brands fa-elementor"></i>
                                <i class="text-2xl fa-brands fa-css3-alt"></i>
                                <i class="text-2xl fa-brands fa-square-js"></i>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-black pb-5">
                        <a href="https://github.com/younixue3/hbics_cio_vue" target="_blank" class="text-xl font-bold  hover:text-sky-500 hover:after:content-['_↗'] transition-all ease-in-out">Check In/Out Mobile App</a>
                        <h5 class="font-thin">Associated with Yayasan Tunas Cahaya Bangsa</h5>
                        <div class="mt-5">
                            <div class="font-bold">Stack:</div>
                            <div class="flex gap-3 mt-2">
                                <i class="text-2xl fa-brands fa-python"></i>
                                <img class="w-8 h-8" src="https://img.icons8.com/windows/32/django.png" alt="django"/>
                                <i class="text-2xl fa-brands fa-vuejs"></i>
                                <i class="text-2xl fa-brands fa-angular"></i>
                                <img class="w-8 h-8" src="https://img.icons8.com/ios-filled/50/ionic.png" alt="ionic"/>
                                <img class="w-8 h-8" src="https://img.icons8.com/material-rounded/24/tailwind_css.png" alt="tailwind_css"/>
                                <img class="w-8 h-8" src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>