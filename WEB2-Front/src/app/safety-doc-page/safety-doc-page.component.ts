import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety-doc-page',
  templateUrl: './safety-doc-page.component.html',
  styleUrls: ['./safety-doc-page.component.css']
})
export class SafetyDocPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("headline", "Safety Documents");
  }

}
