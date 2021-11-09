import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutri-score',
  templateUrl: './nutri-score.component.html',
  styleUrls: ['./nutri-score.component.css'],
})
export class NutriScoreComponent implements OnInit {
  @Input() grade: string = 'A';

  constructor() {}

  ngOnInit(): void {}

  getDescription(): string {
    switch (this.grade.toUpperCase()) {
      case 'B':
        return 'Processed culinary ingredients';
      case 'C':
        return 'Processed foods';
      case 'D':
        return 'Ultra-processed food and drink products';
      case 'E':
        return 'Ultra-processed food and drink products';
    }
    return 'Unprocessed or minimally processed foods';
  }

  getClass(): string {
    switch (this.grade.toUpperCase()) {
      case 'B':
        return 'bg-light-yellow';
      case 'C':
        return 'bg-warning';
      case 'D':
        return 'bg-orange ';
      case 'E':
        return 'bg-danger ';
    }
    return 'bg-success';
  }
}
