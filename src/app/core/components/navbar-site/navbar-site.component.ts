import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-site',
  templateUrl: './navbar-site.component.html',
  styleUrls: ['./navbar-site.component.scss']
})
export class NavbarSiteComponent implements OnInit {

  route: string = '';

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.setActiveRoute()
  }

  public setActiveRoute() {
    const url = window.location.pathname;
    const last = url.split("/").pop();

    if (last) this.route = last;
  }

  public getActive(route: string) {
    if (route == this.route) return "active"
    return ""
  }

  public navigate(route: string) {
    this.router.navigate([route])
    this.route = route.replace("/", "")
  }
}
