import { Component, OnInit } from '@angular/core';

@Component({ // décorateur qui sert à utiliser un component dans une appli angular
  selector: 'app-face-snap', // sélecteur = balise HTML personnalisée utilisée pour insérer le component dans l'appli
  standalone: true, // pour dire que ce component n'a pas besoin de faire partie d'un module
  imports: [], // c'est ici qu'on importe les dépendances du component
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
// ajouter des propriétés
  title!: string;
  description!: string;
  createdDate!:Date;
  snaps!:number;
  imageUrl!:string;
  snapButtonText!:string;
  userHasSnapped!:boolean;

  // Le  "!" sert à faire une "promesse" à TypeScript que des valeurs leur seront attribuées. Sinon il y a une erreur car on créé des propriétés sans les initialiser

  ngOnInit(): void { // méthode sur les components. S'éxécute une fois sur chaque instance au moment de la création de cette instance.
    // C'est ici qu'on indique les données (on les mets en dur pour l'instant)
    this.title = "Archibald";
    this.description= "Mon meilleur ami depuis toujours";
    this.createdDate = new Date(); // Fausse date. Créée au moment de la création du component
    this.snaps=0;
    this.snapButtonText="Oh snap!";
    this.userHasSnapped=false;
    this.imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/CGI_logo.svg/1280px-CGI_logo.svg.png"
  }

  onSnap() : void{ // en mettant "on" devant une méthode = méthode qui répond à un évènement
    if (this.userHasSnapped){
      this.snaps--;
      this.snapButtonText = "Oh snap!";
      this.userHasSnapped=false
    }else{
      this.snaps++;
      this.snapButtonText= "Oops, unSnap!"
      this.userHasSnapped=true

    }
    
  }


}
