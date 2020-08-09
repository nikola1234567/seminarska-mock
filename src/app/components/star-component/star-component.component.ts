import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.css']
})
export class StarComponentComponent implements OnInit {

  @Input() rating: number;
  starWidth: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() : void{
    this.starWidth = this.rating * 75 / 5;
  }

}
