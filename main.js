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
        console.log("loaded database!");
    });
    
    if(navigator.userAgent.includes("Android")) {
        console.log("android device detected!");
        Swal.fire({
            title: 'Android App',
            text: "Du kannst dir die SLF App runterladen für ein besseres erlebnis und weniger datenverbrauch!",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Abbrechen',
            confirmButtonText: 'App runterladen!'
        }).then((result) => {
            if (result.value) {
                console.log("open google play page!");
                window.open('https://play.google.com/store/apps/details?id=me.neocode.slftool', '_blank');
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

            var ledata;

            switch (letter.toLowerCase()) {
                case "a":
                    ledata = data.a;
                    break;
                case "b":
                    ledata = data.b;
                    break;
                case "c":
                    ledata = data.c;
                    break;
                case "d":
                    ledata = data.d;
                    break;
                case "e":
                    ledata = data.e;
                    break;
                case "f":
                    ledata = data.f;
                    break;
                case "g":
                    ledata = data.g;
                    break;
                case "h":
                    ledata = data.h;
                    break;
                case "i":
                    ledata = data.i;
                    break;
                case "j":
                    ledata = data.j;
                    break;
                case "k":
                    ledata = data.k;
                    break;
                case "l":
                    ledata = data.l;
                    break;
                case "m":
                    ledata = data.m;
                    break;
                case "n":
                    ledata = data.n;
                    break;
                case "o":
                    ledata = data.o;
                    break;
                case "p":
                    ledata = data.p;
                    break;
                case "q":
                    ledata = data.q;
                    break;
                case "r":
                    ledata = data.r;
                    break;
                case "s":
                    ledata = data.s;
                    break;
                case "t":
                    ledata = data.t;
                    break;
                case "u":
                    ledata = data.u;
                    break;
                case "v":
                    ledata = data.v;
                    break;
                case "w":
                    ledata = data.w;
                    break;
                case "x":
                    ledata = data.x;
                    break;
                case "y":
                    ledata = data.y;
                    break;
                case "z":
                    ledata = data.z;
                    break;

            }
            if (ledata != undefined) {
                var cdiv = document.getElementById("content");

                cdiv.innerHTML = '<h2>Stadt: ' + ledata.stadt[Math.floor(Math.random() * ledata.stadt.length)] + '</h2>' + '<h2>Land: ' + ledata.land[Math.floor(Math.random() * ledata.land.length)] + '</h2>' + '<h2>Fluss: ' + ledata.fluss[Math.floor(Math.random() * ledata.fluss.length)] + '</h2>' + '<h2>Name: ' + ledata.name[Math.floor(Math.random() * ledata.name.length)] + '</h2>' + '<h2>Beruf: ' + ledata.beruf[Math.floor(Math.random() * ledata.beruf.length)] + '</h2>' + '<h2>Tier: ' + ledata.tier[Math.floor(Math.random() * ledata.tier.length)] + '</h2>' + '<h2>Marke: ' + ledata.marke[Math.floor(Math.random() * ledata.marke.length)] + '</h2>'

                //cdiv.innerHTML = JSON.stringify(ledata);

                //console.log(ledata);
            }

        }
    }, 100);

}
