function sou() {

  let city =
    document.getElementById("city").value;

  console.log(city);

  city = city.toLowerCase();

  if(city == "tokyo") {

    location.href = "tokyo.html";

  }

  else if(city == "paris") {

    location.href = "paris.html";

  }

  else if(city == "roma") {

    location.href = "roma.html";

  }

}