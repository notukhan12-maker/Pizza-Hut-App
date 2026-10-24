
        // 1. Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.getElementById('nav-links');

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu on selecting link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // 2. Interactive Menu Filtering
        const filterBtns = document.querySelectorAll('.menu-filter-btn');
        const menuBlocks = document.querySelectorAll('.menu-block');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const category = btn.getAttribute('data-category');

                menuBlocks.forEach(block => {
                    if (category === 'all' || block.getAttribute('data-group') === category) {
                        block.style.display = 'block';
                    } else {
                        block.style.display = 'none';
                    }
                });
            });
        });

        // 3. Booking Modal Functionality
        const modal = document.getElementById('bookingModal');
        const openBtns = document.querySelectorAll('.open-booking');
        const closeBtn = document.querySelector('.close-modal');

        openBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'flex';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Form Handlers
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! We will contact you shortly.');
            e.target.reset();
        });

        document.getElementById('bookingForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your table has been reserved successfully!');
            modal.style.display = 'none';
            e.target.reset();
        });
