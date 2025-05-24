<script>
    import logo from '$lib/asset/rmbg.png';
    import cert1 from '$lib/asset/cert1.png';
    import cert2 from '$lib/asset/cert2.png';
    import cert3 from '$lib/asset/cert3.png';
    import cert4 from '$lib/asset/cert4.png';
    import cert5 from '$lib/asset/cert5.png';
    import cert6 from '$lib/asset/cert6.png';
    import cert7 from '$lib/asset/cert7.png';

    import disperindagkop from '$lib/asset/disperindagkop.jpeg';
    import esinta from '$lib/asset/esinta.jpeg';
    import hbics from '$lib/asset/hbics.jpg';
    import onedata from '$lib/asset/onedata.jpeg';
    import panglima from '$lib/asset/panglima.jpeg';
    import portal from '$lib/asset/portal.jpeg';
    import sinazwa from '$lib/asset/sinazwa.jpeg';
    import onjourney from '$lib/asset/onjourney.jpeg';

    import { fade, fly, slide, scale } from 'svelte/transition';
    import { spring } from 'svelte/motion';
    import { onMount } from 'svelte';
  import PopUpImage from './Component/PopUpImage.svelte';

    let mounted = false;
    onMount(() => {
        mounted = true;
    });

    // Spring animation for hover effects
    const scaleSpring = spring(1, {
        stiffness: 0.1,
        damping: 0.2
    });

    const experiences = [
        {
            title: "Software Engineer",
            company: "Expertri",
            period: "Apr 2025 - Present",
            skills: ["Vue.js", "React", "Node.js", "TypeScript"]
        },
        {
            title: "Junior Software Engineer",
            company: "Expertri", 
            period: "Jan 2025 - Apr 2025",
            skills: ["JavaScript", "React", "Node.js"]
        },
        {
            title: "Frontend Developer",
            company: "Panglima Propertindo",
            period: "Jan 2024 - Apr 2025",
            skills: ["Vue.js", "React", "TypeScript", "TailwindCSS"]
        },
        {
            title: "Software Developer",
            company: "Universitas Muhammadiyah Kalimantan Timur",
            period: "Jun 2022 - Dec 2024",
            skills: ["Python", "Django", "PostgreSQL", "Vue.js"]
        },
        {
            title: "Full-stack Developer",
            company: "Artron Indonesia",
            period: "Jun 2023 - Jan 2024",
            skills: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
            title: "Back-end Developer",
            company: "On-Journey",
            period: "Feb 2021 - Jan 2024",
            skills: ["Go", "PostgreSQL", "Redis", "Docker"]
        },
        {
            title: "Web Developer",
            company: "Yayasan Tunas Cahaya Bangsa",
            period: "Sep 2021 - Aug 2022",
            skills: ["Vue.js", "Django", "PostgreSQL", "Git"]
        },
        {
            title: "Web Developer",
            company: "CV. Meja Belakang",
            period: "Jan 2019 - Dec 2021",
            skills: ["PHP", "MySQL", "JavaScript", "Bootstrap"]
        },
        {
            title: "Back-end Developer",
            company: "UtamaWeb",
            period: "Nov 2020 - Jul 2021",
            skills: ["PHP", "Laravel", "MySQL", "Redis"]
        }
    ];

    const education = [
        {
            school: "Universitas Muhammadiyah Kalimantan Timur",
            degree: "S1 Teknik Informatika",
            period: "Sep 2020 - Present"
        },
        {
            school: "SMK Negeri 7 Samarinda",
            degree: "Computer Software Engineering",
            period: "Sep 2016 - 2019"
        }
    ];

    const projects = [
        {
            name: "XYStudio.id",
            company: "XYStudio", 
            url: "https://xystudio.id/",
            description: "Modern and responsive company profile website showcasing creative agency services and portfolio",
            stack: [
                { name: "Astro.js" },
                { name: "Tailwind" },
                { name: "Golang" }
            ],
            features: [
                "Dynamic Portfolio Gallery",
                "Service Showcase", 
                "Blog Integration",
                "Contact Management"
            ],
            status: "Production",
            year: "2023-Present"
        },
        {
            name: "Si-Penggaji",
            company: "Internal Project",
            url: "https://si-penggaji.com/",
            description: "Comprehensive payroll management system for small to medium businesses",
            stack: [
                { name: "Django" },
                { name: "Tailwind" }
            ],
            features: [
                "Salary Calculation",
                "Employee Management",
                "Attendance Tracking",
                "Payslip Generation"
            ],
            status: "Production",
            year: "2023-Present"
        }
    ];

    const portfolio = [
        {
            title: "Satu Data Mahulu",
            description: "Public data management platform for Mahakam Ulu Regency, built with CKAN for centralized data integration across various sectors.",
            image: onedata,
            link: "https://data.mahakamulukab.go.id/",
            technologies: ["CKAN", "Django", "Python", "PostgreSQL", "Docker"]
        },
        {
            title: "SI-NAZWA",
            description: "A comprehensive mobile web application for bakery businesses, providing integrated solutions from inventory to sales management. Features include inventory tracking, production planning, outlet management, POS system, and analytics dashboard.",
            image: sinazwa,
            link: "https://pia-nazwa-smd.shop/",
            technologies: ["Laravel", "React.js", "Next.js", "Tailwind CSS"]
        },
        {
            title: "Panglima Propertindo",
            description: "Panglima Propertindo is the official website of a Sharia-compliant property developer based in Samarinda, East Kalimantan, committed to providing halal housing and fostering an Islamic living environment. The site showcases the company’s vision, mission, core values, featured property projects, and career opportunities. I contributed as a Frontend Developer, playing a key role in designing and implementing a responsive and user-friendly interface that enhances the user experience and effectively communicates the company’s offerings and values to its audience.",
            image: panglima,
            link: "https://panglimapropertindo.id/",
            technologies: ["Laravel", "React.js", "Next.js", "Tailwind CSS"]
        },
        {
            title: "Disperindagkop Portal",
            description: "Information system for North Kalimantan's Department of Industry, Trade, Cooperatives and SMEs. Integrates with 'One Data UMKM' initiative for consolidated SME data management and analysis.",
            image: disperindagkop,
            link: "https://disperindagkop.tiaka.web.id/",
            technologies: ["Laravel", "React.js", "OpenLayers", "TypeScript", "Tailwind CSS"]
        },
        {
            title: "Portal Wisata Desa Budaya Pampang",
            description: "Digital platform showcasing cultural heritage of Desa Budaya Pampang, featuring event calendars, traditional ceremonies, and local activities information.",
            image: portal,
            link: "#",
            technologies: ["Laravel", "Inertia.js", "React.js", "TypeScript"]
        },
        {
            title: "On-Journey",
            description: "Travel platform connecting travelers with agents to explore Indonesian destinations. Features tour packages, travel partner integration, and booking management.",
            image: onjourney,
            link: "https://onjourney.id",
            technologies: ["Nuxt.js", "Django", "Firebase", "Tailwind CSS"]
        },
        {
            title: "Harapan Bangsa Integrated School Website",
            description: "Student information system for UMKT supporting academic guidance, scholarship applications, and student achievements tracking with live chat features.",
            image: hbics,
            link: "https://highschool.hbics.sch.id/",
            technologies: ["React.js", "Vue.js", "Django", "TypeScript", "Socket.io"]
        }
    ];

    const certifications = [
        {
            name: "MongoDB for SQL Experts",
            issuer: "MongoDB",
            date: "Oct 2024",
            credentialId: "MDBdnkb38ow01",
            link: "https://learn.mongodb.com/c/rij3JDAdTVuTzmeeKBeuqA",
            photo: cert7
        },
        {
            name: "Belajar JavaScript Async",
            issuer: "CODEPOLITAN",
            date: "Jan 2024",
            credentialId: "SQIYH2L",
            link: "https://codepolitan.com/c/SQIYH2L",
            photo: cert6
        },
        {
            name: "Kelas Belajar Docker untuk Pemula",
            issuer: "CODEPOLITAN",
            date: "Jan 2024",
            credentialId: "VZKGPK7",
            link: "https://codepolitan.com/c/VZKGPK7",
            photo: cert5
        },
        {
            name: "Setting Up Server dengan Alibaba Cloud ECS",
            issuer: "CODEPOLITAN",
            date: "Jan 2024",
            credentialId: "RYAPJAO",
            link: "https://codepolitan.com/c/RYAPJAO",
            photo: cert4
        },
        {
            name: "UI Styleguide with Figma",
            issuer: "BuildWithAngga",
            date: "Jan 2024",
            credentialId: "6B6sP2ZKH7",
            link: null,
            photo: cert3
        },
        {
            name: "AWS Technical Essentials",
            issuer: "Orbit Future Academy",
            date: "Sep 2023",
            credentialId: "ORBITFA6524e0556f7c0",
            link: "https://erp.orbitfutureacademy.com/pub/certificate/verification/ORBITFA6524e0556f7c0",
            photo: cert2
        },
        {
            name: "Architecting on AWS",
            issuer: "Orbit Future Academy",
            date: "Sep 2023",
            credentialId: "ORBITFA6524f221dea0",
            link: "https://erp.orbitfutureacademy.com/pub/certificate/verification/ORBITFA6524f221dea09",
            photo: cert1
        }
    ];
</script>

<svelte:head>
    <title>Ricko Tiaka | Full Stack Developer</title>
    <meta name="description" content="Portfolio of Ricko Tiaka - Full Stack Developer with expertise in Vue.js, Django, and more" />
</svelte:head>

<main class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="overflow-hidden mx-auto">
        {#if mounted}
        <div class="mx-auto" in:fade|local={{duration: 1000, delay: 200}}>
            <div class="bg-gradient-to-b from-gray-100 to-gray-200 transform transition-all duration-500 backdrop-blur-lg">
                <div class="relative flex flex-col lg:flex-row min-h-[700px] px-4 lg:px-0">
                    <div class="w-full lg:w-1/3 flex relative lg:ml-72 mt-8 lg:mt-0">
                        <div class="group z-0 hover:z-10 w-48 mx-auto lg:w-full">
                            <img 
                                src={logo} 
                                alt="Ricko Tiaka" 
                                class="w-full h-full object-cover transform md:group-hover:scale-150 transition-transform duration-700 brightness-110"
                                loading="eager"
                                decoding="async"
                            >
                            
                            <div class="hidden md:block absolute inset-0 backdrop-blur-sm group-hover:backdrop-blur-0 transition-all ease-in-out"></div>
                        </div>
                    </div>
                    
                    <div class="relative lg:absolute transform hover:scale-110 z-0 hover:z-10 flex px-4 lg:left-1/2 lg:top-1/3 transition-all ease-in-out duration-500 w-full lg:w-auto">
                        <div class="bg-white/95 backdrop-blur-lg p-6 lg:p-12 w-full lg:w-[32rem] rounded-3xl shadow-2xl hover:shadow-indigo-100/50 transform hover:scale-[1.02] transition-all duration-700" 
                             in:fly|local={{x: 50, duration: 1500, delay: 700}}>
                            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 lg:mb-8 tracking-tighter">
                                Hi, I'm <span class="group text-indigo-600 hover:text-indigo-700 transition-colors duration-500 relative inline-block">
                                    Ricko Tiaka
                                    <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
                                </span>
                            </h1>
                            
                            <p class="text-sm text-gray-700 mb-10 leading-relaxed font-light tracking-wide" in:slide|local={{duration: 1000, delay: 900}}>
                                A seasoned Frontend Developer with 4 years of experience specializing in crafting exceptional web experiences. My expertise spans across startups, travel industry, and enterprise solutions for both private and government sectors. I transform complex requirements into intuitive, user-friendly interfaces that drive engagement and operational efficiency.
                            </p>
                            
                            <div class="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-5" in:scale|local={{duration: 700, delay: 1100}} role="list" aria-label="Technical skills">
                                <div class="group relative overflow-hidden bg-green-200 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl transform hover:scale-105 sm:hover:scale-110 transition-all duration-500 hover:shadow-lg hover:shadow-green-100/50 cursor-pointer w-full sm:w-auto"
                                    role="listitem">
                                    <div class="absolute inset-0 bg-green-300 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100 ease-out duration-500"></div>
                                    <span class="relative z-10 text-green-800 text-xs sm:text-sm font-medium group-hover:font-semibold flex items-center justify-center sm:justify-start">
                                        <i class="fab fa-python mr-2 sm:mr-2.5 transition-transform group-hover:rotate-12 duration-500" aria-hidden="true"></i>
                                        Django
                                    </span>
                                </div>

                                <div class="group relative overflow-hidden bg-blue-200 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl transform hover:scale-105 sm:hover:scale-110 transition-all duration-500 hover:shadow-lg hover:shadow-blue-100/50 cursor-pointer w-full sm:w-auto"
                                    role="listitem">
                                    <div class="absolute inset-0 bg-blue-300 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100 ease-out duration-500"></div>
                                    <span class="relative z-10 text-blue-800 text-xs sm:text-sm font-medium group-hover:font-semibold flex items-center justify-center sm:justify-start">
                                        <i class="fab fa-react mr-2 sm:mr-2.5 transition-transform group-hover:rotate-12 duration-500" aria-hidden="true"></i>
                                        React
                                    </span>
                                </div>

                                <div class="group relative overflow-hidden bg-red-200 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl transform hover:scale-105 sm:hover:scale-110 transition-all duration-500 hover:shadow-lg hover:shadow-red-100/50 cursor-pointer w-full sm:w-auto"
                                    role="listitem">
                                    <div class="absolute inset-0 bg-red-300 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100 ease-out duration-500"></div>
                                    <span class="relative z-10 text-red-800 text-xs sm:text-sm font-medium group-hover:font-semibold flex items-center justify-center sm:justify-start">
                                        <i class="fab fa-laravel mr-2 sm:mr-2.5 transition-transform group-hover:rotate-12 duration-500" aria-hidden="true"></i>
                                        Laravel
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/if}
    </section>

    <!-- Experience & Education Section -->
    <section class="container mx-auto px-4 py-16 bg-gray-50">
        {#if mounted}
        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8" in:fade|local={{duration: 1000, delay: 300}}>
            <!-- Experience -->
            <div class="md:col-span-2 space-y-6">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 relative group" in:slide|local={{duration: 800}}>
                    Experience
                    <span class="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-[length:200%_100%] animate-gradient transform origin-left transition-transform duration-300 group-hover:scale-x-150"></span>
                </h2>
                {#each experiences as exp, i}
                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group relative overflow-hidden"
                         in:fly|local={{y: 50, duration: 1000, delay: 400 * i}}>
                        <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 translate-x-[-100%] group-hover:translate-x-[100%] blur-lg transition-transform duration-1000"></div>
                        <div class="relative z-10">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-300">{exp.title}</h3>
                                    <p class="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300">{exp.company}</p>
                                </div>
                                <span class="text-gray-500 text-sm font-medium bg-gray-50 px-3 py-1 rounded-full">{exp.period}</span>
                            </div>
                            <div class="mt-4">
                                <h4 class="font-medium text-gray-700 mb-2 flex items-center">
                                    <i class="fas fa-code-branch mr-2 text-indigo-500"></i>
                                    Key Skills
                                </h4>
                                <div class="flex flex-wrap gap-2">
                                    {#each exp.skills as skill, j}
                                        <span class="bg-gray-100 px-4 py-1.5 rounded-full text-sm text-gray-700 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-700 transition-all duration-300 transform hover:scale-105 cursor-default"
                                              in:scale|local={{duration: 400, delay: 200 * j}}>
                                            {skill}
                                        </span>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>

            <!-- Education -->
            <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-8 relative group" in:slide|local={{duration: 800}}>
                    Education
                    <span class="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-[length:200%_100%] animate-gradient transform origin-left transition-transform duration-300 group-hover:scale-x-150"></span>
                </h2>
                <div class="space-y-6">
                    {#each education as edu, i}
                        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group relative overflow-hidden"
                             in:fly|local={{y: 50, duration: 1000, delay: 400 * i}}>
                            <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 translate-x-[-100%] blur-lg group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            <div class="relative z-10">
                                <h3 class="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-300">{edu.school}</h3>
                                <p class="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 font-medium mt-1">{edu.degree}</p>
                                <p class="text-gray-500 text-sm mt-2 bg-gray-50 inline-block px-3 py-1 rounded-full">{edu.period}</p>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        {/if}

        <style>
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
            }
            .animate-gradient {
                animation: gradient 3s linear infinite;
            }
        </style>
    </section>

    <!-- Portfolio Section -->
    <section class="container mx-auto px-4 py-16 bg-gray-50">
        {#if mounted}
        <div class="max-w-6xl mx-auto" in:fade|local={{duration: 1000}}>
            <h2 class="text-3xl font-bold text-gray-900 mb-12 relative group" in:slide|local={{duration: 800}}>
                Portfolio
                <span class="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-[length:200%_100%] animate-gradient transform origin-left transition-transform duration-300 group-hover:scale-x-150"></span>
            </h2>
            <div class="grid md:grid-cols-2 gap-8">
                {#each portfolio as item, i}
                    <div class="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl border border-gray-100 relative"
                         in:fly|local={{y: 50, duration: 1000, delay: 300 * i}}>
                        <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 translate-x-[-100%] group-hover:translate-x-[100%] blur-lg transition-transform duration-1000"></div>
                        <div class="relative">
                            <div class="overflow-hidden h-48 bg-gray-100">
                                <img src={item.image || 'https://via.placeholder.com/600x400?text=Project+Preview'} 
                                     alt={item.title} 
                                     class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                     loading="lazy"
                                     decoding="async">
                            </div>
                            <div class="p-8 relative">
                                <h3 class="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">{item.title}</h3>
                                <p class="text-gray-600 mt-3 leading-relaxed line-clamp-3">{item.description}</p>
                                <div class="mt-6 space-y-4">
                                    <div class="flex flex-wrap gap-2">
                                        {#each item.technologies || [] as tech}
                                            <span class="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300 cursor-default">{tech}</span>
                                        {/each}
                                    </div>
                                    <div class="flex justify-end">
                                        <a href={item.link} 
                                           target="_blank" 
                                           rel="noopener noreferrer" 
                                           class="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-all duration-300 group-hover:gap-3 hover:underline">
                                            <span>View Project</span>
                                            <i class="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        {/if}
    </section>

    <!-- Certifications Section -->
    <section class="container mx-auto px-4 py-16 bg-gray-50">
        {#if mounted}
        <div class="max-w-6xl mx-auto" in:fade|local={{duration: 1000}}>
            <h2 class="text-3xl font-bold text-gray-900 mb-12 relative group" in:slide|local={{duration: 800}}>
                Certifications
                <span class="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-[length:200%_100%] animate-gradient transform origin-left transition-transform duration-300 group-hover:scale-x-150"></span>
            </h2>
            <div class="grid md:grid-cols-2 gap-8">
                {#each certifications as cert, i}
                <PopUpImage imageSrc={cert.photo} altText={cert.name}>
                    <div class="bg-white rounded-xl h-full shadow-md hover:shadow-xl transition-all duration-500 p-6 transform hover:-translate-y-2 border border-gray-100 group relative overflow-hidden"
                         in:fly|local={{y: 50, duration: 1000, delay: 300 * i}}>
                        <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 translate-x-[-100%] group-hover:translate-x-[100%] blur-lg transition-transform duration-1000"></div>
                        <div class="relative z-10">
                            <h3 class="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-300">{cert.name}</h3>
                            <p class="text-indigo-600 mt-2 font-medium hover:text-indigo-800 transition-colors duration-300">{cert.issuer}</p>
                            <div class="mt-3 space-y-1.5">
                                <p class="text-gray-500 text-sm bg-gray-50 inline-block px-3 py-1 rounded-full">
                                    <i class="far fa-calendar-alt mr-2"></i>
                                    Issued: {cert.date}
                                </p>
                                <p class="text-gray-500 text-sm bg-gray-50 inline-block px-3 py-1 rounded-full">
                                    <i class="fas fa-fingerprint mr-2"></i>
                                    ID: {cert.credentialId}
                                </p>
                            </div>
                            {#if cert.link}
                                <a href={cert.link} 
                                   target="_blank" 
                                   rel="noopener noreferrer" 
                                   class="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-800 font-medium transition-all duration-300 group">
                                    <span>Verify Certificate</span>
                                    <i class="fas fa-external-link-alt ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                                </a>
                            {/if}
                        </div>
                    </div>
                </PopUpImage>
                {/each}
            </div>
        </div>
        {/if}

        <style>
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
            }
            .animate-gradient {
                animation: gradient 3s linear infinite;
            }
        </style>
    </section>
</main>
