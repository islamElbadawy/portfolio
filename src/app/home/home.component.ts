import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titlepage:Title, private router: Router) { }

  ngOnInit() {
  }

  setpageTitle( title:string) {
    this.titlepage.setTitle(title);

  }

}
