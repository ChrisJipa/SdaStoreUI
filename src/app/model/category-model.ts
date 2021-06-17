export interface CategoryResponseDto {
  id: number;
  name: string;
  subCategories: CategoryResponseDto[];
}

export interface CategoryRequestDto {
  name: string;
  parentId: number | null;
}
