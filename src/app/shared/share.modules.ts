import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StartComponent } from "./star.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StartComponent
    ],
    exports: [
        StartComponent,
        CommonModule,
        FormsModule
    ]
})
export class ShareModule {}