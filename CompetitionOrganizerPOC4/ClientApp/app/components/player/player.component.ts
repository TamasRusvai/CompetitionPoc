import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'player',
    templateUrl: './player.component.html'
})
/** player component*/
export class PlayerComponent {

    public players: Player[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Players').subscribe(result => {
            this.players = result.json() as Player[];
        }, error => console.error(error));
    }

}

interface Player {
    id: string;
    name: string;
}
