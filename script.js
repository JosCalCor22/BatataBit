const menuPrices = document.querySelector('.conteiner-main-table-prices');
const menuCommissions = document.querySelector('.conteiner-main-table-commissions');
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

arrowLeft.addEventListener('click', toggleMenuPrices);
arrowRight.addEventListener('click', toggleMenuCommissions);

function toggleMenuPrices(){
    isMenuCommissionsDesactive = menuCommissions.classList.contains('inactive');

    if(!isMenuCommissionsDesactive){
        menuCommissions.classList.add('inactive');
    }
    menuPrices.classList.toggle('inactive');
}
function toggleMenuCommissions(){
    isMenuPricesDesactive = menuPrices.classList.contains('inactive');

    if(!isMenuPricesDesactive){
        menuPrices.classList.add('inactive');
    }
    menuCommissions.classList.toggle('inactive');
}
function openMenuPrice(){
    menuCommissions.classList.add('inactive');
    menuPrices.classList.remove('inactive');
}
openMenuPrice();