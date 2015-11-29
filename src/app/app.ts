import {Component, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import { Hero } from './hero';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})

class AppComponent {
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes = HEROES;
    onSelect(hero: Hero) { this.selectedHero = hero; }
    getSelectedClass(hero: Hero) {
        return { 'selected': hero === this.selectedHero };
    }
}

bootstrap(AppComponent);

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];