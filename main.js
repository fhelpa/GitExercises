var tl = new TimelineLite({delay: '0.3', clearProps: 'all'})
    .from('#section1 i', 0.9, {autoAlpha: 0, y: 15, ease: Power2.easeOut}, '0.06','+=0')
    .staggerFrom('#section1 h1', 0.9, {autoAlpha: 0, y: 35, ease: Power2.easeOut},'0.06', '-=0.6')
    .from('#section1 p', 0.9, {autoAlpha: 0, y: 15, ease: Power2.easeOut}, '0.08','-=0.8')
    .staggerFrom('#section2 h1', 0.9, {autoAlpha: 0, y: 45, ease: Power2.easeOut},'0.06', '-=0.6')
    .from('#section3 h1', 0.9, {autoAlpha: 0, ease: Power2.easeOut}, '-=0.6')


// cambiare lo sfondo del sito in base all'ora

    var ore = new Date().getHours();
    var colori = new Array();
    var testi = new Array();

    // modifica qui
    modificaColori(22,23,"#CEEAF7","#FFF"); // dalle 22 alle 23
    modificaColori(0,5,"#DCB8CB","#FFF"); // dalle 00 alle 05
    modificaColori(6,8,"#E5D352","#FFF"); // dalle 06 alle 08
    modificaColori(9,12,"#AC3931","#FFF"); // dalle 09 alle 12
    modificaColori(13,17,"#482C3D","#FFF"); // dalle 13 alle 17
    modificaColori(18,21,"#DDA3B2","#FFF"); // dalle 18 alle 21
    //fine modifica

    function modificaColori(oraInizio, oraFine, colore, testo){
    oraInizio = Math.max(oraInizio,0);
    oraInizio = Math.min(oraInizio,23);
    oraFine = Math.max(oraFine ,0);
    oraFine = Math.min(oraFine ,23);

    if(oraInizio>oraFine)
    oraInizio = oraFine;

    for(var i = oraInizio;i<=oraFine;i++)
    colori[i] = colore;
    testi[i] = testo;
    }

    document.write("<style> #section1{background-color: "+colori[ore]+"}  #section1 h1,#section1 p{color: "+testi[ore]+"}  </style>");
