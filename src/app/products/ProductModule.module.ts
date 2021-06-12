import { NgModule } from '@angular/core';
import { ConvertToSpace } from 'src/app/shared/convert-to-space.pipe';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDettailGuard } from './product-detail/ProductDetailGuard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShareModule } from '../shared/share.modules';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            {
                path: 'products/:id',
                canActivate: [ProductDettailGuard],
                component: ProductDetailComponent
            }
        ]),
        ShareModule
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ConvertToSpace
    ]
})
export class ProductModuleModule { }
