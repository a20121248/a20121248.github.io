import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reading-log',
  templateUrl: './reading-log.component.html',
  styleUrls: ['./reading-log.component.sass']
})
export class ReadingLogComponent implements OnInit {
  public constructor(private titleService: Title) {
    this.titleService.setTitle("Reading Log | Personal website of Javier Monzon");
  }

  ngOnInit(): void {
  }

}
