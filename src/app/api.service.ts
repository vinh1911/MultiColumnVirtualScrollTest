import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const baseUrl = 'http://localhost:3000/people';
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {

    }
    get_person(page: number) {
        const newUrl = `${baseUrl}?_page=${page}&_limit=32`;
        return this.http.get(newUrl);
    }
}
