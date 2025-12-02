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






function openMedicationPage()
{
    const homePage = document.getElementById('homeMenuPage');
    const medicationPage = document.getElementById('medicationPage');
    const homeFooterBtn = document.getElementById('homeFooterBtn');
    const inPageButtons = document.getElementById('inPageButtons');
    const changeHeader = document.getElementById('headerText')

    homePage.style.display = "none";
    homeFooterBtn.style.display = "none";
    medicationPage.style.display = "flex";
    inPageButtons.style.display = "flex";

    changeHeader.innerText = "Medication"

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

    medBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
        });
    });
});



function medsBackBtn()
{
    const homePage = document.getElementById('homeMenuPage');
    const medicationPage = document.getElementById('medicationPage');
    const homeFooterBtn = document.getElementById('homeFooterBtn');
    const inPageButtons = document.getElementById('inPageButtons');
    const changeHeader = document.getElementById('headerText')


    homePage.style.display = "flex";
    homeFooterBtn.style.display = "flex";
    medicationPage.style.display = "none";
    inPageButtons.style.display = "none";
    changeHeader.innerText = "Home"

}