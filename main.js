var HttpClient = function () {
    this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
                aCallback(anHttpRequest.responseText);
            }
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
        console.log("loaded database!");
    });

    if (navigator.userAgent.includes("Android")) {
        console.log("android device detected!");
        Swal.fire({
            title: "Android App",
            text: "Du kannst dir die SLF App runterladen für ein besseres erlebnis und weniger datenverbrauch!",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Abbrechen",
            confirmButtonText: "App runterladen!"
        }).then((result) => {
            if (result.value) {
                console.log("open google play page!");
                window.open("market://details?id=me.neocode.slftool");
            }
        })
    }
}

var last;

function change() {
    document.getElementById("letter").value = "";
    setTimeout(function () {
        var letter = document.getElementById("letter").value;
        if (last != letter) {
            last = letter;
            var ledata = data[letter.toLowerCase()];
            if (ledata != undefined) {
                var cdiv = document.getElementById("content");
                cdiv.innerHTML = '<h2>Stadt: ' + ledata.stadt[Math.floor(Math.random() * ledata.stadt.length)] + '</h2>' + '<h2>Land: ' + ledata.land[Math.floor(Math.random() * ledata.land.length)] + '</h2>' + '<h2>Fluss: ' + ledata.fluss[Math.floor(Math.random() * ledata.fluss.length)] + '</h2>' + '<h2>Name: ' + ledata.name[Math.floor(Math.random() * ledata.name.length)] + '</h2>' + '<h2>Beruf: ' + ledata.beruf[Math.floor(Math.random() * ledata.beruf.length)] + '</h2>' + '<h2>Tier: ' + ledata.tier[Math.floor(Math.random() * ledata.tier.length)] + '</h2>' + '<h2>Marke: ' + ledata.marke[Math.floor(Math.random() * ledata.marke.length)] + '</h2>' + '<h2>Pflanze: ' + ledata.pflanze[Math.floor(Math.random() * ledata.pflanze.length)] + '</h2>'
            } else {
                document.getElementById("content").innerHTML = "<h2>Bitte gebe einen gültigen Buchstaben ein<h2>";
            }
        }
    }, 100);

}