import {Carre} from './figures/Carre';
import { Cercle } from './figures/Cercle';
import { IForme } from './figures/Forme';
import { Losange } from './figures/Losange';
import { Parrallelogramme } from './figures/Parrallelogramme';
import { PentagoneR } from './figures/PentagoneR';
import { Quadrilatere } from './figures/Quadrilatere';
import { Rectangle } from './figures/Rectangle';
import { Triangle } from './figures/Triangle';

//Polymorphisme
let monCarre1 : IForme
monCarre1 = new Carre(5);
console.log(monCarre1.aire());
console.log(monCarre1.perimetre());

let monCarre2 : IForme
monCarre2 = new Carre(10);
console.log(monCarre2.aire());
console.log(monCarre2.perimetre());



let monRectangle : IForme
monRectangle = new Rectangle(10, 20);
console.log(monRectangle.aire());
console.log(monRectangle.perimetre());

console.log("Nombre de carre : " + Carre.NBRE_CARRE);
console.log("Nombre de rectangle : " + Rectangle.NBRE_RECTANGLE);
console.log("Nombre de cercle : " + Cercle.NBRE_CERCLE);
console.log("Nombre de triangle : " + Triangle.NBRE_TRIANGLE);
console.log("Nombre de losange : " + Losange.NBRE_LOSANGE);
console.log("Nombre de parrallelogramme : " + Parrallelogramme.NBRE_PARRALLELOGRAMME);
console.log("Nombre de pentagoneR : " + PentagoneR.NBRE_PENTAGON);
console.log("Nombre de quadrilatere : " + Quadrilatere.NBRE_QUADRILATERE);


let resultTable = Carre.getSommeAirePerimetres([monCarre1, monCarre2]);
console.log(resultTable);





