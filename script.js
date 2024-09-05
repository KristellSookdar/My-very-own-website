// JavaScript for Smooth Scrolling Between Sections

document.addEventListener('DOMContentLoaded', function () {
    const arrowButton = document.querySelector('.arrow-button'); // Select the arrow button

    if (arrowButton) {
        arrowButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor behavior

            // Find the next section to scroll to
            const currentSection = document.querySelector('.pages'); // Assuming the current section is the first .pages
            const nextSection = currentSection.nextElementSibling; // Get the next sibling section

            if (nextSection) {
                // Smoothly scroll to the next section
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
