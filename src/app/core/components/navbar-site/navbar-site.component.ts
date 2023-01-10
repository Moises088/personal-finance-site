import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-site',
  templateUrl: './navbar-site.component.html',
  styleUrls: ['./navbar-site.component.scss']
})
export class NavbarSiteComponent implements OnInit {

  route: string = '';

  ngOnInit(): void {
    const url = window.location.pathname;
    this.route = url;
  }

  public getActive(route: string) {
    if (route == this.route) return "active"
    return ""
  }
}
