import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChildrenEntity } from './children.entity';
import { Repository } from 'typeorm';
import { CreateChildrenDto } from './dto/createChildren.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class ChildrenService {
  constructor(
    @InjectRepository(ChildrenEntity)
    private readonly childrenRepository: Repository<ChildrenEntity>,
    private readonly userService: UserService,
  ) {}

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
}
