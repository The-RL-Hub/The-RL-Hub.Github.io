document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".content h2");
    const navLinks = document.querySelectorAll(".sidebar ul li a");

    // Function to add 'active' class to the current section's link
    function activateLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    // Scroll event listener for activating the correct link
    window.addEventListener("scroll", activateLink);
});
