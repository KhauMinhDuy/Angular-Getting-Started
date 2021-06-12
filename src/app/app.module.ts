import { StartComponent } from './shared/star.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductListComponent} from "./products/product-list.component";
import {FormsModule} from "@angular/forms";
import { ConvertToSpace } from './shared/convert-to-space.pipe';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ConvertToSpace,
        StartComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
