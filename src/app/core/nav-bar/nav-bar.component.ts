
import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { ToolbarComponent, MenuItemModel, MenuAnimationSettings, SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

/**
 * Toolbar integration Menu Controller
 */

 @Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class NavBarComponent  {
  @ViewChild('sidebar')
  public sidebar: SidebarComponent;
  public type = 'Push';
  public target = '.content';
  public position = 'Left';
  public width = '200px';
  public height = '800px';

  @ViewChild('toolbar')
    public tbObj: ToolbarComponent;

    // constructor(@Inject('sourceFiles') private sourceFiles: any) {
    //     sourceFiles.files = ['./nav-bar.component.css'];
    // }

    // Menu items definition
    public data: MenuItemModel[] = [
        {
            text: 'Demo',
            items: [
                {
                    text: 'Grids',
                      items: [
                        {
                          text: 'Prospect-WakandaClient',
                          url: '/prospectWakanda'
                        },
                        {
                          text: 'Prospect-Observable Async Pipe',
                          url: '/prospectObservable'
                        },
                      ]
                },
                {
                    text: 'Forms',
                    items: [
                      {
                        text: 'Edit-DataManager',
                        url: '/prospectEditDM'
                      },
                      {
                        text: 'Edit Test',
                        url: '/prospectEdit'
                      },
                    ]
                }
            ]
        },
        {
            text: 'Edit',
            url: '/prospectEditDM',
            items: [
                {
                    text: 'Edit-DataManager',
                    url: '/prospectEditDM',
                    items: [
                        { text: 'Headphones' },
                        { text: 'Memory Cards' },
                        { text: 'Power Banks' }
                    ]
                },
                {
                    text: 'Computer',
                    items: [
                        { text: 'Pendrives' },
                        { text: 'External Hard Disks' },
                        { text: 'Monitors' }
                    ]
                }
            ]
        },
        {
            text: 'Fashion',
            items: [
                {
                    text: 'Men',
                    items: [
                        { text: 'Shirts' },
                        { text: 'Jackets' },
                        { text: 'Track Suits' }
                    ]
                },
                {
                    text: 'Women',
                    items: [
                        { text: 'Kurtas' },
                        { text: 'Salwars' },
                        { text: 'Sarees' }
                    ]
                }
            ]
        },
        {
            text: 'Home & Living',
            items: [
                {
                    text: 'Furniture',
                    items: [
                        { text: 'Beds' },
                        { text: 'Mattresses' },
                        { text: 'Dining Tables' }
                    ]
                },
                {
                    text: 'Decor',
                    items: [
                        { text: 'Clocks' },
                        { text: 'Wall Decals' },
                        { text: 'Paintings' }
                    ]
                }
            ]
        }
    ];

    public userData: object = [
        { text: 'My Profile' },
        { text: 'Orders' },
        { text: 'Rewards' },
        { text: 'Logout' }
    ];

    public animation: MenuAnimationSettings = { effect: 'None' };
    public menuTemplate: any = '#shoppingMenu';
    public ddbTemplate: any = '#userDBtn';
    public searchTemplate: any = '#searchArea';
    public toggleSidebarTemplate: any = '#hamburger';

    public onCreated(): void {
        this.tbObj.refreshOverflow();
    }
    // Toggle button click event handler
    toggleSidebar(): void {
      this.sidebar.toggle();
    }
}
