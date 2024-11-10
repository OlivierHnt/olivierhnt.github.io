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
