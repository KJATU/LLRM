// Toggle the theme between light and dark
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Tooltip logic (optional)
const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseenter', function() {
        this.querySelector('::after').style.visibility = 'visible';
        this.querySelector('::after').style.opacity = '1';
    });

    tooltip.addEventListener('mouseleave', function() {
        this.querySelector('::after').style.visibility = 'hidden';
        this.querySelector('::after').style.opacity = '0';
    });
});
