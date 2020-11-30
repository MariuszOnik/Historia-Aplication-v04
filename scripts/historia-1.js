
let Historia1SliderImages = [ 
    "./img/Historia/1/Kazimierz Wielki-historia-1.jpg",
    "./img/Historia/1/Dokument  Kaziemierza Wielkiego.jpg"
];

let Historia1SliderTitlesPL = [
    "Figura króla Kazimierza Wielkiego z jego nagrobka, rys. Aleksander Lesser. Muzeum Narodowe w Warszawie.",
    "Dokument króla Kazimierza Wielkiego z 24 sierpnia 1356 r. przyznający przywilej na lokację dwóch wsi, „jednej zwanej Częstochową i drugiej nad rzeką w dąbrowie tegoż dziedzictwa Częstochowy”. Archiwum Jasnogórskie."
]
let Historia1SliderTitlesEN = [
   "Casimir the Great",
   "A document by Casimir the Great",
]




var Historia1SliderObject = new Slider("historia-1", "slider-historia-1", Historia1SliderImages, Historia1SliderTitlesPL, Historia1SliderTitlesEN);
Seting.sliders.push(Historia1SliderObject); 
Historia1SliderObject.init()




