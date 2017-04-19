import {
  MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule, MdSelectModule,
  MdInputModule
} from '@angular/material';
import {NgModule} from "@angular/core";

@NgModule({
  imports: [ MdButtonModule, MdToolbarModule, MdCardModule, MdSelectModule, MdInputModule ],
  exports: [ MdButtonModule, MdToolbarModule, MdCardModule, MdSelectModule, MdInputModule ],
})
export class MaterialModule { }
