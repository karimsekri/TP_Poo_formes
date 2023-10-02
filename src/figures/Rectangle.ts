import { IForme } from "./Forme";

export class Rectangle implements IForme {
    private _longeurCote: number;
    private _largeurCote: number;
    public static NBRE_RECTANGLE: number = 0;

    constructor(
        maLongeurCote: number,
        maLargeurCote: number
    ){
        this._longeurCote = maLongeurCote;
        this._largeurCote = maLargeurCote;
        Rectangle.NBRE_RECTANGLE++;
    }

    public perimetre() : number{
        return 2*this._longeurCote + 2*this._largeurCote
    }
   public aire() : number{
       return this._largeurCote*this._longeurCote
   }
}