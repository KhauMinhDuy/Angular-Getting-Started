import {Component, OnDestroy, OnInit} from "@angular/core";
import {IProduct} from "./product";
import { ProductService } from "./product.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy{

    constructor(private productService: ProductService) {}

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = '';

    subscription!: Subscription;

    private _listFilter: string = '';

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filterProducts =  this.performFilter(value);
    }

    filterProducts: IProduct[] = [];
    products: IProduct[] = [];

    performFilter(value: string): IProduct[] {
        value = value.toLowerCase();
        return this.products.filter((product: IProduct) => {
            return product.productName.toLowerCase().includes(value);
        });
    }

    onRatingClick(event: string):void {
        this.pageTitle = "Product List " + event;
    }

    ngOnInit(): void {
       this.subscription = this.productService.getProducts().subscribe({
           next: products => {
               this.products = products;
               this.filterProducts = products;
           },
           error: err => this.errorMessage = err
       });
    }

    toggleImage():void {
        this.showImage = !this.showImage;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
