import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-score',
  templateUrl: './nova-score.component.html',
  styleUrls: ['./nova-score.component.css'],
})
export class NovaScoreComponent implements OnInit {

  @Input() score: number = 0;

  constructor() {}

  ngOnInit(): void {}

  getDescription(): string {
    switch (this.score) {
      case 1:
        return 'Processed culinary ingredients';
      case 2:
        return 'Processed foods';
      case 3:
        return 'Ultra-processed food and drink products';
    }
    return 'Unprocessed or minimally processed foods';
  }

  getClass(): string {
    switch (this.score) {
      case 1:
        return 'bg-warning';
      case 2:
        return 'bg-orange';
      case 3:
        return 'bg-danger ';
    }
    return 'bg-success';
  }
  
}
