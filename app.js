const sodaConst = document.getElementById('soda');
const cheeseConst = document.getElementById('cheese');
const grapesConst = document.getElementById('grapes');
const breadConst = document.getElementById('bread');

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