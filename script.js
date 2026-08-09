function goToPlayers() {

    document.getElementById("players").scrollIntoView({
        behavior: "smooth"
    });

}
// =============================
// OPEN PLAYER PROFILE PAGE
// =============================

function openProfile(page){

    window.location.href = page;

}