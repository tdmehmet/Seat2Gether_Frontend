import {ElementRef, Component, Attribute, ViewChild, Input, Directive, Output, EventEmitter} from "@angular/core";
import {Country} from "../../model/country";
/**
 * Created by Developer12312 on 2/17/2017.
 */
@Component({
    selector: 'mercedesmultipleautocomplete',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    template: `
<label for="{{id}}">{{ label }}</label>
<input type="text" id="{{id}}" class="form-control" [(ngModel)]=query (keyup)="filter()" disabled="{{disabled}}">
<div class="autocomplete-pg" *ngIf="filteredList.length > 0" maxlength="10">
  <ul *ngFor="let item of filteredList" >
    <li >
      <a (click)="select(item)">{{item.name}}</a>
    </li>
  </ul>
</div>
<div *ngFor="let item of selectedItemList">
  <div class="selected" >
    <span>{{item.name}}</span>
    <a (click)="remove(item)">x</a>
  </div>
</div>
`
})

export class MultipleAutocompleteComponent {

    @Input('list')
    list;
    @Input('disabled')
    disabled;
    @Input('label')
    label: string;
    @Input('id')
    id: string;
    @Output('keyup')
    keyup: EventEmitter<any> = new EventEmitter();
    @Input('selectedItemList')
    selectedItemList = [];


    public query = '';

    public filteredList = [];
    public elementRef;


    constructor(myElement: ElementRef) {
        this.elementRef = myElement;
    }

    filter() {
        if (this.query !== '') {
            this.filteredList = [];
            if (this.list != null && this.list.length !== 0) {
                this.list.forEach(value => {
                    if (value.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1) {
                        this.filteredList.push(value);
                    }
                });
            }
        } else {
            this.filteredList = [];
        }
    }

    select(item){
        this.selectedItemList.push(item);
        this.query = '';
        this.filteredList = [];
    }

    remove(item){
        this.selectedItemList.splice(this.selectedItemList.indexOf(item), 1);
    }

    handleClick(event) {
        let clickedComponent = event.target;
        let inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
        }
    }
}
