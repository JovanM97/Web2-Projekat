import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-request-page',
  templateUrl: './work-request-page.component.html',
  styleUrls: ['./work-request-page.component.css']
})
export class WorkRequestPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("headline", "Work requests");
  }

}
