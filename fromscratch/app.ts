

export class Personne {

    private nom:string;
    private prenom:string;

    constructor(nom:string, prenom:string) {
        this.nom=nom;
        this.prenom=prenom
    }

    public sayHello() {
        console.log("Bonjour " + this.prenom + " " + this.nom)
    }

}