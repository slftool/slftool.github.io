var HttpClient = function () {
    this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}
var client = new HttpClient();
var data;

function init() {
    client.get('/data.json', function (response) {
        data = JSON.parse(response);
        console.log("Loaded SLF Tool");
        console.log(data);
    });
}

var last;

function change() {
    document.getElementById("letter").value = "";
    setTimeout(function () {
        var letter = document.getElementById("letter").value;
        if (last != letter) {
            last = letter;
            console.log(letter);
        }
    }, 100);

}
