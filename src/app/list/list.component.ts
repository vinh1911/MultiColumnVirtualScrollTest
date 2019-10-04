import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
    people: any;
    constructor() {
        this.people = Array(100)
            .fill(1)
            .map(_ => {
                return {
                    name: faker.name.findName(),
                    image: faker.image.avatar(),
                    company: faker.company.companyName(),
                    suffixes: faker.company.bs()
                };
            });
    }

    ngOnInit() {
        console.log(this.people);
    }

}
