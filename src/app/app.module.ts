import { ProductDetailComponent } from './products/product-detail/product-detail/product-detail.component';
import { StartComponent } from './shared/star.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { FormsModule } from "@angular/forms";
import { ConvertToSpace } from './shared/convert-to-space.pipe';
import { HttpClientModule } from "@angular/common/http";
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ConvertToSpace,
        StartComponent,
        ProductDetailComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductListComponent},
            {path: 'product/:id', component: ProductDetailComponent},
            {path: 'welcome', component: WelcomeComponent},
            {path: '', redirectTo: 'welcome', pathMatch: 'full'},
            {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
        ])
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
