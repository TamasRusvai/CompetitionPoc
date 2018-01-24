import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
//import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'player',
    styleUrls: ['player.css'],
    templateUrl: './player.component.html'
})
/** player component*/
export class PlayerComponent {
    //displayedColumns = ['position', 'name', 'weight', 'symbol'];
    //dataSource = new MatTableDataSource();

    //constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    //    http.get(baseUrl + 'api/Players').subscribe(result => {
    //        this.dataSource.data = result.json() as Player[];
    //    }, error => console.error(error));
    //}

    //applyFilter(filterValue: string) {
    //    filterValue = filterValue.trim(); // Remove whitespace
    //    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    //    this.dataSource.filter = filterValue;
    //}

}

interface Player {
    id: string;
    name: string;
}
