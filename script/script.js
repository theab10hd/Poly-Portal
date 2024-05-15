document.addEventListener("DOMContentLoaded", function () {
    window.setTimeout(
        document.querySelector("svg").classList.add("animated"),
        500
    );
});


function toggleSemester(sem) {
    var semElements = document.querySelectorAll('.sem');

    semElements.forEach(function (element) {
        element.classList.add("d-none");
    });
    document.querySelectorAll('.home-bottons-non').forEach(function (btn) {
        btn.classList.remove("selectedBtn");
    });

    var semElementToShow = document.getElementById("sem" + sem);
    if (semElementToShow) {
        semElementToShow.classList.remove("d-none");
        document.getElementById('btnSem' + sem).classList.add('selectedBtn');
    }
}
