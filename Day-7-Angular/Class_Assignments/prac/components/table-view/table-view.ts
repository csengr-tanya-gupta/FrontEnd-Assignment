import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table-view.html',
  styleUrl: './table-view.css',
})
export class TableView {
  displayedColumns = ['sno', 'name', 'age', 'qualification'];

  @Input() students: any[] = [
    { sno: 1, name: 'Alice', age: 20, qualification: 'B.Sc' },
    { sno: 2, name: 'Bob', age: 22, qualification: 'M.Sc' },
    { sno: 3, name: 'Charlie', age: 21, qualification: 'B.A' },
  ];
}
