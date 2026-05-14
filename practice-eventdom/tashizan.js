x = document.querySelector('button#calc');
x.addEventListener('click', calc);

function add(){
    let a = document.querySelector('input[name="left"]');
    let b = document.querySelector('input[name="right"]');
    let sum = Number(a.value) + Number(b.value);
    let p = document.querySelector('span[id = "answer"]');
    p.textContent = sum;
}