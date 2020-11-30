

let Historia3SliderImages = [ 
    
    "./img/Historia/3/Herb Częstochowy.jpg",
    "./img/Rynek/Rynek/2. Bodenehr.jpg",
    "./img/Historia/3/OgólnywidokCzęstochowy.jpg",

];

let Historia3SliderTitlesPL = [
   
    "Herb Częstochowy według gotyckiej pieczęci odciśniętej na dokumencie z 1564 r.",
    "Oblężenie Jasnej Góry przez Szwedów w 1655 r., sztych według miedziorytu Gabriela Bodenehra Starszego W zbiorach Muzeum Częstochowskiego",
    "Ogólny widok Częstochowy od strony Złotej Góry, rys. Władysław Dmochowski, ilustracja z albumu Widoki Częstochowy i Jasnej Góry z opisem, Warszawa 1876W zbiorach Muzeum Częstochowskiego",

]

let Historia3SliderTitlesEN = [
    "brark tłumaczenia",
    "brak tłumaczenia", 
    "brak tłumaczenia"
]


var Historia3SliderObject = new Slider("historia-3", "slider-historia-3", Historia3SliderImages, Historia3SliderTitlesPL, Historia3SliderTitlesEN);
Seting.sliders.push(Historia3SliderObject); 
Historia3SliderObject.init()
