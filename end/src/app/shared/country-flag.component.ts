import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-country-flag',
    templateUrl:'./country-flag.component.html'
})
export class CountryFlagComponent{
    @Input() countryCode:string;
    @Output() flagClick:EventEmitter<string> = new EventEmitter<string>();

    flagClicked(){
        this.flagClick.emit(this.countryCode);
    }
}