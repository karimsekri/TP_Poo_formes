import { IForme } from "./Forme";

export class Carre implements  IForme {
    private _longeurCote: number;
    public static NBRE_CARRE: number = 0;


    constructor(
    maLongeurCote: number
    )
    {
    this._longeurCote = maLongeurCote;
    Carre.NBRE_CARRE++;
    }


    public aire() : number{
    return this._longeurCote*this._longeurCote;
    }

    public perimetre() : number{
    return 4*this._longeurCote;
    }

    static getSommeAirePerimetres(mesCarres : IForme[]): number[] {
        let sommeAireCarre = 0;
        let sommePerimetreCarre = 0;
        mesCarres.forEach(monCarre => {
            sommeAireCarre+=monCarre.aire();
            sommePerimetreCarre+=monCarre.perimetre()
        });


        return [sommeAireCarre,sommePerimetreCarre] 
    }
    public get longeurCote(): number {
        return this._longeurCote;
    }
    public set longeurCote(value: number) {
        this._longeurCote = value;
    } 
}