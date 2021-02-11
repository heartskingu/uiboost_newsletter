import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ub-icon',
  templateUrl: './ub-icon.component.html',
  styleUrls: ['./ub-icon.component.scss']
})
export class UbIconComponent implements OnInit {
  @Input() alt?: string = '';
  @Input() bgColor?: string = 'none';
  @Input() src: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
