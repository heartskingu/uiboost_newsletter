import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ub-button',
  templateUrl: './ub-button.component.html',
  styleUrls: ['./ub-button.component.scss']
})
export class UbButtonComponent implements OnInit {
  @Input() value: string = "Button";

  constructor() { }

  ngOnInit(): void {
  }

}
