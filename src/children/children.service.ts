import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChildrenEntity } from './children.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateChildrenDto } from './dto/createChildren.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class ChildrenService {
  constructor(
    @InjectRepository(ChildrenEntity)
    private readonly childrenRepository: Repository<ChildrenEntity>,
    private readonly userService: UserService,
  ) {}

  async getAllChildren(userId: number): Promise<ChildrenEntity[]> {
    const user = await this.userService.findById(userId);
    if (!user) {
      throw new HttpException(
        'Родителя с таким id не существует',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    return await this.childrenRepository.find({ where: { parent: userId } });
  }

  async createChildren(
    userId: number,
    createChildrenDto: CreateChildrenDto,
  ): Promise<ChildrenEntity> {
    const newChildren = new ChildrenEntity();
    Object.assign(newChildren, createChildrenDto);
    const user = await this.userService.findById(userId);
    if (!user) {
      throw new HttpException(
        'Родителя с таким id не существует',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    newChildren.parent = user;
    return await this.childrenRepository.save(newChildren);
  }

  async updateChildren(
    childrenId: number,
    createChildrenDto: CreateChildrenDto,
  ): Promise<ChildrenEntity> {
    const children = await this.childrenRepository.findOne(childrenId);
    Object.assign(children, createChildrenDto);
    return await this.childrenRepository.save(children);
  }

  async deleteChildren(
    userId: number,
    childrenId: number,
  ): Promise<DeleteResult> {
    const children = await this.childrenRepository.findOne(childrenId);
    const user = await this.userService.findById(userId);
    if (!user) {
      throw new HttpException(
        'Родителя с таким id не существует',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    if (!children) {
      throw new HttpException('Ребенок не найден', HttpStatus.NOT_FOUND);
    }
    if (children.parent.id !== +userId) {
      throw new HttpException('Вы не родитель ребенка', HttpStatus.FORBIDDEN);
    }
    return await this.childrenRepository.delete(childrenId);
  }

  async addScores(childrenId: number, scores: number): Promise<ChildrenEntity> {
    const children = await this.childrenRepository.findOne(childrenId);
    if (!children) {
      throw new HttpException('Ребенок не найден', HttpStatus.NOT_FOUND);
    }
    children.scores = scores;
    return await this.childrenRepository.save(children);
  }
}
