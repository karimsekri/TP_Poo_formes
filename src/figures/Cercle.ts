import { IForme } from "./Forme";

export class Cercle implements IForme {
   private _rayon : number;
   public static NBRE_CERCLE: number = 0;

   constructor(maRayon : number){
       this._rayon = maRayon;
       Cercle.NBRE_CERCLE++;
   }

   public perimetre() : number{
       return 2*Math.PI*this._rayon
   }
    public aire() : number{
        return Math.PI*this._rayon*this._rayon
   }
}