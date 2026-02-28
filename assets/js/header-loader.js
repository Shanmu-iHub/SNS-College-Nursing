document.addEventListener("DOMContentLoaded", function () {
    const isSubpage = window.location.pathname.includes('/pages/');
    const headerPath = isSubpage ? '../header.html' : 'header.html';

    fetch(headerPath)
        .then(response => response.text())
        .then(data => {
            const headerElement = document.getElementById('header');
            if (headerElement) {
                // Adjust links if in subpage
                if (isSubpage) {
                    // Update image sources
                    data = data.replace(/src="assets\//g, 'src="../assets/');
                    // Update page links that start with pages/
                    data = data.replace(/href="pages\//g, 'href="');
                    // Update index.html link
                    data = data.replace(/href="index.html"/g, 'href="../index.html"');
                }

                headerElement.innerHTML = data;
                initializeHeader();
            }
        })
        .catch(error => console.error('Error loading header:', error));

    function initializeHeader() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', function () {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Close mobile menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });
    }
});
