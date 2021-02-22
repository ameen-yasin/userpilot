const tabItems = document.querySelectorAll(".tab-item");
const tabContnentItem = document.querySelectorAll(".tab-content-item");

function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add('tab-borrder');

    const itemContent = document.querySelector(`#${this.id}-content`);
    // console.log(`#${this.id}`);
    itemContent.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-borrder'));
}

function removeShow(){
    tabContnentItem.forEach(item => {
        item.classList.remove('show');
    });
}

tabItems.forEach( item => { 
    item.addEventListener('click',selectItem);
});