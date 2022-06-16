import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listProductFilter: IProduct[] = [];
  products: IProduct[] = [];

  private _listFilter: string = '';

  constructor(private productService: ProductService) {}

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  onRatingClicked(event: string): void {
    this.pageTitle = 'Product List ' + event;
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.listProductFilter = this.products;
  }

  ngOnChanges(): void {
    console.log('onChanges');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(v: string) {
    this._listFilter = v;
    console.log('In Setter: ' + v);
    this.listProductFilter = this.performFilter(v);
  }
}
