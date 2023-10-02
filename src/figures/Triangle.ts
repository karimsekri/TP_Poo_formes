import { IForme } from "./Forme";

export class Triangle implements IForme {
   private _longeurCote: number;
   public static NBRE_TRIANGLE: number = 0;

   constructor(
       maLongeurCote: number
   ){
       this._longeurCote = maLongeurCote;
       Triangle.NBRE_TRIANGLE++;
   }
   public perimetre() : number{
       return this._longeurCote*3;
   }
   public aire() : number{
       return Math.sqrt(3)*this._longeurCote*this._longeurCote/2;
   }
}