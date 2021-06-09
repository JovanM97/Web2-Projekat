import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-incident-page',
  templateUrl: './add-incident-page.component.html',
  styleUrls: ['./add-incident-page.component.css']
})
export class AddIncidentPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("headline", "Incidents-New");
  }

}
