document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-up-enter-active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-up-enter');
        observer.observe(el);
    });

    // Sticky Navbar Blur Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('backdrop-blur-md', 'bg-white/80', 'border-b', 'border-gray-200');
            navbar.classList.remove('bg-white');
        } else {
            navbar.classList.remove('backdrop-blur-md', 'bg-white/80', 'border-b', 'border-gray-200');
            navbar.classList.add('bg-white');
        }
    });

    // --- Data and Rendering for Publications ---
    const publications = [
        {
            title: "Approximate Modular Multipliers for R-LWE Cryptosystems on FPGAs and ASICs",
            authors: "A²DSL Researchers",
            venue: "IEEE Xplore",
            year: "2025",
            type: "Journal",
            featured: true,
            pdfUrl: "",
            ieeeUrl: "https://ieeexplore.ieee.org/document/10910421",
            doiUrl: "",
            codeUrl: ""
        },
        {
            title: "QIEDP: A Quantum-Inspired Two-Bit Error Correction Protocol for Low-Power Serial Communication in IoT Systems",
            authors: "A²DSL Researchers",
            venue: "IEEE HiPC",
            year: "2025",
            type: "Conference",
            featured: false,
            pdfUrl: "",
            ieeeUrl: "#publications",
            doiUrl: "",
            codeUrl: ""
        },
        {
            title: "Neuromorphic Adaptive Precision RISC-V Processor with Real-Time Precision Scaling and Neuronal State Management",
            authors: "A²DSL Researchers",
            venue: "IEEE RISCV-HPC",
            year: "2025",
            type: "Conference",
            featured: false,
            pdfUrl: "",
            ieeeUrl: "#publications",
            doiUrl: "",
            codeUrl: ""
        },
        {
            title: "A Two-Bit Error Correction Protocol for Low-Power Serial Communication in IoT Systems",
            authors: "A²DSL Researchers",
            venue: "IEEE VLSID",
            year: "2025",
            type: "Conference",
            featured: false,
            pdfUrl: "",
            ieeeUrl: "#publications",
            doiUrl: "",
            codeUrl: ""
        },
        {
            title: "Bayesian Memory Dependence Prediction and Confidence-Guided Speculative Load Scheduling in Out-of-Order Processors",
            authors: "A²DSL Researchers",
            venue: "Status: Prior-Art / Patentability Search Report under processing",
            year: "2026",
            type: "Patent",
            featured: false,
            pdfUrl: "",
            ieeeUrl: "",
            doiUrl: "",
            codeUrl: ""
        },
        {
            title: "Quantum-Inspired Error Detection Protocol (QIEDP): A Novel Two-Bit Error Correction Method for Low-Power Serial Communication in IoT Systems",
            authors: "A²DSL Researchers",
            venue: "Status: Applied, published, response filed",
            year: "2025",
            type: "Patent",
            featured: false,
            pdfUrl: "",
            ieeeUrl: "",
            doiUrl: "",
            codeUrl: ""
        },
        {
            title: "Hardware-Based Execution Time Signatures (ETS) for Real-Time Detection of Timing Attacks in Embedded RISC-V Systems",
            authors: "A²DSL Researchers",
            venue: "Status: Patent applied",
            year: "2026",
            type: "Patent",
            featured: false,
            pdfUrl: "",
            ieeeUrl: "",
            doiUrl: "",
            codeUrl: ""
        },
        {
            title: "Neuromorphic Adaptive Precision RISC-V Processor with Neuronal State Management",
            authors: "A²DSL Researchers",
            venue: "Status: Invention disclosure submitted; applied for patent",
            year: "2026",
            type: "Patent",
            featured: false,
            pdfUrl: "",
            ieeeUrl: "",
            doiUrl: "",
            codeUrl: ""
        },
        {
            title: "Bio-Inspired Adaptive Dynamic Precision Scaling System for IEEE 754 Floating-Point Units",
            authors: "A²DSL Researchers",
            venue: "Status: Applied and published",
            year: "2025",
            type: "Patent",
            featured: false,
            pdfUrl: "",
            ieeeUrl: "",
            doiUrl: "",
            codeUrl: ""
        }
    ];

    const renderPublications = () => {
        const featuredContainer = document.getElementById('featured-publication');
        const listContainer = document.getElementById('publications-list');
        if (!featuredContainer || !listContainer) return;

        let listHtml = '';

        publications.forEach(pub => {
            // Build buttons only if URLs exist
            let buttonsHtml = '';
            if (pub.pdfUrl) buttonsHtml += `<a href="${pub.pdfUrl}" class="inline-flex items-center px-4 py-2 border border-black text-sm font-medium hover:bg-black hover:text-white transition-colors" ${pub.pdfUrl.startsWith('#') || pub.pdfUrl === '/' ? 'title="Placeholder Link"' : 'target="_blank"'}><i class="fas fa-file-pdf mr-2"></i> PDF</a>`;
            if (pub.ieeeUrl) buttonsHtml += `<a href="${pub.ieeeUrl}" class="inline-flex items-center px-4 py-2 border border-border text-sm font-medium hover:border-black transition-colors" ${pub.ieeeUrl.startsWith('#') || pub.ieeeUrl === '/' ? 'title="Placeholder Link"' : 'target="_blank"'}><i class="fas fa-external-link-alt mr-2"></i> IEEE Xplore</a>`;
            if (pub.doiUrl) buttonsHtml += `<a href="${pub.doiUrl}" class="inline-flex items-center px-4 py-2 border border-border text-sm font-medium hover:border-black transition-colors" ${pub.doiUrl.startsWith('#') || pub.doiUrl === '/' ? 'title="Placeholder Link"' : 'target="_blank"'}><i class="fas fa-link mr-2"></i> DOI</a>`;
            if (pub.codeUrl) buttonsHtml += `<a href="${pub.codeUrl}" class="inline-flex items-center px-4 py-2 border border-border text-sm font-medium hover:border-black transition-colors" ${pub.codeUrl.startsWith('#') || pub.codeUrl === '/' ? 'title="Placeholder Link"' : 'target="_blank"'}><i class="fab fa-github mr-2"></i> Code</a>`;

            const buttonsWrapper = buttonsHtml ? `<div class="flex flex-wrap gap-4 mt-4">${buttonsHtml}</div>` : '';

            if (pub.featured) {
                featuredContainer.innerHTML = `
          <div class="premium-card bg-white p-8 md:p-12 mb-12 flex flex-col md:flex-row gap-8 items-start animate-on-scroll">
              <div class="md:w-1/4">
                  <span class="font-serif text-4xl font-bold text-primary block mb-2">${pub.year}</span>
                  <span class="text-xs uppercase tracking-widest font-semibold text-muted">Featured</span>
              </div>
              <div class="md:w-3/4">
                  <h3 class="font-serif text-2xl md:text-3xl font-bold leading-snug mb-4 hover-underline-anim cursor-pointer">${pub.title}</h3>
                  <p class="text-primary font-medium mb-2">${pub.authors}</p>
                  <p class="text-muted text-sm italic mb-6">${pub.venue}</p>
                  ${buttonsWrapper}
              </div>
          </div>
        `;
            } else {
                listHtml += `
          <div class="premium-card bg-white p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start animate-on-scroll">
              <div class="md:w-1/6">
                  <span class="font-serif text-2xl font-bold text-primary block">${pub.year}</span>
                  <span class="text-xs text-muted uppercase tracking-wider">${pub.type}</span>
              </div>
              <div class="md:w-5/6">
                  <h4 class="font-serif text-xl font-semibold mb-2 hover-underline-anim cursor-pointer">${pub.title}</h4>
                  <p class="text-sm text-primary mb-1">${pub.authors}</p>
                  <p class="text-sm text-muted italic">${pub.venue}</p>
                  ${buttonsWrapper}
              </div>
          </div>
        `;
            }
        });
        listContainer.innerHTML = listHtml;
    };

    // Need a slight delay for elements dynamically created to animate correctly
    const reinitObserver = () => {
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
        elementsToAnimate.forEach(el => {
            // Re-add fade-up-enter if not already applied
            if (!el.classList.contains('fade-up-enter') && !el.classList.contains('fade-up-enter-active')) {
                el.classList.add('fade-up-enter');
                observer.observe(el);
            }
        });
    };

    renderPublications();

    // --- Data and Rendering for Team Members ---
    const teamMembers = [
        { name: "Deepika Gautam", role: "PostDoc Researcher", research: "SoC Design, ML Architecture", photo: "images/deepika.jpg", linkedin: "", email: "", orderCategory: 1 },
        { name: "Sahil Maurya", role: "Research Scholar (PhD)", research: "Hardware Security, RISC-V Processors", photo: "images/sahil.jpg", linkedin: "https://www.linkedin.com/in/sahilmaurya007/", email: "", orderCategory: 1 },
        { name: "Rakesh Kumar Singh", role: "PhD Candidate", research: "Post-Quantum Cryptography", photo: "images/rakesh.jpg", linkedin: "https://www.linkedin.com/in/rakesh-kumar-965109321/", email: "", orderCategory: 1 },
        { name: "Sakshi Sharma", role: "MTech Research", research: "Hardware Design", photo: "images/sakshi.jpg", linkedin: "", email: "", orderCategory: 2 },
        { name: "Sourav Thakur", role: "MTech Research", research: "Hardware Design", photo: "images/sourav.jpg", linkedin: "", email: "", orderCategory: 2 },
        { name: "Ishan Gautam", role: "MTech Research", research: "Hardware Design", photo: "images/ishan.jpg", linkedin: "", email: "", orderCategory: 2 },
        { name: "Yuvraj Verma", role: "MTech", research: "Hardware Design", photo: "images/yuvraj.jpg", linkedin: "", email: "", orderCategory: 2 },
        { name: "Achal Shah", role: "MTech", research: "Hardware Design", photo: "images/achal.jpg", linkedin: "", email: "", orderCategory: 2 },
        { name: "Vipul Jain", role: "MTech", research: "Hardware Design", photo: "images/vipul.jpg", linkedin: "", email: "", orderCategory: 2 },
        { name: "Krishna Gorai", role: "MTech", research: "Hardware Design", photo: "images/krishna.jpg", linkedin: "", email: "", orderCategory: 2 },
        { name: "Ankit Patel", role: "MTech", research: "Hardware Design", photo: "images/ankit.jpg", linkedin: "", email: "", orderCategory: 2 },
        { name: "Kiran Yadav", role: "MTech", research: "Hardware Design", photo: "images/kiran.jpg", linkedin: "", email: "", orderCategory: 2 },
        { name: "Saurabh", role: "MTech", research: "Hardware Design", photo: "images/saurabh.jpg", linkedin: "", email: "", orderCategory: 2 },
        { name: "OM Maheshwari", role: "BTech", research: "Low-power IoT, Serial Comm.", photo: "images/om.jpg", linkedin: "https://www.linkedin.com/in/om-maheshwari-8a4996299/", email: "", orderCategory: 3 }
    ];

    const renderTeam = () => {
        const gridContainer = document.getElementById('team-grid-container');
        if (!gridContainer) return;

        // Sort: PhD (1), MTech (2), BTech (3)
        const sortedMembers = [...teamMembers].sort((a, b) => a.orderCategory - b.orderCategory);

        let gridHtml = '';
        sortedMembers.forEach((member, index) => {
            let socialLinks = '';
            if (member.linkedin) {
                socialLinks += `<a href="${member.linkedin}" target="_blank" class="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200"><i class="fab fa-linkedin-in text-sm"></i></a>`;
            }
            if (member.email) {
                socialLinks += `<a href="mailto:${member.email}" class="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200"><i class="fas fa-envelope text-sm"></i></a>`;
            }

            // Default monochrome silhouette if photo missing
            const imgSrc = member.photo || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';

            gridHtml += `
        <div class="group animate-on-scroll" style="transition-delay: ${index * 100}ms;">
            <div class="aspect-square relative overflow-hidden bg-gray-100 mb-4 premium-card p-1 flex items-center justify-center border border-border">
                <img src="${imgSrc}" alt="${member.name}" class="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'black\\' stroke-width=\\'1\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'><path d=\\'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\\'></path><circle cx=\\'12\\' cy=\\'7\\' r=\\'4\\'></circle></svg>'; this.classList.remove('object-cover'); this.classList.add('p-8', 'w-1/2', 'h-1/2', 'mx-auto', 'my-auto');">
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div class="flex gap-3">
                        ${socialLinks}
                    </div>
                </div>
            </div>
            <h5 class="font-serif text-lg font-bold">${member.name}</h5>
            <span class="text-xs text-muted block mb-2">${member.role}</span>
            <p class="text-sm text-primary line-clamp-2">${member.research}</p>
        </div>
      `;
        });
        gridContainer.innerHTML = gridHtml;
    };
    renderTeam();

    // Re-initialize observer for freshly injected elements
    reinitObserver();

    // Image load fallback for PI
    const piImg = document.querySelector('img[alt="Dr. Bikram Paul"]');
    if (piImg) {
        piImg.onerror = function () {
            this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
            this.classList.remove('object-cover');
            this.classList.add('p-8', 'w-1/2', 'h-1/2', 'mx-auto', 'my-auto');
        };
    }
    // --- Data and Rendering for Gallery ---
    const galleryImages = [
        "gallery/IMG_6424.jpg",
        "gallery/IMG_6741.jpg",
        "gallery/IMG_7345.jpg",
        "gallery/IMG_7437.jpg",
        "gallery/IMG_7489.jpg",
        "gallery/IMG_7531.jpg",
        "gallery/IMG_7558.jpg",
        "gallery/IMG_7670.jpg",
        "gallery/A35E58FC-8220-4B8D-A83D-B17A87208C81.jpg"
    ];

    // Shuffle array function (Fisher-Yates)
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const renderGallery = () => {
        const carouselInner = document.getElementById('gallery-carousel');
        if (!carouselInner) return;

        // Shuffle the images so it's a "random good manner" every reload
        const shuffledImages = shuffleArray([...galleryImages]).slice(0, 8); // Keep it to 8 distinct images for the carousel

        let html = '';
        shuffledImages.forEach((src, index) => {
            // Assign some placeholder captions randomly to make it look premium
            const captions = ["Research Focus", "Team Brainstorming", "Lab Environment", "Hardware Testing", "Academic Seminar", "SoC Design"];
            const caption = captions[index % captions.length];

            html += `
                <div class="w-full flex-shrink-0 lg:w-1/2 p-2 slide">
                    <div class="aspect-[4/3] bg-gray-100 overflow-hidden relative cursor-zoom-in modal-trigger premium-card p-1" data-caption="${caption}">
                        <img src="${src}" alt="${caption}" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700">
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                            <i class="fas fa-expand text-white text-3xl"></i>
                        </div>
                    </div>
                </div>
            `;
        });

        carouselInner.innerHTML = html;
        bindLightboxEvents();
    };

    renderGallery();

    // --- Lightbox Logic (Moved into a function to bind after dynamic generation) ---
    function bindLightboxEvents() {
        const modal = document.getElementById('lightbox-modal');
        const modalImg = document.getElementById('modal-image');
        const modalCaption = document.getElementById('modal-caption');
        const modalBtnClose = document.getElementById('modal-close');

        if (!modal) return;

        document.querySelectorAll('.modal-trigger').forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                const img = trigger.querySelector('img');
                const caption = trigger.getAttribute('data-caption') || img.alt;

                modalImg.src = img.src;
                modalImg.alt = img.alt;
                modalCaption.textContent = caption;

                modal.classList.remove('hidden');
                modal.classList.add('flex');
                document.body.style.overflow = 'hidden'; // Prevent scrolling

                // Trigger reflow for animation
                void modal.offsetWidth;
                modal.classList.add('opacity-100');
            });
        });

        const closeModal = () => {
            modal.classList.remove('opacity-100');
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            }, 300);
        };

        if (modalBtnClose) modalBtnClose.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Carousel Navigation Logic
    const carouselInner = document.getElementById('gallery-carousel');
    const nextBtn = document.getElementById('gallery-next');
    const prevBtn = document.getElementById('gallery-prev');

    if (carouselInner && nextBtn && prevBtn) {
        let currentSlide = 0;

        const updateCarousel = () => {
            const slides = carouselInner.querySelectorAll('.slide');
            if (slides.length === 0) return;
            // Get width of a single slide dynamically
            const slideWidth = slides[0].offsetWidth;
            // Adjust to showing 2 on desktop
            const maxSlides = window.innerWidth >= 1024 ? slides.length - 2 : slides.length - 1;

            if (currentSlide > maxSlides) currentSlide = maxSlides;
            if (currentSlide < 0) currentSlide = 0;

            carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        };

        nextBtn.addEventListener('click', () => {
            const slides = carouselInner.querySelectorAll('.slide');
            const maxSlides = window.innerWidth >= 1024 ? slides.length - 2 : slides.length - 1;
            if (currentSlide < maxSlides) {
                currentSlide++;
                updateCarousel();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateCarousel();
            }
        });

        window.addEventListener('resize', () => {
            currentSlide = 0;
            updateCarousel();
        });
    }
});
