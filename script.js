//  Etape 1 : mettre en place le ftech pour lié le Json
fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json")
    .then(response => response.json())
    .then(data => {
        //  Pour le header :
        //      -mettre tout d'abord le nom de l'entreprise avec "data.nomCommercial"
        let logo = document.getElementById("nameetp");
        logo.textContent = data.nomCommercial;
        //      -Faire la nav (sur html où chaque boutton amène à une partie de la page)
        //      -Faire un boutton appeller qui sert à rien

        //  Etape 3 :
        //  Pour la hero-section :
        //      -Faire un H1 qui montre le "data.phraseAccroche"
        let herotitle = document.getElementById("accroche");
        herotitle.textContent = data.phraseAccroche;
        //      -faire un Paragraphe qui montre le "texteAppelAction"
        let herodesc = document.getElementById("action");
        herodesc.textContent = `${data.texteAppelAction} !`;
        //      -Faire deux bouttons l'un pour découvrir (amène à la liste des salles)
        //       et l'autre qui est pour payer mais sert à rien
        //  Etape 4 :
        //      -faire avec le html un titre de section qui servira pour les avantages client
        //      -faire un foreach sur "avantagesClients" pour crée des cartes sur chaque avantages
        let listeservice = document.getElementById("service_container");
        i = 0;

        data.avantagesClients.forEach(avantage => {
            i++

            let card = document.createElement("div");
            listeservice.appendChild(card);
            card.className = "card";

            let titrecard = document.createElement("h3");
            titrecard.textContent = `Avantage ${i}`;
            card.appendChild(titrecard);

            let descav = document.createElement("p");
            descav.textContent = avantage;
            card.appendChild(descav);
        });

        // Etape 5 :
        let listesalle = document.getElementById("listesalle");
        //      -faire une section où l'on a chaque salle dans une carte
        data.activites.forEach(salle => {
            //      -La carte de salle doit faire apparaitre :
            let card = document.createElement("div");
            listesalle.appendChild(card);
            card.className = "card";
            //          -une image de la salle avec "data.activities.image-url"
            let imagesalle = document.createElement("img")
            imagesalle.src = salle["image-url"];
            card.appendChild(imagesalle);
            //          -Le nom de la salle avec "data.activities.nom"
            let nomsalle = document.createElement("h3")
            nomsalle.textContent = salle.nom;
            card.appendChild(nomsalle);
            //          -une description de la salle avec "data.activities.description"
            let descsalle = document.createElement("p")
            descsalle.textContent = salle.description;
            card.appendChild(descsalle);
        });

        let listeretour = document.getElementById("listeretour");
        //Etape 6 :
        //      -Faire une section retour client
        data.temoignages.forEach(retour => {
            //      -Faire un for eache sur "data.temoignages" :
            let card = document.createElement("div");
            listeretour.appendChild(card);
            card.className = "card";
            //      - pour chaque carte mettre :
            //          -la note avec "data.temoignages.note"/5
            let note = document.createElement("p")
            note.textContent = `${retour.note}/5`;
            card.appendChild(note);
            //          -le nom avec "data.temoignages.typeExperience"
            let experience = document.createElement("h3")
            experience.textContent = retour.typeExperience;
            card.appendChild(experience);
            //          -le commentaire avec "data.temoignages.commentaire"
            let com = document.createElement("p")
            com.textContent = retour.commentaire;
            card.appendChild(com);
            //          -le nom de la salle avec "data.temoignages.Prenom"
            let prenom = document.createElement("p")
            prenom.textContent = retour.prenom;
            card.appendChild(prenom);
        });

        let logofin = document.getElementById("logoend");
        logofin.textContent = data.nomCommercial;


    }).catch(error => console.error("Erreur lors du chargement des données :", error));





//

// Etape 7 :
//      -Faire le footer avec :
//          -deux container :
//              -nom de société comme dans le header et liste des réseaux sociaux
//              -liste des boutton de la nav en colonnes
//      -mettre les crédits de roit en bas de page