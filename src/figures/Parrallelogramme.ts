import { IForme } from "./Forme";

export class Parrallelogramme implements IForme {
    private _hauteur: number;
    private _cote: number;
    public static NBRE_PARRALLELOGRAMME: number = 0;

    constructor(hauteur: number, cote: number){
        this._hauteur = hauteur;
        this._cote = cote;
        Parrallelogramme.NBRE_PARRALLELOGRAMME++;
    }
   public aire() : number{
       return this._cote*this._hauteur
   }
   public perimetre() : number{
       return this._hauteur*this._cote*2;
   }
}