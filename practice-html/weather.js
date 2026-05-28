
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

let button = document.querySelector('#sou'); // 👈 这里的 '#search-btn' 换成你 HTML 里按钮的 id 或 class
if (button) {
    button.addEventListener('click', sendRequest);
}


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
    let inputElement = document.querySelector('#city'); // 👈 如果你的输入框 id 不是这个，请修改它
    let cityName = inputElement ? inputElement.value : "";

    if (!cityName) {
        alert('请输入要搜索的城市！');
        return;
    }

    
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/{id}.json' + cityName; 

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
    printDom(resp);
}


// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

