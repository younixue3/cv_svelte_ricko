<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import PopUpImage from './Component/PopUpImage.svelte';

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
  import sipenggaji from '$lib/asset/sipenggaji.jpeg';
  import panglima from '$lib/asset/panglima.jpeg';
  import portal from '$lib/asset/portal.jpeg';
  import sinazwa from '$lib/asset/sinazwa.jpeg';
  import onjourney from '$lib/asset/onjourney.jpeg';
  import sppdigital from '$lib/asset/spp-digital-system.png';
  import infratech from '$lib/asset/infratech.png';
  import basuhyuk from '$lib/asset/basuhyuk-mobile.jpeg';

  let heroRef;
  let expRef;
  let skillRef;
  let eduRef;
  let projectRef;
  let certRef;

  onMount(async () => {
    if (!browser) return;

    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(heroRef,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );

    [expRef, skillRef, eduRef, projectRef, certRef].forEach((ref) => {
      if (!ref) return;
      const cards = ref.querySelectorAll('.gsap-card');
      if (!cards.length) return;
      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: {
            trigger: ref,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  });

  const accentColors = [
    'from-indigo-500 to-purple-500',
    'from-emerald-500 to-teal-500',
    'from-blue-500 to-cyan-500',
    'from-orange-500 to-amber-500',
    'from-rose-500 to-pink-500',
    'from-violet-500 to-purple-500',
    'from-sky-500 to-indigo-500',
  ];

  const experiences = [
    {
      company: 'Keiko Julia Jewelry',
      location: 'Singapore (Remote)',
      roles: [
        { title: 'Full-Stack Developer', period: 'Oct 2025 - Present', highlights: [
          'Built official website with Next.js, React, Tailwind, Firebase; raised PageSpeed 49 to 81+ via WebP, caching, Core Web Vitals.',
          'Implemented seasonal themes, dynamic SEO, cart system, Google-login RBAC, product-variant manager, Shopee-Express logistics, FCM.',
          'Enhanced Android app stability; fixed NPM/TS issues, prepared Play & App Store pipelines.',
          'Migrated Firebase to Vercel; restructured image & DB storage; added audit logs & secure de-activation.',
          'Deployed email-blast system with template editor, SPF, SMTP migration; weekly campaigns drove measurable conversion lifts.',
          'Tracked user behavior via Microsoft Clarity heatmaps; delivered monthly insight reports reducing UX friction.',
          'Collaborated with Management & Marketing on roadmap, product execution, and secure handover protocols.',
        ]},
      ],
    },
    {
      company: 'Expertri',
      location: 'Samarinda',
      roles: [
        { title: 'Software Engineer', period: 'Apr 2025 - Sep 2025', highlights: [
          'Engineered custom Odoo ERP modules that streamlined business processes for clients.',
          'Architected robust infrastructure reducing system downtime and improving response time.',
        ]},
        { title: 'Junior Software Engineer', period: 'Jan 2025 - Apr 2025', highlights: [
          'Implemented Python integration scripts automating data sync, reducing manual data entry by 75%.',
          'Optimized Odoo ERP modules accelerating reporting by 35%, enabling real-time BI.',
        ]},
      ],
    },
    {
      company: 'Panglima Propertindo',
      location: 'Yogyakarta (Remote)',
      roles: [
        { title: 'Frontend Developer', period: 'Jan 2024 - Apr 2025', highlights: [
          'Engineered responsive interfaces with Next.js and React, increasing engagement and reducing bounce rates.',
          'Implemented ShadCN UI components accelerating development cycles.',
          'Conducted 15+ on-site workflow inspections; optimizations significantly increased field productivity.',
          'Designed training programs for field officers, reducing support tickets within 3 months.',
          'Created data-driven reports guiding strategic improvements, increasing system adoption rates.',
          'Established API integration protocols with backend teams reducing bottlenecks.',
        ]},
      ],
    },
    {
      company: 'Universitas Muhammadiyah Kalimantan Timur',
      location: 'Samarinda',
      roles: [
        { title: 'Software Developer', period: 'Jun 2022 - Dec 2024', highlights: [
          'Spearheaded university applications digitizing administrative processes.',
          'Implemented TypeScript across projects decreasing bugs and improving maintainability.',
        ]},
        { title: 'Software Developer (Freelance)', period: 'Jul 2020 - Jun 2022', highlights: [
          'Full-Stack Development with Vue.js, TailwindCSS, and Django.',
          'Developed "D3 Tracer Study" application system.',
        ]},
      ],
    },
    {
      company: 'On-Journey.id',
      location: 'Bali (Remote)',
      roles: [
        { title: 'Back-end Developer', period: 'Feb 2021 - Jan 2024', highlights: [
          'Architected scalable backend systems supporting substantial user growth.',
          'Optimized database queries reducing server load and cutting API response times.',
        ]},
      ],
    },
    {
      company: 'Yayasan Tunas Cahaya Bangsa',
      location: 'Balikpapan (Hybrid)',
      roles: [
        { title: 'Web Developer', period: 'Sep 2021 - Jul 2023', highlights: [
          'Built web applications with Vue.js, Laravel, Flutter, TailwindCSS, and Django REST Framework.',
        ]},
      ],
    },
  ];

  const education = [
    { school: 'Universitas Muhammadiyah Kalimantan Timur', degree: 'S1 Teknik Informatika', period: 'Sep 2020 - Present', icon: 'fa-graduation-cap' },
    { school: 'SMK Negeri 7 Samarinda', degree: 'Computer Software Engineering', period: 'Sep 2016 - 2019', icon: 'fa-school' },
  ];

  const portfolio = [
    { title: 'SPP Digital System', subtitle: 'School Tuition Management', period: '2026', desc: 'Digital platform for managing student tuition payments with automated billing schedules, installment tracking, real-time payment reconciliation, and comprehensive financial reporting. Streamlines school financial operations for educational institutions.', image: sppdigital, link: 'https://spp-digital-system.vercel.app/', tech: ['Golang', 'Nuxt.js', 'PostgreSQL', 'Finance Skill'] },
    { title: 'Infratech', subtitle: 'Infrastructure Management', period: '2026', desc: 'Comprehensive platform for managing infrastructure projects and assets, featuring inventory tracking, maintenance scheduling, work order management, and data-driven reporting dashboards. Built to streamline operational workflows.', image: infratech, link: 'https://infratechnetwork.com/', tech: ['Laravel', 'Tailwind CSS', 'MySQL'] },
    { title: 'Basuhyuk Mobile', subtitle: 'Laundry Service App', period: '2026', desc: 'On-demand laundry service mobile application connecting customers with local laundry providers. Features real-time order tracking, scheduled pickup/delivery, integrated payment gateway, and provider management for a seamless service experience.', image: basuhyuk, link: '#', tech: ['Golang', 'GoFiber', 'React Native', 'Tailwind CSS', 'PostgreSQL'] },
    { title: 'SI-Penggaji', subtitle: 'Payroll System', period: 'Jan 2025 - Present', desc: 'Comprehensive payroll system reducing processing time and eliminating manual errors. Centralized employee management, automated attendance, leave requests, and digital payslip generation.', image: sipenggaji, link: 'https://si-penggaji.com/', tech: ['Django', 'Tailwind CSS', 'PostgreSQL'] },
    { title: 'Disperindagkop', subtitle: 'Information System', period: 'Sep 2024 - Present', desc: 'Data-driven system for North Kalimantan\'s Department of Industry consolidating SME data across 5 districts with analytics dashboards.', image: disperindagkop, link: 'https://disperindagkop.tiaka.web.id/', tech: ['Laravel', 'React.js', 'OpenLayers', 'ShadCN UI', 'TypeScript'] },
    { title: 'SI-Nazwa', subtitle: 'Bakery Management', period: 'Apr 2024 - Present', desc: 'Mobile-first bakery solution integrating inventory, production, delivery tracking, and POS with real-time sync.', image: sinazwa, link: 'https://pia-nazwa-smd.shop/', tech: ['Next.js', 'Laravel', 'React.js', 'Tailwind CSS'] },
    { title: 'Satu Data Mahulu', subtitle: 'Open Data Platform', period: 'Feb 2023 - Present', desc: 'Unified data platform consolidating information from 12 government departments with API integrations.', image: onedata, link: 'https://data.mahakamulukab.go.id/', tech: ['CKAN', 'Django', 'Python', 'PostgreSQL', 'Docker'] },
    { title: 'Check In/Out App', subtitle: 'Employee Tracking', period: 'Dec 2021 - Jun 2023', desc: 'Mobile solution eliminating paper-based employee tracking with Google Maps location verification.', image: onjourney, link: '#', tech: ['Vue Native', 'Django', 'Django REST Framework', 'Google Maps API'] },
    { title: 'e-SINTA', subtitle: 'Data Analysis Platform', period: 'Oct 2023 - Nov 2023', desc: 'Analysis platform identifying high-risk areas for poverty interventions. Improved resource allocation by 50%.', image: esinta, link: '#', tech: ['Laravel'] },
    { title: 'Panglima Propertindo', subtitle: 'Property Website', period: '2024', desc: 'Sharia-compliant property developer website with responsive design.', image: panglima, link: 'https://panglimapropertindo.id/', tech: ['Next.js', 'React.js', 'Laravel', 'Tailwind CSS'] },
    { title: 'Portal Wisata Pampang', subtitle: 'Cultural Tourism', period: '2023', desc: 'Digital platform for Desa Budaya Pampang featuring event calendars and traditional ceremonies.', image: portal, link: '#', tech: ['Laravel', 'Inertia.js', 'React.js', 'TypeScript'] },
    { title: 'On-Journey', subtitle: 'Travel Platform', period: '2021 - 2024', desc: 'Travel platform connecting travelers with agents for Indonesian destinations.', image: onjourney, link: 'https://onjourney.id', tech: ['Nuxt.js', 'Django', 'Firebase', 'Tailwind CSS'] },
    { title: 'HBICS Website', subtitle: 'School System', period: '2022 - 2023', desc: 'Student information system for academic guidance and achievements tracking with live chat.', image: hbics, link: 'https://highschool.hbics.sch.id/', tech: ['React.js', 'Vue.js', 'Django', 'TypeScript', 'Socket.io'] },
  ];

  const certifications = [
    { name: 'MongoDB for SQL Experts', issuer: 'MongoDB', date: 'Oct 2024', id: 'MDBdnkb38ow01', link: 'https://learn.mongodb.com/c/rij3JDAdTVuTzmeeKBeuqA', photo: cert7 },
    { name: 'Belajar JavaScript Async', issuer: 'CODEPOLITAN', date: 'Jan 2024', id: 'SQIYH2L', link: 'https://codepolitan.com/c/SQIYH2L', photo: cert6 },
    { name: 'Kelas Belajar Docker untuk Pemula', issuer: 'CODEPOLITAN', date: 'Jan 2024', id: 'VZKGPK7', link: 'https://codepolitan.com/c/VZKGPK7', photo: cert5 },
    { name: 'Setting Up Server dgn Alibaba Cloud', issuer: 'CODEPOLITAN', date: 'Jan 2024', id: 'RYAPJAO', link: 'https://codepolitan.com/c/RYAPJAO', photo: cert4 },
    { name: 'UI Styleguide with Figma', issuer: 'BuildWithAngga', date: 'Jan 2024', id: '6B6sP2ZKH7', link: null, photo: cert3 },
    { name: 'AWS Technical Essentials', issuer: 'Orbit Future Academy', date: 'Sep 2023', id: 'ORBITFA6524e0556f7c0', link: 'https://erp.orbitfutureacademy.com/pub/certificate/verification/ORBITFA6524e0556f7c0', photo: cert2 },
    { name: 'Architecting on AWS', issuer: 'Orbit Future Academy', date: 'Sep 2023', id: 'ORBITFA6524f221dea0', link: 'https://erp.orbitfutureacademy.com/pub/certificate/verification/ORBITFA6524f221dea09', photo: cert1 },
  ];

  const skillCategories = [
    { name: 'Frontend Development', icon: 'fa-desktop', skills: ['React.js', 'Next.js', 'Vue.js', 'Svelte', 'TailwindCSS', 'Responsive Design', 'UI/UX Implementation'] },
    { name: 'Backend Development', icon: 'fa-server', skills: ['Python', 'Django', 'Django REST Framework', 'PHP', 'Laravel', 'Database Optimization', 'Microservices'] },
    { name: 'DevOps & Workflow', icon: 'fa-cogs', skills: ['Git', 'Docker', 'API Integration', 'Agile/Scrum', 'Test Driven Development'] },
  ];
</script>

<svelte:head>
  <title>Ricko Tiaka | Frontend & Full-Stack Developer</title>
  <meta name="description" content="Portfolio of Ricko Caesar Aprilla Tiaka - Frontend & Full-Stack Developer" />
</svelte:head>

<!-- Hero -->
<section id="about" class="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white" bind:this={heroRef}>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
    <div class="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
      <div class="w-full lg:w-80 flex-shrink-0 mx-auto lg:mx-0">
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          <img src={logo} alt="Ricko Tiaka" class="relative rounded-2xl w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700" loading="eager" />
        </div>
      </div>

      <div class="flex-1 text-center lg:text-left">
        <p class="text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-3">Frontend & Full-Stack Developer</p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
          Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">Ricko Tiaka</span>
        </h1>

        <div class="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-gray-500 mb-6">
          <span class="inline-flex items-center gap-2"><i class="fas fa-envelope text-indigo-400 w-4"></i>bussiness.needs.rctka@gmail.com</span>
          <span class="inline-flex items-center gap-2"><i class="fas fa-globe text-indigo-400 w-4"></i>itsmericko.vercel.app</span>
          <span class="inline-flex items-center gap-2"><i class="fab fa-linkedin text-indigo-400 w-4"></i>linkedin.com/in/ricko-caesar-aprilla-tiaka</span>
          <span class="inline-flex items-center gap-2"><i class="fas fa-map-marker-alt text-indigo-400 w-4"></i>Samarinda, Indonesia</span>
        </div>

        <p class="text-base text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto lg:mx-0">
          Results-driven Full-Stack Developer with 5+ years of experience delivering high-impact web applications and enterprise systems. Expert in React, Vue.js, and Django with strong focus on scalable architecture and performance optimization across government, education, and private sectors.
        </p>

        <div class="flex flex-wrap justify-center lg:justify-start gap-3">
          <a href="#projects" class="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-200 hover:shadow-xl">
            View Projects <i class="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
          </a>
          <a href="#experience" class="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-full font-medium border border-gray-200 hover:border-indigo-200 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 shadow-sm">
            Experience <i class="fas fa-briefcase text-sm"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Experience -->
<section id="experience" class="py-16 lg:py-24 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <p class="text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-3">Professional Experience</p>
      <h2 class="text-4xl sm:text-5xl font-bold text-gray-900">Career Path</h2>
      <p class="text-gray-500 mt-3 max-w-xl mx-auto">5+ years of delivering impact across industries</p>
    </div>

    <div class="max-w-4xl mx-auto space-y-6" bind:this={expRef}>
      {#each experiences as group, gi}
        {@const color = accentColors[gi % accentColors.length]}
        <div class="gsap-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-1 overflow-hidden">
          <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b {color}"></div>
          <div class="p-6 lg:p-8">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br {color} flex items-center justify-center text-white text-sm shadow-md shrink-0">
                  <i class="fas fa-building"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r {color} transition-all duration-300">{group.company}</h3>
              </div>
              {#if group.location}
                <span class="text-xs text-gray-400 flex items-center gap-1.5"><i class="fas fa-map-marker-alt"></i>{group.location}</span>
              {/if}
            </div>

            <div class="space-y-4">
              {#each group.roles as role, ri}
                <div class="pl-4 border-l-2 border-gray-200">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 class="text-base font-semibold text-gray-800">{role.title}</h4>
                    <span class="shrink-0 text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{role.period}</span>
                  </div>
                  <ul class="space-y-1.5">
                    {#each role.highlights as point}
                      <li class="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                        <i class="fas fa-circle text-[4px] text-indigo-400 mt-1.5 shrink-0"></i>
                        <span>{point}</span>
                      </li>
                    {/each}
                  </ul>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Skills -->
<section id="skills" class="py-16 lg:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <p class="text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-3">Expertise</p>
      <h2 class="text-4xl sm:text-5xl font-bold text-gray-900">Technical Skills</h2>
      <p class="text-gray-500 mt-3 max-w-xl mx-auto">Core competencies across the full development stack</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" bind:this={skillRef}>
      {#each skillCategories as cat, i}
        {@const color = accentColors[i]}
        <div class="gsap-card group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br {color} opacity-[0.04] rounded-bl-[4rem] transition-all duration-500 group-hover:opacity-[0.08] group-hover:scale-150"></div>
          <div class="relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br {color} flex items-center justify-center text-white text-xl shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <i class="fas {cat.icon}"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r {color} transition-all duration-300">{cat.name}</h3>
            <div class="flex flex-wrap gap-2">
              {#each cat.skills as skill}
                <span class="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 text-gray-600
                  group-hover:bg-gradient-to-r group-hover:text-white transition-all duration-300
                  {color.startsWith('from-indigo') && 'group-hover:from-indigo-500 group-hover:to-purple-500'}
                  {color.startsWith('from-emerald') && 'group-hover:from-emerald-500 group-hover:to-teal-500'}
                  {color.startsWith('from-blue') && 'group-hover:from-blue-500 group-hover:to-cyan-500'}
                  {color.startsWith('from-orange') && 'group-hover:from-orange-500 group-hover:to-amber-500'}
                  {color.startsWith('from-rose') && 'group-hover:from-rose-500 group-hover:to-pink-500'}
                  {color.startsWith('from-violet') && 'group-hover:from-violet-500 group-hover:to-purple-500'}
                  {color.startsWith('from-sky') && 'group-hover:from-sky-500 group-hover:to-indigo-500'}">{skill}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Education -->
<section id="education" class="py-16 lg:py-24 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <p class="text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-3">Academic Background</p>
      <h2 class="text-4xl sm:text-5xl font-bold text-gray-900">Education</h2>
      <p class="text-gray-500 mt-3 max-w-xl mx-auto">Foundation that shaped my technical expertise</p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" bind:this={eduRef}>
      {#each education as edu, i}
        <div class="gsap-card group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-bl-[4rem] transition-all duration-500 group-hover:scale-150"></div>
          <div class="relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <i class="fas {edu.icon}"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">{edu.school}</h3>
            <p class="text-indigo-600 font-medium text-sm mb-4">{edu.degree}</p>
            <div class="flex items-center gap-2 text-sm text-gray-500"><i class="far fa-calendar-alt text-indigo-400"></i><span>{edu.period}</span></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Projects -->
<section id="projects" class="py-16 lg:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <p class="text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-3">Portfolio</p>
      <h2 class="text-4xl sm:text-5xl font-bold text-gray-900">Projects</h2>
      <p class="text-gray-500 mt-3 max-w-xl mx-auto">Real-world applications built from the ground up</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" bind:this={projectRef}>
      {#each portfolio as item, i}
        {@const color = accentColors[i % accentColors.length]}
        <div class="gsap-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div class="relative h-48 overflow-hidden">
            <img src={item.image} alt={item.title} class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute top-3 left-3"><span class="text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700 px-2.5 py-1 rounded-full shadow-sm">{item.period}</span></div>
            <div class="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <a href={item.link} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-white transition-colors shadow-lg"><i class="fas fa-external-link-alt"></i> Live Demo</a>
            </div>
          </div>
          <div class="relative p-6">
            <div class="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r {color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <p class="text-xs font-medium text-indigo-600 mb-1">{item.subtitle}</p>
            <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r {color} transition-all duration-300">{item.title}</h3>
            <p class="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">{item.desc}</p>
            <div class="flex flex-wrap gap-1.5 mb-4">
              {#each item.tech as tech}
                <span class="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 text-gray-600 group-hover:bg-gradient-to-r {color} group-hover:text-white transition-all duration-300">{tech}</span>
              {/each}
            </div>
            <a href={item.link} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-all duration-300 group/link">
              <span>View Project</span> <i class="fas fa-arrow-right text-xs transition-all duration-300 group-hover/link:translate-x-1"></i>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Certifications -->
<section id="certifications" class="py-16 lg:py-24 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <p class="text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-3">Credentials</p>
      <h2 class="text-4xl sm:text-5xl font-bold text-gray-900">Certifications</h2>
      <p class="text-gray-500 mt-3 max-w-xl mx-auto">Industry-recognized certifications that validate my expertise</p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" bind:this={certRef}>
      {#each certifications as cert, i}
        {@const color = accentColors[i % accentColors.length]}
        <PopUpImage imageSrc={cert.photo} altText={cert.name}>
          <div class="gsap-card group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 h-full cursor-pointer overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br {color} opacity-5 rounded-bl-[3rem] transition-all duration-500 group-hover:opacity-10 group-hover:scale-150"></div>
            <div class="relative z-10">
              <div class="flex items-start justify-between mb-4">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br {color} flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"><i class="fas fa-certificate text-sm"></i></div>
                <span class="text-xs font-medium text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full whitespace-nowrap">{cert.date}</span>
              </div>
              <h3 class="text-base font-bold text-gray-900 mb-1.5 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r {color} transition-all duration-300">{cert.name}</h3>
              <p class="text-sm text-indigo-600 font-medium mb-3">{cert.issuer}</p>
              <div class="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-50 rounded-lg px-3 py-2 mb-4"><i class="fas fa-fingerprint text-indigo-300"></i><span class="truncate">{cert.id}</span></div>
              {#if cert.link}
                <a href={cert.link} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-all duration-300 group/link" on:click|stopPropagation><i class="fas fa-shield-alt text-xs"></i><span>Verify</span><i class="fas fa-external-link-alt text-xs transition-transform group-hover/link:translate-x-0.5"></i></a>
              {:else}
                <span class="inline-flex items-center gap-1.5 text-sm text-gray-400"><i class="fas fa-shield-alt text-xs"></i><span>Credential</span></span>
              {/if}
            </div>
          </div>
        </PopUpImage>
      {/each}
    </div>
  </div>
</section>
