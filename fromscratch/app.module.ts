import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MyFirstComponent } from "./app.component";

@NgModule ({
    imports: [
        BrowserModule  
    ],
    declarations: [
        MyFirstComponent
    ],
    bootstrap: [
        MyFirstComponent
    ]
})

export class AppModule {

}