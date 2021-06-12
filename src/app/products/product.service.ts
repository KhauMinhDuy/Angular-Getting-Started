import { catchError, tap } from 'rxjs/operators';
import { IProduct } from './product';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    private productURL = "api/products/products.json";

    constructor(private http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productURL);
    }

}
