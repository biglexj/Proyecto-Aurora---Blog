var data = [

{
    img: "../assets/logos/Fondo.png",
    country: "Alaska - USA",
    place: "Kenia Fjords Park",
    describe: "Irure irure eu culpa est ut excepteur fugiat dolore proident ea occaecat consectetur id et. Id fugiat nulla enim laboris.",
},
{
    img: "../assets/logos/TikTok.png",
    country: "Japon",
    place: "Kenia Fjords Park",
    describe: "Magna eu esse est ea esse.Elit eu dolore reprehenderit quis fugiat tempor labore tempor elit deserunt aute consectetur.",
},
{
    img: "../assets/logos/telegram.png",
    country: "Perú",
    place: "Kenia Fjords Park",
    describe: "Quis consectetur velit sint pariatur consequat.Exercitation irure laboris in ipsum irure nisi qui id irure velit.",
}
];

const introduce = document.querySelector(".introduce");
const ordinalNumber = document.querySelector(".ordinalNumber");

introduce.innerHTML = "";
ordinalNumber.innerHTML = "";
for (let i = 0; i < data.length i++) {
    introduce.innerHTML += '
    <div class="wrapper">
        <span>
            <h5 class="country"></h5>
        </span>
        <span>
            <h1 class="place"></h1>
        </span>
        <span>
            <p class="describe"></p>
        </span>
        <span>
            <button class="discover-button">
            style="--idx: 3" >Discover now</button> 
        </span>
    </div>
    ';
}
