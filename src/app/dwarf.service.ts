import { Injectable } from "@angular/core";
import { Dwarf } from "./dwarf";

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

  getDwarves() {
    return this.dwarves;
  }

  addDwarf(dwarf: Dwarf) {
    dwarf.id = 1;
    this.dwarves.push(dwarf);
  }
  constructor() {}
}
