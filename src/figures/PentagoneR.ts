import { IForme } from "./Forme";

export class PentagoneR implements IForme {
    private _longueurCote: number;
    private _largeurCote: number;
    public static NBRE_PENTAGON: number = 0;

    constructor(maLongueurCote: number, maLargeurCote: number){
        this._longueurCote = maLongueurCote;
        this._largeurCote = maLargeurCote;
        PentagoneR.NBRE_PENTAGON++;
    }
   public aire() : number{
       return (5 / 4) * Math.pow(this._longueurCote, 2) * (1 / Math.tan(Math.PI / 5));
   }
   public perimetre() : number{
       return this._largeurCote * this._longueurCote;
   }
}