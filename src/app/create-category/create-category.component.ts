import {Component, OnInit} from '@angular/core';
import {CategoryRequestDto, CategoryResponseDto} from '../model/category-model';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  categoryResponseDto: CategoryResponseDto[] = [];
  categoryRequestDto: CategoryRequestDto = {
    name: '',
    parentId: null
  };

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe((categoryArray) => {
      this.categoryResponseDto = categoryArray;
    }, error => {
      console.log(error);
    });
  }

  save(): void {
    this.categoryService.create(this.categoryRequestDto).subscribe((response) => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
