import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {CategoryResponseDto} from '../model/category-model';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-categories-tree-view',
  templateUrl: './categories-tree-view.component.html',
  styleUrls: ['./categories-tree-view.component.css']
})
export class CategoriesTreeViewComponent implements OnInit {

  @Output() categoryChangeEvent: EventEmitter<any> = new EventEmitter<any>();
  treeControl = new NestedTreeControl<CategoryResponseDto>(category => category.subCategories);
  dataSource = new MatTreeNestedDataSource<CategoryResponseDto>();
  role = localStorage.getItem('ROLE');

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.findAllRootCategories().subscribe((response) => {
      this.dataSource.data = response;
    }, error => {
      console.log(error);
    });
  }

  hasSubCategories = (index: number, node: CategoryResponseDto) =>
    node.subCategories !== undefined &&
    node.subCategories !== null &&
    node.subCategories.length > 0;

  checkNodeId(node: any): void {
    this.categoryChangeEvent.emit(node.id);
  }

}


