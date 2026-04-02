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
                
                // Active link highlighting
                const currentPath = window.location.pathname;
                const isHomePage = currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/index.html');
                
                document.querySelectorAll('#header a, #header button').forEach(link => {
                    const href = link.getAttribute('href');
                    if (!href) return;
                    
                    // Home page handling
                    if (isHomePage && (href === 'index.html' || href === '../index.html' || href === '/')) {
                        if(link.classList.contains('text-gray-900')) {
                            link.classList.remove('text-gray-900');
                            link.classList.add('text-[#E5097F]');
                        }
                    }
                    // Subpage handling
                    else if (!isHomePage && href) {
                        const targetPage = href.split('/').filter(Boolean).pop();
                        if (targetPage && currentPath.includes(targetPage)) {
                            if(link.classList.contains('text-gray-900')) {
                                link.classList.remove('text-gray-900');
                                link.classList.add('text-[#E5097F]');
                            }
                            
                            // Also highlight parent dropdown button
                            const dropdownContainer = link.closest('.group');
                            if(dropdownContainer) {
                                const btn = dropdownContainer.querySelector('button');
                                if(btn && btn.classList.contains('text-gray-900')) {
                                    btn.classList.remove('text-gray-900');
                                    btn.classList.add('text-[#E5097F]');
                                }
                            }
                        }
                    }
                });
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
