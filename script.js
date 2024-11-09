// Dropdown menu

const burger = document.getElementById("burgerIcon");
const dropdown = document.getElementById("dropdownContent");

// Toggle menu when clicking the burger icon
burger.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from propagating to the document
    dropdown.classList.toggle('open');
    burger.classList.toggle('open');
  });

// Close the menu if clicking outside the burger icon or menu
document.addEventListener('click', (event) => {
    if (!burger.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
      burger.classList.remove('open');
    }
  });

//

function startFlicker(element) {
    element.classList.add('flicker-animation');
}

function stopFlicker(element) {
    element.classList.remove('flicker-animation');
}

//

const imageUrls = [
    //
    'images/Picnic_(1955).jpg',
    //
    'images/Phantom_Of_The_Paradise_(1974).jpg',
    // David Lynch
    'images/Blue_Velvet_(1986).jpg',
    'images/Wild_At_Heart_(1990).jpg',
    'images/Twin_Peaks_Fire_Walk_With_Me_(1992).jpg',
    'images/Lost_Highway_(1997).jpg',
    'images/Mulholland_Drive_(2001).jpg',
    'images/Inland_Empire_(2006).jpg',
    // Martin Scorcese
    'images/Color_Of_Money_(1986).jpg',
    'images/Casino_(1995).jpg',
    // Sofia Coppola
    'images/Virgin_Suicides_(1999).jpg',
    //
    'images/Breakfast_Club_(1985).jpg',
    'images/Heathers_(1988).jpg',
    'images/Pump_Up_The_Volume_(1990).jpg',
    //
    'images/Top_Gun_(1986).jpg',
    // David Cronenberg
    'images/Crash_(1996).jpg'
];

const currentDate = new Date();
const dayOfYear = Math.ceil((currentDate - new Date(currentDate.getFullYear(), 0, 1)) / 86400000);

const pathImage = imageUrls[dayOfYear % imageUrls.length];
document.getElementById('dailyImage').src = pathImage;

const pathImageNoUnderscore = pathImage.replace(/_/g, ' ');
const imageNameWithExt = pathImageNoUnderscore.substring(pathImageNoUnderscore.lastIndexOf('/') + 1);
const imageName = imageNameWithExt.substring(0, imageNameWithExt.lastIndexOf('.'));
document.getElementById("imageName").innerHTML = imageName;
