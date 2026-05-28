
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("--- 検索結果 ---");
  console.log("都市名: " + data.name);
  console.log("緯度: " + data.coord.lat + ", 経度: " + data.coord.lon);
  console.log("天气: " + data.weather[0].description);
  console.log("最高気温: " + data.main.temp_max + "℃");
  console.log("最低気温: " + data.main.temp_min + "℃");
  console.log("湿度: " + data.main.humidity + "%");
  console.log("風速: " + data.wind.speed + "m/s");
  console.log("風向: " + data.wind.deg + "度");
}



// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
    let oldResult = document.getElementById('result');
    if (oldResult) {
        oldResult.remove();
    }
    let d = document.createElement('div');
    d.setAttribute('id', 'result');

    d.innerHTML = `
        <p>--- 検索結果 ---</p >
        <p>都市名: ${data.name}</p >
        <p>緯度: ${data.coord.lat}, 経度: ${data.coord.lon}</p >
        <p>天気: ${data.weather[0].description}</p >
        <p>最高気温: ${data.main.temp_max}℃</p >
        <p>最低気温: ${data.main.temp_min}℃</p >
        <p>湿度: ${data.main.humidity}%</p >
        <p>風速: ${data.wind.speed} m/s</p >
        <p>風向: ${data.wind.deg}度</p >
    `;

    let b = document.querySelector('body');
    b.insertAdjacentElement('beforeend', d);
  }

// 課題6-1 のイベントハンドラ登録処理は以下に記述

let button = document.querySelector('#sou'); 
if (button) {
    button.addEventListener('click', sendRequest);
}


// 課題6-1 のイベントハンドラ sendRequest() の定義

function sendRequest() {
	
	let inputElement = document.querySelector('#city'); 
  let userInput = inputElement.value.trim().toLowerCase(); 
  let resultBox = document.querySelector('#result');

  let cityId = "";

	if (userInput === "cairo" || userInput === "カイロ" || userInput === "开罗") {
		cityId = "360630";
	} else if (userInput === "moscow" || userInput === "モスクワ" || userInput === "莫斯科") {
		cityId = "524901";
	} else if (userInput === "johannesburg" || userInput === "ヨハネスブルク" || userInput === "约翰内斯堡") {
		cityId = "993800";
	} else if (userInput === "beijing" || userInput === "北京" || userInput === "ペキン") {
		cityId = "1816670";
	} else if (userInput === "tokyo" || userInput === "東京" || userInput === "东京") {
		cityId = "1850147";
    document.body.className = 'bg-tokyo';
	} else if (userInput === "singapore" || userInput === "シンガポール" || userInput === "新加坡") {
		cityId = "1880252";
	} else if (userInput === "sydney" || userInput === "シドニー" || userInput === "悉尼") {
		cityId = "2147714";
	} else if (userInput === "london" || userInput === "ロンドン" || userInput === "伦敦") {
		cityId = "2643743";
	} else if (userInput === "paris" || userInput === "パリ" || userInput === "巴黎") {
		cityId = "2968815";
	} else if (userInput === "rio de janeiro" || userInput === "リオデジャネイロ" || userInput === "里约热内卢") {
		cityId = "3451189";
	} else if (userInput === "new york" || userInput === "纽约" || userInput === "ニューヨーク") {
		cityId = "5128581";
	} else if (userInput === "los angeles" || userInput === "ロサンゼルス" || userInput === "洛杉矶") {
		cityId = "5368361";
	} else {
		alert("指定された都市が見つかりません。\n（東京、ロンドン、ニューヨーク などを入力してください）");
		return; 
	}


    
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + cityId + '.json';

	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}




// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
    
    let data = resp.data;
    if (typeof data === 'string') {
		data = JSON.parse(data);
	}
  printDom(data);
}


// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

