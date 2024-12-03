function toggleMute() {
    var audio = document.getElementById("city-ruins-music");
    audio.muted = !audio.muted;
}

document.getElementById('toggle-nav-bar').addEventListener('click', function () {
    const navBar = document.getElementById('middle-nav-bar');
    if (navBar.style.display === 'none' || navBar.style.display === '') {
        navBar.style.display = 'flex'; // Show the navigation bar
        this.textContent = '<<'; // Change button text
    } else {
        navBar.style.display = 'none'; // Hide the navigation bar
        this.textContent = '>>'; // Change button text
    }
});