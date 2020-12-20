import { Component, OnInit } from '@angular/core';
import { menumodel } from '../../core/Models/menumodel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  entries: menumodel[] = [];
  constructor(private router: Router) { }

  MenuHandler(m: menumodel)
  {
    const NavArray = [];
    NavArray.push(m.route);
    this.router.navigate(NavArray);
  }

  ngOnInit() {
    let m = new menumodel();
    m.fa_icon = 'fa fa-thermometer';
    m.title = 'Patient';
    m.route = 'Patient';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-transgender-alt';
    m.title = 'Confinement';
    m.route = 'Confinement';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-road';
    m.title = 'Neighborhood';
    m.route = 'Neighborhood';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-arrows';
    m.title = 'Contact_case';
    m.route = 'Contact_Case';
    this.entries.push(m);

    
    m = new menumodel();
    m.fa_icon = 'fa fa-user';
    m.title = 'Person';
    m.route = 'person';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-times';
    m.title = 'Death_patient';
    m.route = 'Death_patient';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-medkit';
    m.title = 'Recovery_patient';
    m.route = 'Recovery_patient';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-calendar-check-o ';
    m.title = 'Schedule';
    m.route = 'Schedule';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-check-square';
    m.title = 'Case';
    m.route = 'case';
    this.entries.push(m);
  }

}
