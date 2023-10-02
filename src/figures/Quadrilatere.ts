import { IForme } from "./Forme";

export class Quadrilatere implements IForme {
    private _cote1: number;
    private _cote2: number;
    private _cote3: number;
    private _cote4: number;
    public static NBRE_QUADRILATERE: number = 0;

    constructor(cote1: number, cote2: number, cote3: number, cote4: number){
        this._cote1 = cote1;
        this._cote2 = cote2;
        this._cote3 = cote3;
        this._cote4 = cote4;
        Quadrilatere.NBRE_QUADRILATERE++;

    }

   public aire() : number{
       return this._cote1 * this._cote2 * this._cote3 * this._cote4;
   }
   public perimetre() : number{
       return this._cote1 + this._cote2 + this._cote3 + this._cote4;
   }
}