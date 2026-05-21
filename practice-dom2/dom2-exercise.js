//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

function show() {
    let p = document.createElement('p');
    p.textContent = '八王子市館町';
    let h2Addr = document.querySelector('h2#addr');
    h2Addr.insertAdjacentElement('afterend', p);

    let u = document.createElement('ul');
    let h2Dept = document.querySelector('h2#dept');
    h2Dept.insertAdjacentElement('afterend', u);

    let l1 = document.createElement('li');
    u.insertAdjacentElement('beforeend', l1);
    l1.textContent = '机械システム工学科';

    let l2 = document.createElement('li');
    u.insertAdjacentElement('beforeend', l2);
    l2.textContent = '電子システム工学科';

    let l3 = document.createElement('li');
    u.insertAdjacentElement('beforeend', l3);
    l3.textContent = '情報工学科';

    let l4 = document.createElement('li');
    u.insertAdjacentElement('beforeend', l4);
    l4.textContent = 'デザイン学科';
}

let b = document.querySelector('button#show');
b.addEventListener('click', show);