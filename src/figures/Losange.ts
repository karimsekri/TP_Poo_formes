import { IForme } from "./Forme";

export class Losange implements IForme {
    private _petiteDiag: number;
    private _grandeDiag: number;
    public static NBRE_LOSANGE: number = 0;

    constructor(petiteDiag: number, grandeDiag: number){
        this._petiteDiag = petiteDiag;
        this._grandeDiag = grandeDiag;
        Losange.NBRE_LOSANGE++;
    }
   public aire() : number{
       return (this._petiteDiag*this._grandeDiag)/2;
   }
   
   public perimetre() : number{
       return (this._petiteDiag + this._grandeDiag)*2;
   }
}