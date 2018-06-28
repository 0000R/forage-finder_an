import { Component, OnInit } from "@angular/core";
import { Dwarf } from "../dwarf";
import { DwarfService } from "../dwarf.service";
import { Router } from "@angular/router";
import { FavDrink } from "../favDrink";
import { Occupations } from "../occupations";
import { Clans } from "../../clans";
import { Weapons } from "../weapons";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  currentDwarf: Dwarf = new Dwarf();

  favoriteDrinks: FavDrink[] = [];

  occupations: Occupations[] = [];

  clans: Clans[] = [];

  weapons: Weapons[] = [];

  submitDwarf() {
    if (
      this.currentDwarf.name &&
      this.currentDwarf.height &&
      this.currentDwarf.beardColor &&
      this.currentDwarf.favoriteDrink &&
      this.currentDwarf.occupation &&
      this.currentDwarf.clan
    ) {
      this.dwarfService
        .addDwarf(this.currentDwarf)
        .subscribe(() => this.router.navigate(["/spark"]));
    }
  }
  // the .subscribe makes able to post in spark from profile
  constructor(private dwarfService: DwarfService, private router: Router) {}

  ngOnInit() {
    // this.favoriteDrinks = this.dwarfService.getDrinks();
    this.dwarfService.getDrinks().subscribe(data => {
      this.favoriteDrinks = data;
    });

    this.dwarfService.getOccupations().subscribe(data => {
      this.occupations = data;
    });

    this.dwarfService.getClans().subscribe(data => {
      this.clans = data;
    });

    this.dwarfService.getWeapons().subscribe(data => {
      this.weapons = data;
    });
  }
}
