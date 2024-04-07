document.addEventListener('DOMContentLoaded', function() {
    // Dynamic date display in the footer
    const yearSpan = document.querySelector('footer p');
    yearSpan.textContent = © ${new Date().getFullYear()} Sci-Fi Code Hub;

    // Interactive download button
    const downloadButton = document.querySelector('#download button');
    downloadButton.addEventListener('click', function() {
        alert('Initiating download sequence...');
        // Add your download logic here
    });

    // Optional: Add animations or interactive elements here
});
