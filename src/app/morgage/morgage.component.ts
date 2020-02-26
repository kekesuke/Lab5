import { Component, OnInit } from '@angular/core';
import { InterestService } from '../services/interest.service'

@Component({
  selector: 'app-morgage',
  templateUrl: './morgage.component.html',
  styleUrls: ['./morgage.component.css']
})
export class MorgageComponent implements OnInit {

  constructor(private interest: InterestService) { }

  ngOnInit(): void {
  }

  Total: number;
  years: number;
  
  calculateinterest(): void {
    this.Total = this.interest.calculateinterest(this.years);
    }
}
