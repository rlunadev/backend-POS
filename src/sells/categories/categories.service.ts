import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}
  
  async create(categoryDto: CreateCategoryDto): Promise<Category | string> {
    const categoryExists = await this.findByName(categoryDto.name);
    if (categoryExists) {
      return 'La categoría ya existe';
    }
    const newCategory = this.categoryRepository.create(categoryDto);
    return this.categoryRepository.save(newCategory);
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findOne(id: string): Promise<Category | undefined> {
    const options: FindOneOptions<Category> = {
       where: { id } };
    return this.categoryRepository.findOne(options);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category | undefined> {
    const category = await this.findOne(id);
    if (!category) {
      return undefined;
    }
    const updatedCategory = Object.assign(category, updateCategoryDto);
    return this.categoryRepository.save(updatedCategory);
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.categoryRepository.delete(id);
    return result.affected > 0;
  }

  private async findByName(name: string): Promise<Category | undefined> {
    const options: FindOneOptions<Category> = { where: { name } };
    return this.categoryRepository.findOne(options);
  }
}
