import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    heroes = HEROES;

    selectedHero: Hero;

    isSelected = false;

    constructor() {

    }

    ngOnInit() {

    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    editEntry(hero: Hero, newName: string): void {
        for (const entry in this.heroes) {

            if (this.heroes[entry].id === hero.id) {
                // tslint:disable-next-line:radix
                console.log('It was saved!');
            }
        }
    }

    deleteEntry(id): void {
        for (const entry in this.heroes) {

            if (this.heroes[entry].id === id) {
                // tslint:disable-next-line:radix
                this.heroes.splice(parseInt(entry), 1);
            }
        }
    }
}
