import { Component, OnInit, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LeftSidebarComponent {
  @ViewChild('sidebar')
  public sidebar: SidebarComponent;
  public type = 'Auto';
  public target = '.content';
  public position = 'Left';
  public width = '250px';
  public height = '100%';

  // onCreated(e: any): void {
    // this.sidebar.element.style.visibility = 'visible';
    // this.sidebar.show();
  // }
}
