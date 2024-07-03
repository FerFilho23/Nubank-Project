/*==================== Header ====================*/
function scrollHeader() {
  const headerElement = document.getElementById('header');
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 50) {
    headerElement.classList.add('active-header');
  } else {
    headerElement.classList.remove('active-header');
  }
}

window.addEventListener('scroll', scrollHeader);


/*==================== DROPDOWN MENU ====================*/
const menuItem1 = document.getElementById('menu-desktop-item-1');
const menuItem2 = document.getElementById('menu-desktop-item-2');
const menuItem3 = document.getElementById('menu-desktop-item-3');

const dropdownMenu1 = document.getElementById('dropdown-menu-1');
const dropdownMenu2 = document.getElementById('dropdown-menu-2');
const dropdownMenu3 = document.getElementById('dropdown-menu-3');

function ShowDropdown1(event){
  event.preventDefault();
  dropdownMenu1.classList.toggle('active-dropdown-menu');
  dropdownMenu2.classList.remove('active-dropdown-menu');
  dropdownMenu3.classList.remove('active-dropdown-menu');
}
function ShowDropdown2(event){
  event.preventDefault();
  dropdownMenu2.classList.toggle('active-dropdown-menu');
  dropdownMenu1.classList.remove('active-dropdown-menu');
  dropdownMenu3.classList.remove('active-dropdown-menu');
}
function ShowDropdown3(event){
  event.preventDefault();
  dropdownMenu3.classList.toggle('active-dropdown-menu');
  dropdownMenu1.classList.remove('active-dropdown-menu');
  dropdownMenu2.classList.remove('active-dropdown-menu');
}

function RemoveDropdown(){
  dropdownMenu1.classList.remove('active-dropdown-menu');
  dropdownMenu2.classList.remove('active-dropdown-menu');
  dropdownMenu3.classList.remove('active-dropdown-menu');
  outSideClick()
}

menuItem1.addEventListener('click', ShowDropdown1);
menuItem2.addEventListener('click', ShowDropdown2);
menuItem3.addEventListener('click', ShowDropdown3);

dropdownMenu1.addEventListener(('mouseleave'), RemoveDropdown);
dropdownMenu2.addEventListener(('mouseleave'), RemoveDropdown);
dropdownMenu3.addEventListener(('mouseleave'), RemoveDropdown);

/*==================== MENU MOBILE ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active-menu-mobile');
      toggle.classList.toggle('active-hamburger');
    });
  }
}

showMenu('hamburger', 'menu-mobile')