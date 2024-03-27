const buttonsEls = document.querySelectorAll(".map-point") // felepitesz egy tombot a weboldalad oldalan talalhato menupontokbol
//const buttonsEls = document.getElementsByClassName("map-point")

// ha hiszed ha nem, ez az egesz fajl lenyegi pontja. ezert szuletett meg ez az egesz.
buttonsEls.forEach(buttonsEl => { // vegig zongorazol a menupontokon.
    buttonsEl.addEventListener('click', event => { // ha valaki rakattintott valamelyik elemre
        makeHidden() // akkor eltunteted az osszes bejegyzest
        //stopAudio() // leallitod az eppen jatszott zenet/szoveget/akarmi
        makeVisible(buttonsEl.dataset.id) // lathatova teszed azt amire rakattintott mert az van a valtozoban.
    })
})


const makeVisible = (variable) => {
    const wellcome = document.querySelector(".wellcome"), // a fokepernyo szovege
        mapImage = document.getElementById("terkep") // az IMG elem amibe a kepet valtoztatod
    if (variable) { //ha letezik a dataset.id es nem ures
        // ez azert van itt hogy nehezebb legyen es mert lusta vagyok plusz a nyelvtani izek miatt :)
        const contentBlock = document.querySelector("." + variable) // a kivalasztott bejegyzes
            // , audioFile = document.querySelector("." + variable + "Audio") // ez meg az audio file

        if (contentBlock) { // ha letezik a data-id osztalyu html elem
            contentBlock.classList.remove("d-none") // eltavolitod a d-none (display none) attributumot
            wellcome.classList.add("d-none") // eltunteted a fooldal szoveget
            mapImage.src = "map/" + variable + ".png" // lecsereled a kepet az aktualisra 
            //audioFile.currentTime = 0 // az audiot ujra inditod
            //audioFile.play() // az audiot lejatszod
        } else { // ha nem letezik az osztaly
            if (variable !== 'fo') {
                // ezt azert raktam ide, hogy figyelmeztessen hogy mi a baj.
                // az (variable !== 'fo') azt vizsgalja hogy a balatonboglar klimasetanyra kattintottal vagy sem.
                window.alert("ezt meg nem csinaltad meg, vagy nincs olyan DIV-ed aminek a class-ja: " + variable + "! \n data-id=\"" + variable + "\" biztos hogy jo lett elnevezve?") 
            }
            wellcome.classList.remove("d-none") // a fooldal szovege lathato
            mapImage.src = "map/new_map.png" // a terkep az eredeti ismet 
        }
    } else { //ha anyu meg nem fejezte be az oldalt de turelmetlenul kattint
        window.alert("ezt meg nem csinaltad meg")
        wellcome.classList.remove("d-none") // a fooldal szovege lathato
        mapImage.src = "map/new_map.png" // a terkep az eredeti ismet
    }
}
// ez a fuggveny tunteti el az epp nem kivalasztott bejegyzest
const makeHidden = () => {
    const contents = document.querySelectorAll(".content") //osszegyujtod az osszes .content osztalyu html elemet
    contents.forEach(content => { // vegig zongorazod a frissen felepitett tombodet
        content.classList.add("d-none") // hozza adod a .d-none (display none) osztalyt az aktualis tomb elemhez
    })
}


// ez azert kell ha fut az audio, barmelyik akkor leallitod
const stopAudio = () => {
    const audioEls = document.querySelectorAll(".blokkAudio") // osszegyujtod a .blokkAudio osztalyu html elemeket
    audioEls.forEach(audio => { // vegig zongorazol a tombodon
        audio.pause() //leallitod az audio tomb elemet.
    })
}