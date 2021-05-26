import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { MytestComponent } from "./mytest/mytest.component";

@NgModule({
    declarations: [HomeComponent, MytestComponent],
    imports: [CommonModule],
    exports: [HomeComponent]
})

export class MycustomModule {}