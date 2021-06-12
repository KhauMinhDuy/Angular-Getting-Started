import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})
export class ProductListComponent implements OnInit{

    constructor(private productService: ProductService) {}

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    private _listFilter: string = '';

    filterProducts: IProduct[] = [];
    products: IProduct[] = [];

    public get getListFilter() : string {
        return this._listFilter;
    }
    
    public set setListFilter(listFilter : string) {
        this._listFilter = listFilter;
        this.filterProducts = this.performFilter(listFilter);
    }

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
       this.products = this.productService.getProducts();
       this.filterProducts = this.products;
    }

    toggleImage():void {
        this.showImage = !this.showImage;
    }
}
