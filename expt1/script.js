function goToBananaleaf() {
    window.location.href = "https://www.bananaleaf.co.in/";
}


window.addEventListener('scroll', function() {
    const heading = document.getElementById('bananaHeading');
    if (window.scrollY > 50) {
        heading.classList.add('scrolled');
    } else {
        heading.classList.remove('scrolled');
    }
});
