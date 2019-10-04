import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-listbutngx',
  templateUrl: './listbutngx.component.html',
  styleUrls: ['./listbutngx.component.scss']
})

export class ListbutngxComponent implements OnInit {

    people: any;
    constructor(private apiService: ApiService) {
        // this.people = Array(100)
        //     .fill(1)
        //     .map(_ => {
        //         return {
        //             name: faker.name.findName(),
        //             image: faker.image.avatar(),
        //             company: faker.company.companyName(),
        //             suffixes: faker.company.bs()
        //         };
        //     });
    }

    ngOnInit() {
        // console.log(this.people);
        this.apiService.get_person(3).subscribe((data: object) => { 
                this.people = data;
        });
    }
}
