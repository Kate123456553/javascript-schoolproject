
/* 1. Variablen */

let name = "Herbert";
let alter = 16;


/* 2. Variablen-Button */

document.getElementById("variablenButton")
    .addEventListener("click", function() {

        document.getElementById("variablenAusgabe")
            .textContent = "Hallo " + name +
            "! Du bist " + alter + " Jahre alt.";

    });


/* 3. Bedingungen */

document.getElementById("bedingungenButton")
    .addEventListener("click", function() {

        if (alter >= 18) {
            alert("Herbert ist volljährig.");
        } else {
            alert("Herbert ist noch minderjährig.");
        }

    });


/* 4. Eine eigene Funktion */

function begruessung() {
    alert("Hallo! Schön, dass du hier bist.");
}

document.getElementById("grussButton")
    .addEventListener("click", begruessung);


/* 5. Klick-Zähler */

let klicks = 0;

document.getElementById("zaehlerButton")
    .addEventListener("click", function() {

        klicks = klicks + 1;

        document.getElementById("zaehler")
            .textContent = klicks;

    });


/* 6. Zähler zurücksetzen */

document.getElementById("resetButton")
    .addEventListener("click", function() {

        klicks = 0;

        document.getElementById("zaehler")
            .textContent = klicks;

    });


const eingabeFeld = document.getElementById("codeEingabe");
const ausfuehrenButton = document.getElementById("codeStarten");
const fehlerFeld = document.getElementById("codeFehler");
const codeAusfuehrung = document.getElementById("codeAusfuehrung");

ausfuehrenButton.addEventListener("click", function () {
    const schuelerCode = eingabeFeld.value;

    fehlerFeld.textContent = "";

    // Den Schueler-Code als JavaScript-Text vorbereiten.
    const sichererCode = JSON.stringify(schuelerCode)
        .replace(/</g, "\\u003c");

    // Den Code in einem isolierten iframe ausfuehren.
    codeAusfuehrung.srcdoc = `
        <!DOCTYPE html>
        <html lang="de">
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <script>
                try {
                    new Function(${sichererCode})();
                } catch (fehler) {
                    alert("Fehler im Code: " + fehler.message);
                }
            <\/script>
        </body>
        </html>
    `;
});
