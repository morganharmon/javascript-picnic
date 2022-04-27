const sodaConst = document.getElementById('soda');
const cheeseConst = document.getElementById('cheese');
const grapesConst = document.getElementById('grapes');
const breadConst = document.getElementById('bread');
const watermelonConst = document.getElementById('watermelon');
const buttonConst = document.getElementById('button');
let arr = [sodaConst, cheeseConst, grapesConst, breadConst, watermelonConst];

sodaConst.addEventListener('click', () => {
    sodaConst.classList.toggle('picked');
});

cheeseConst.addEventListener('click', () => {
    cheeseConst.classList.toggle('picked');
});

grapesConst.addEventListener('click', () => {
    grapesConst.classList.toggle('picked');
});

breadConst.addEventListener('click', () => {
    breadConst.classList.toggle('picked');
});

watermelonConst.addEventListener('click', () => {
    watermelonConst.classList.toggle('picked');
});

// -   Add a button that will pick a random item from your picnic basket and add it to your picnic
// -   Add drag and drop to your items (hint: drag and drop are events just like clicking)
// -   Keep track of how many items have been picked and only allow users to select at most 3 items

buttonConst.addEventListener('click', () => {
    arr[Math.floor(Math.random() * 5)].classList.toggle('picked');
});
