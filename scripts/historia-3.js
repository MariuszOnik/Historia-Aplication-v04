

let Historia3SliderImages = [ 
    "./img/Historia/3/OgólnywidokCzęstochowy.jpg",
    "./img/Historia/3/Herb Częstochowy.jpg"

];

let Historia3SliderTitlesPL = [
    "Ogólny widok Częstochowy od strony Złotej Góry, rys. Władysław Dmochowski, ilustracja z albumu Widoki Częstochowy i Jasnej Góry z opisem, Warszawa 1876W zbiorach Muzeum Częstochowskiego",
    "Herb Częstochowy według gotyckiej pieczęci odciśniętej na dokumencie z 1564 r."

]

let Historia3SliderTitlesEN = [
    "brark tłumaczenia",
    "brak tłumaczenia", 
]


var Historia3SliderObject = new Slider("historia-3", "slider-historia-3", Historia3SliderImages, Historia3SliderTitlesPL, Historia3SliderTitlesEN);
Seting.sliders.push(Historia3SliderObject); 
Historia3SliderObject.init()
