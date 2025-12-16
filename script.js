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
        herodesc.textContent = data.texteAppelAction;
        //      -Faire deux bouttons l'un pour découvrir (amène à la liste des salles)
        //       et l'autre qui est pour payer mais sert à rien
        //  Etape 4 :
        //      -faire avec le html un titre de section qui servira pour les avantages client
        //      -faire un foreach sur "avantagesClients" pour crée des cartes sur chaque avantages
        let listeservice = document.getElementById("service_container");

        data.avantagesClients.forEach(avantage => {
            let card = document.createElement("div");
            listeservice.appendChild(card);

            let descav = document.createElement("p");
            descav.textContent = avantage;
            card.appendChild(descav);
        });

        // Etape 5 :
        //      -faire une section où l'on a chaque salle dans une carte
        //      -La carte de salle doit faire apparaitre :
        //          -une image de la salle avec "data.activities.image-url"
        //          -Le nom de la salle avec "data.activities.nom"
        //          -une description de la salle avec "data.activities.description"


    }).catch(error => console.error("Erreur lors du chargement des données :", error));






// Etape 6 :
//      -Faire une section retour client
//      -Faire un for eache sur "data.temoignages" :
//      - pour chaque carte mettre :
//          -la note avec "data.temoignages.note"/5
//          -le nom avec "data.temoignages.Prenom"
//          -le nom de la salle avec "data.temoignages.typeExperience"
//          -le commentaire avec "data.temoignages.commentaire"

// Etape 7 :
//      -Faire le footer avec :
//          -deux container :
//              -nom de société comme dans le header et liste des réseaux sociaux
//              -liste des boutton de la nav en colonnes
//      -mettre les crédits de roit en bas de page