import { Injectable } from "@angular/core";
import { Dwarf } from "./dwarf";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";

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

  getDwarves(): Observable<Dwarf[]> {
    return this.http.get<Dwarf[]>(
      "https://forge-server-an.herokuapp.com/api/dwarves"
    );
  }
  // api sever information link above

  addDwarf(dwarf: Dwarf) {
    return this.http.post(
      "https://forge-server-an.herokuapp.com/api/dwarves",
      dwarf
    );
  }
  deleteDwarf(id: string) {
    return this.http.delete(
      "https://forge-server-an.herokuapp.com/api/dwarves/" + id
    );
  }

  // /"+id above removes me from the api server (this is for the deleteDwarf)

  // addDwarf(dwarf: Dwarf) {
  //   dwarf.id = 1;
  //   this.dwarves.push(dwarf);
  // }
  constructor(private http: HttpClient) {}
}
