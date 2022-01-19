import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() team:string[] = [];
  @Input() index = 0;
  currentDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
