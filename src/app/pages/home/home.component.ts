import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit { 
  public constructor(private titleService: Title) {
    this.titleService.setTitle("Personal website of Javier Monzon, Informatics Engineer");
  }

  ngOnInit(): void {
  }

}
