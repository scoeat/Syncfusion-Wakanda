import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { MenuModule, ToolbarModule, SidebarModule, TreeViewModule, TabModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { MultiSelectAllModule, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ProspectComponent } from './prospect/prospect.component';
import { ProspectListComponent } from './prospect/prospect-list/prospect-list.component';
import { ProspectApiComponent } from './prospect/prospect-api/prospect-api.component';
import { ProspectHttpComponent } from './prospect/prospect-http/prospect-http.component';
import { MessagesComponent } from './core/messages/messages.component';
import { ProspectObsComponent } from './prospect/prospect-obs/prospect-obs.component';
import { LeftSidebarComponent } from './core/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './core/right-sidebar/right-sidebar.component';
import { ProspectEditComponent } from './prospect/prospect-edit/prospect-edit.component';
import { ProspectEditDMComponent } from './prospect/prospect-edit-dm/prospect-edit-dm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    ProspectComponent,
    ProspectListComponent,
    ProspectApiComponent,
    ProspectHttpComponent,
    MessagesComponent,
    ProspectObsComponent,
    ProspectEditComponent,
    ProspectEditDMComponent

  ],
  imports: [
    SharedModule, FormsModule, ReactiveFormsModule, CommonModule,  BrowserModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    ListViewModule,
    DropDownListModule,
    TreeViewModule,
    TabModule,
    RichTextEditorAllModule,
    ToolbarModule,
    MenuModule,
    // CoreModule,
    SharedModule,
    CommonModule,
    CheckBoxModule,
    ToolbarModule,
    DropDownButtonModule,
    MultiSelectAllModule,
    GridModule,
    BrowserModule,
    SidebarModule,
    SplitterModule,
    TextBoxModule,
  ],

  exports: [
    ButtonModule,
    TreeViewModule,
    ListViewModule,
    DropDownListModule,
    TabModule,
    RichTextEditorAllModule
  ],

  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
