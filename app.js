const sodaConst = document.getElementById('soda');
const cheeseConst = document.getElementById('cheese');
const grapesConst = document.getElementById('grapes');
const breadConst = document.getElementById('bread');
const watermelonConst = document.getElementById('watermelon');
const buttonConst = document.getElementById('button');
let arr = [sodaConst, cheeseConst, grapesConst, breadConst, watermelonConst];
const blanketConst = document.getElementById('blanket');

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
// -   Keep track of how many items have been picked and only allow users to select at most 3 items

buttonConst.addEventListener('click', () => {
    arr[Math.floor(Math.random() * 5)].classList.toggle('picked');
});

// -   Add drag and drop to your items (hint: drag and drop are events just like clicking)

sodaConst.addEventListener('drag', (e) => {
    e.preventDefault();
});
sodaConst.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    },0);
});
sodaConst.addEventListener('dragend', (e) => {
});
sodaConst.addEventListener('drop', (e) => {
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    e.target.appendChild(draggable);
    draggable.classList.remove('hide');
});

blanketConst.addEventListener('dragenter', (e) => {
    e.preventDefault();
});
blanketConst.addEventListener('dragover', (e) => {
    e.preventDefault();
});
blanketConst.addEventListener('drop', (e) => {
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    e.target.appendChild(draggable);
    draggable.classList.remove('hide');
});


// cheeseConst.addEventListener('drop', drop);
// grapesConst.addEventListener('drop', drop);
// breadConst.addEventListener('drop', drop);
// watermelonConst.addEventListener('drop', drop);

// sodaConst.addEventListener('click', () => {
//     sodaConst.classList.toggle('picked');    
// });

// cheeseConst.addEventListener('drop', () => {
//     cheeseConst.classList.toggle('picked');
// });

// grapesConst.addEventListener('drop', () => {
//     grapesConst.classList.toggle('picked');
// });

// breadConst.addEventListener('drop', () => {
//     breadConst.classList.toggle('picked');
// });

// watermelonConst.addEventListener('drop', () => {
//     watermelonConst.classList.toggle('picked');
// });