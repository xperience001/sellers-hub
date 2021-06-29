import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  menu: any[] = []

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {

    this.menu = [

      {
        name: 'Dashboard',
        icon: 'home',
        path: '/dashboard',
      },
      {
        name: 'Add Product',
        icon: 'product',
        path: '/map',
      },
      {
        name: 'Orders',
        icon: 'order',
        path: '/map',
      },
      {
        name: 'Messages',
        icon: 'message',
        path: '/map',
      },
      {
        name: 'Manage Products',
        icon: 'products',
        path: '/map',
      },
      {
        name: 'Coupon',
        icon: 'coupon',
        path: '/map',
      },
      {
        name: 'Advertise',
        icon: 'advertise',
        path: '/map',
      },
      {
        name: 'Settings',
        icon: 'settings',
        path: '/map',
      },
    ]
  }

  logOut(){
    this.router.navigate(['login']);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
