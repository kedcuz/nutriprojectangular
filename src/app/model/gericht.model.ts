export class Gericht {
    id: string;
    name: string;
    lebensmittelUndAnzahl: { [key: string]: number };
    gesamtkalorien: number;
    vitamineUndAnzahl: { [key: string]: number };
  
    constructor(
      id: string,
      name: string,
      lebensmittelUndAnzahl: { [key: string]: number },
      gesamtkalorien: number,
      vitamineUndAnzahl: { [key: string]: number }
    ) {
      this.id = id;
      this.name = name;
      this.lebensmittelUndAnzahl = lebensmittelUndAnzahl;
      this.gesamtkalorien = gesamtkalorien;
      this.vitamineUndAnzahl = vitamineUndAnzahl;
    }
  }