import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];

    constructor(private heroService: HeroService) {

    }

    ngOnInit() {
        this.getHeroes();
    }

    deleteEntry(id): void {
        for (const entry in this.heroes) {

            if (this.heroes[entry].id === id) {
                // tslint:disable-next-line:radix
                this.heroes.splice(parseInt(entry), 1);
            }
        }
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }
}
