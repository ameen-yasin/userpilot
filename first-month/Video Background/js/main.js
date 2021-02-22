const toggleItem=document.querySelector('.toggle');
const showCaseItem=document.querySelector('.showcase');

toggleItem.addEventListener('click',showMenu);


function showMenu(e){
    toggleItem.classList.toggle('active');
    showCaseItem.classList.toggle('active');
}
