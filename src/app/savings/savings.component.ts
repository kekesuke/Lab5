import { Component, OnInit } from '@angular/core';
import { InterestService } from '../services/interest.service'

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  constructor(private interest: InterestService) { }


  ngOnInit(): void { 
  }

  Total: number;
  years: number;
  
  calculateinterest(): void {
    this.Total = this.interest.calculateinterest(this.years);
    }
}
