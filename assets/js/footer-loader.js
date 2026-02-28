document.addEventListener("DOMContentLoaded", function () {
    const isSubpage = window.location.pathname.includes('/pages/');
    const footerPath = isSubpage ? '../footer.html' : 'footer.html';

    fetch(footerPath)
        .then(response => response.text())
        .then(data => {
            const footerElement = document.getElementById('footer');
            if (footerElement) {
                // Adjust links if in subpage
                if (isSubpage) {
                    // Update image sources (logo)
                    data = data.replace(/src="https:\/\/snsct.snscourseware.org\/images\/ctimg\/snscn_logo.png"/g, 'src="https://snsct.snscourseware.org/images/ctimg/snscn_logo.png"');
                    // We don't need to replace the absolute URL, but if there were local assets:
                    data = data.replace(/src="assets\//g, 'src="../assets/');

                    // Update page links that start with pages/
                    data = data.replace(/href="pages\//g, 'href="');
                    // Update index.html link
                    data = data.replace(/href="index.html"/g, 'href="../index.html"');
                }

                footerElement.innerHTML = data;

                // Load dependencies
                loadScript('https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js');
                loadScript(isSubpage ? '../assets/js/main.js' : 'assets/js/main.js');
            }
        })
        .catch(error => console.error('Error loading footer:', error));

    function loadScript(src) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
    }
});
