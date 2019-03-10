import { Component, OnInit, ViewChild, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ModalComponent } from "ng2-bs3-modal/ng2-bs3-modal";

const customValueProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => S2gSelectComponent),
  multi: true
};

@Component({
  selector: "app-s2gselect",
  templateUrl: "./s2gselect.component.html",
  styleUrls: ["./s2gselect.component.css"],
  providers: [customValueProvider]
})
export class S2gSelectComponent implements OnInit, ControlValueAccessor {
  @ViewChild("selectmodal") selectmodal: ModalComponent;

  @Input() placeholder: String = "Lütfen seçim yapınız...";

  @Input() gridData: any[] = [];

  settings = {
    actions: {
      columnTitle: "İşlemler",
      custom: [
        {
          name: "selectCustom",
          title: "Seç"
        }
      ],
      add: false,
      edit: false,
      delete: false
    },
    pager: { perPage: 5 },
    columns: {
      definition: {
        title: "Kumaş Açıklama"
      },
      seatFabricNo: {
        title: "Kumaş Numarası"
      }
    }
  };

  constructor() {}

  ngOnInit() {}

  _value = "";

  propagateChange: any = () => {};

  writeValue(value: any) {
    if (value) {
      this._value = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: () => void): void {}

  onChange(event) {
    this._value = event.target.value;
    this.propagateChange(event.target.value);
  }

  closeModal() {
    this.selectmodal.close();
  }
  selectItem(event) {
    this.propagateChange(event.data.seatFabricNo);
    this.writeValue(event.data.seatFabricNo);
    this.closeModal();
  }
  clearSelected() {
    this.propagateChange(null);
    this._value = "";
  }
}
