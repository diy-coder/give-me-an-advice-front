import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent
  implements OnInit, AfterContentInit, AfterViewInit, OnChanges
{
  @ViewChild(MatPaginator, { static: true }) paginator:
    | MatPaginator
    | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  @Input() headerTitle = 'Listagem Generica.';
  @Input() displayedColumns: any[] = [];
  @Input() pageSizeOptions = [10, 20, 30, 50];
  @Input() dados;
  @Input() showHeader = true;
  @Input() showAddButtom = false;
  @Input() showFilter = true;
  @Input() marginTop = true;
  @Input() showSelect = false;
  @Input() marginTopClass = '';
  @Input() exportToExcelFunc;

  @Output() selectedRow = new EventEmitter();
  @Output() acaoSelecionada = new EventEmitter();
  @Output() filteredResults = new EventEmitter();

  selection = new SelectionModel<any>(true, []);
  datasource;
  cols: any[] = [];
  selectedRowIndex = -1;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dados']) {
      if (this.datasource) {
        this.inicializarTabela(changes['dados'].currentValue);
      }
    }
  }
  ngAfterViewInit(): void {
    this.datasource.sort = this.sort;
  }

  ngAfterContentInit(): void {
    this.inicializarTabela(this.dados);
  }

  inicializarTabela(data) {
    this.datasource = new MatTableDataSource<any>(data);
    this.datasource.paginator = this.paginator;

    this.cols = this.displayedColumns.map((el) => el.el);

    this.cols.unshift('select');
  }

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
    this.selectedRowIndex = -1;
    this.selectedRow.emit(null);
    this.filteredResults.emit(this.datasource.filteredData);
  }

  highlight(row) {
    let newIndex = row[this.displayedColumns[0].el];
    if (newIndex == this.selectedRowIndex) {
      this.selectedRowIndex = -1;
    } else {
      this.selectedRowIndex = newIndex;
    }

    this.selectedRow.emit(row);
  }

  propagate(acao, item) {
    this.selectedRowIndex = -1;
    //event.stopImmediatePropagation();
    this.acaoSelecionada.emit({ acao, item });
  }

  evaluateExpression(element, expression) {
    if (!expression) {
      return true;
    }
    return eval(expression);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datasource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.datasource.data);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  isArray(obj: Object): boolean {
    return obj instanceof Array;
  }
}
