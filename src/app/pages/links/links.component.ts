import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.sass']
})
export class LinksComponent implements OnInit {

  public constructor(private titleService: Title) {
    this.titleService.setTitle("Links | Personal website of Javier Monzon");
  }
  ngOnInit(): void {
  }

}
