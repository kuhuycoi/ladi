import { Component, OnInit } from '@angular/core';
import { ComponentActionService } from './services/component-action.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor(private cService: ComponentActionService) { }

  ngOnInit() {
  }

}
