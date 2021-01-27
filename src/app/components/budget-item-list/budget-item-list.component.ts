import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BudgetItem} from '../../../shared/models/budget-item.model';
import {MatDialog} from '@angular/material/dialog';
import {EditItemModalComponent} from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  // @ts-ignore
  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item: BudgetItem): void {
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem): void {
    // show edit modal
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      // check if result has a value
      if (result) {
        // result is updated budget item
        // replace item with updated submitted item from from
        this.budgetItems[this.budgetItems.indexOf(item)] = result;
      }
    });
  }
}
