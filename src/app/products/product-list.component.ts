import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    private _listFilter: string = '';

    filterProducts: IProduct[] = [];
    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2021",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
        }
        
    ];

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
    

    ngOnInit(): void {
       
    }

    toggleImage():void {
        this.showImage = !this.showImage;
    }
}
