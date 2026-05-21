function changeDom() {
// 要素の作成
let l = document.createElement('li');
l.textContent = 'ヨット';
let u = document.querySelector ('ul#kazoeuta');
u. insertAdjacentElement ('beforeend', l);
//属性の变更
let i = document.querySelector('img#bluemoon');
i. setAttribute('src', 'bluemoon.jpg');
let a = document. createElement ('a');
let p = document.querySelector('p#takudai');
p. insertAdjacentElement (' afterend', a);
a.textContent ='拓殖大学HP';
a.setAttribute('href','https://www.takushoku-u.ac.jp');
//要素の削除
l = document.querySelector('li#mochi');
l.remove () ;
u = document.querySelector('ul#kassen');
l.remove () ;
//複雑な新規要素の作成
u = document. createElement ('ul');
p = document.querySelector('p#primary');
p. insertAdjacentElement ('afterend', u) ;
l = document.createElement('li');
u. insertAdjacentElement ('beforeend', l);
l.textContent = '赤';
l = document.createElement('li');
u.insertAdjacentElement (' beforeend', l);
l.textContent = '緑';
l = document. createElement ('li');
u. insertAdjacentElement('beforeend', l);
l. textContent = '緑';
}