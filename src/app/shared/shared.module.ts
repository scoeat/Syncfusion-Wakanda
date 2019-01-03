import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TreeViewModule, TabModule } from '@syncfusion/ej2-angular-navigations';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ListViewModule,
    DropDownListModule,
    TreeViewModule,
    TabModule,
    RichTextEditorAllModule
  ],
  exports: [
    ButtonModule,
    TreeViewModule,
    ListViewModule,
    DropDownListModule,
    TabModule,
    RichTextEditorAllModule
  ]
})
export class SharedModule { }
