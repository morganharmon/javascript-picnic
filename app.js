const sodaConst = document.getElementById('soda');
const cheeseConst = document.getElementById('cheese');



sodaConst.addEventListener('click', () => {
    sodaConst.classList.toggle('picked');
});

cheeseConst.addEventListener('click', () => {
    cheeseConst.classList.toggle('picked');
});