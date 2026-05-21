let b = document.querySelector('button#sou');
b.addEventListener('click', GS);

function GS() {

  let city =
    document.getElementById("city").value;

  console.log(city);

  city = city.toLowerCase();

}