import {Component, OnInit} from '@angular/core';
import {BudgetItem} from '../../../shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem): any {
    this.budgetItems.push(newItem);
  }

}
