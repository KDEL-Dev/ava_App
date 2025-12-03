/* ***** HOME PAGE ***** */

// Medication Button onClick

function changeMedsImg()
{
    document.getElementById('medsImg').src="img/icons/carbon_pills_onClick.png"
}

function returnMedsImg()
{
    document.getElementById('medsImg').src="img/icons/carbon_pills.png"
}

//Device Button onClick

function changeDeviceImg()
{
    document.getElementById('deviceImg').src="img/icons/devices_onClick.png"
}

function returnDeviceImg()
{
    document.getElementById('deviceImg').src="img/icons/devices.png"
}

// Task Button onClick

function changeTaskImg()
{
    document.getElementById('taskImg').src="img/icons/tasks_onClick.png"
}

function returnTaskImg()
{
    document.getElementById('taskImg').src="img/icons/tasks.png"
}

//Transport Button onClick

function changeTransportImg()
{
    document.getElementById('transportImg').src="img/icons/transport_onClick.png"
}

function returnTransportImg()
{
    document.getElementById('transportImg').src="img/icons/transport.png"
}

//Read aloud Button onClick
function changeReadImg()
{
    document.getElementById('readImg').src="img/icons/readAloud_onClick.png"
}
function returnReadImg()
{
    document.getElementById('readImg').src="img/icons/readAloud.png"
}

//Skip Button onClick

function changeSkipImg()
{
    document.getElementById('skipImg').src="img/icons/blueX_onClick.png"
}

function returnSkipImg()
{
    document.getElementById('skipImg').src="img/icons/blueX.png"

}

//Taken Button onClick

function changeTakenImg()
{
    document.getElementById('takenImg').src="img/icons/checkMark2.png"
}

function returnTakenImg()
{
    document.getElementById('takenImg').src="img/icons/blueCheckMark.png"

}





function openMedicationPage() {
    const homePage = document.getElementById('homeMenuPage');
    const medicationPage = document.getElementById('medicationPage');
    const homeFooterBtn = document.getElementById('homeFooterBtn');
    const inPageButtons = document.getElementById('inPageButtons');
    const changeHeader = document.getElementById('headerText');

    homePage.style.display = "none";
    homeFooterBtn.style.display = "none";
    medicationPage.style.display = "flex";
    inPageButtons.style.display = "flex";

    changeHeader.innerText = "Medication";

    // ⭐ Re-center Wednesday AFTER page becomes visible
    setTimeout(() => {
        const wednesday = document.getElementsByClassName("dateBtn")[3];
        if (wednesday) {
            wednesday.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest"
            });
        }
    }, 50); // delay just enough for layout update
}


/* ***** DATE BUTTONS ***** */

document.addEventListener("DOMContentLoaded", () => {
    const dateBtns = document.getElementsByClassName('dateBtn');

    // ⭐ Preselect THURSDAY (index 3)
    if (dateBtns.length > 3) {
        const thursday = dateBtns[3];
        thursday.classList.add('active');

        // ⭐ Auto-scroll Thursday to center
        thursday.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    // ⭐ Click behavior for ANY date button
    Array.from(dateBtns).forEach(btn => {
        btn.addEventListener('click', function () {

            // Remove active from all
            Array.from(dateBtns).forEach(b => b.classList.remove('active'));

            // Add active to clicked
            this.classList.add('active');

            // ⭐ Center clicked date in the scroll container
            this.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        });
    });
});


/* ***** MEDICATION BUTTONS (MULTI-SELECT ACTIVE) ***** */
document.addEventListener("DOMContentLoaded", () => {
    const medBtns = document.querySelectorAll(".medBtn");

    // ⭐ Pre-activate medBtn1 → medBtn4
    for (let i = 1; i <= 4; i++) {
        const btn = document.getElementById(`medBtn${i}`);
        if (btn) btn.classList.add("active");
    }

        medBtns.forEach(btn => {
        btn.addEventListener("click", () => {
        if (btn.id !== "medBtn5") {
            btn.classList.toggle("active");
        }
    });
});


});




function medsBackBtn() {
    const homePage = document.getElementById('homeMenuPage');
    const medicationPage = document.getElementById('medicationPage');
    const medDetailPage = document.querySelector('.medDetailPage');
    const homeFooterBtn = document.getElementById('homeFooterBtn');
    const inPageButtons = document.getElementById('inPageButtons');
    const header = document.getElementById('headerText');

    // ⭐ If currently inside medDetailPage → return to Medication Page
    if (medDetailPage.style.display === "flex") {
        medDetailPage.style.display = "none";
        medicationPage.style.display = "flex";
        header.innerText = "Medication";  // ⭐ reset title
        return;
    }

    // ⭐ Otherwise → go back to Home Page (default)
    homePage.style.display = "flex";
    homeFooterBtn.style.display = "flex";
    medicationPage.style.display = "none";
    inPageButtons.style.display = "none";
    header.innerText = "Home";
}



    document.addEventListener("DOMContentLoaded", () => {
    const medBtn5 = document.getElementById("medBtn5");
    const medicationPage = document.getElementById("medicationPage");
    const medDetailPage = document.querySelector(".medDetailPage");

    // Open medication detail page when clicking medBtn5
    medBtn5.addEventListener("click", () => {
        medicationPage.style.display = "none";
        medDetailPage.style.display = "flex";   // show details page
    });
});

    function closeMedDetailPage() {
    document.getElementById("medicationPage").style.display = "flex";
    document.querySelector(".medDetailPage").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {

    const medicationPage = document.getElementById("medicationPage");
    const medDetailPage = document.querySelector(".medDetailPage");
    const takenBtn = document.getElementById("takenBtn");
    const skipBtn = document.getElementById("skipBtn");
    const medBtn5 = document.getElementById("medBtn5");
    const header = document.getElementById("headerText");

    // ⭐ Taken => Add active + return
    takenBtn.addEventListener("click", () => {
        medBtn5.classList.add("active");       // add checkmark + highlight
        medDetailPage.style.display = "none";
        medicationPage.style.display = "flex";
        header.innerText = "Medication";
    });

    // ⭐ Skip => Return only (NO active)
    skipBtn.addEventListener("click", () => {
        medDetailPage.style.display = "none";
        medicationPage.style.display = "flex";
        header.innerText = "Medication";
    });

});

document.addEventListener("DOMContentLoaded", () => {

    const medBtn5 = document.getElementById("medBtn5");
    const medicationPage = document.getElementById("medicationPage");
    const medDetailPage = document.querySelector(".medDetailPage");
    const header = document.getElementById("headerText");

    medBtn5.addEventListener("click", () => {
        medicationPage.style.display = "none";
        medDetailPage.style.display = "flex";
        header.innerText = "Evening Medicine";   // ⭐ change title
    });
});
