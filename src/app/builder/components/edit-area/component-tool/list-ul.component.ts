import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ul.widget-content[app-type=ul]',
  template: `<ng-content></ng-content>`
})
export class ListULComponent implements OnInit {
  private order:string="decimal";
  constructor() { }

  ngOnInit() {
  }

}
