import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductListComponent} from "./products/product-list.component";
import {FormsModule} from "@angular/forms";
import { ConvertToSpace } from './shared/convert-to-space.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ConvertToSpace
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}