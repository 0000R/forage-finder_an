import { Injectable } from "@angular/core";
import { Dwarf } from "./dwarf";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { FavDrink } from "./favDrink";
import { Occupations } from "./occupations";
import { Clans } from "../clans";
import { Weapons } from "./weapons";

@Injectable({
  providedIn: "root"
})
export class DwarfService {
  dwarves: Dwarf[] = [
    // {
    //   id: 1,
    //   name: "Ammon",
    //   height: "5 foot and 2 inches",
    //   beardColor: "yellowish",
    //   beardLength: 4
    // },
    // {
    //   id: 2,
    //   name: "Chris",
    //   height: "5 foot",
    //   beardColor: "black",
    //   beardLength: 5
    // },
    // {
    //   id: 3,
    //   name: "Megan",
    //   height: "5 foot and 7 inches",
    //   beardColor: "red",
    //   beardLength: 7
    // },
    // {
    //   id: 4,
    //   name: "Ryan",
    //   height: "5 foot and 8 inches",
    //   beardColor: "purple",
    //   beardLength: 3
    // }
  ];

  // getDwarves() {
  //   return this.dwarves;
  // }

  favoriteDrinks: string[] = [
    "Beer",
    "Mai-Tai",
    "Dragon's Blood",
    "Rob Roy",
    "Elf Earwax",
    "Apple Juice"
  ];

  occupations: string[] = [
    "Smith",
    "Forger",
    "Farmer",
    "Bladesmith",
    "Gemsmith",
    "Miner",
    "Warrior",
    "Mercenary",
    "Bootlegger",
    "Breeder",
    "Mouth Breather"
  ];

  clans: string[] = [
    "Bedazzlers",
    "Sea Seekers",
    "Microsofters",
    "Applers",
    "Pit Sniffers",
    "Grave Diggers"
  ];

  weapons: string[] = [
    "Unicorn Horn",
    "B-Axe",
    "Dagger",
    "Tickle Hands",
    "Fairy Wand",
    "Magic",
    "Butterfly",
    "Fishing Pole"
  ];

  getDrinks(): Observable<FavDrink[]> {
    // return this.favoriteDrinks;
    return this.http.get<FavDrink[]>("http://localhost:8080/favdrink");
  }

  getOccupations(): Observable<Occupations[]> {
    return this.http.get<Occupations[]>("http://localhost:8080/occupations");
  }
  getClans(): Observable<Clans[]> {
    return this.http.get<Clans[]>("http://localhost:8080/clans");
  }

  getWeapons(): Observable<Weapons[]> {
    return this.http.get<Weapons[]>("http://localhost:8080/weapons");
  }

  getDwarves(): Observable<Dwarf[]> {
    return this.http.get<Dwarf[]>(
      // "https://forge-server-an.herokuapp.com/api/dwarves"
      "http://localhost:8080/dwarf"
    );
  }
  // api sever information link above

  addDwarf(dwarf: Dwarf) {
    return this.http.post(
      // "https://forge-server-an.herokuapp.com/api/dwarves"
      "http://localhost:8080/dwarf",
      dwarf
    );
  }
  deleteDwarf(id: number) {
    return this.http.delete(
      // "https://forge-server-an.herokuapp.com/api/dwarves/" + id
      "http://localhost:8080/dwarf/" + id
    );
  }

  // /"+id above removes me from the api server (this is for the deleteDwarf)

  // addDwarf(dwarf: Dwarf) {
  //   dwarf.id = 1;
  //   this.dwarves.push(dwarf);
  // }
  constructor(private http: HttpClient) {}
}
