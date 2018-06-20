"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Personne = /** @class */ (function () {
    function Personne(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    Personne.prototype.sayHello = function () {
        console.log("Bonjour " + this.prenom + " " + this.nom);
    };
    return Personne;
}());
exports.Personne = Personne;
//# sourceMappingURL=app.js.map