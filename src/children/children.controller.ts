import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ChildrenService } from './children.service';
import { AuthGuard } from '../user/guards/auth.guard';
import { CreateChildrenDto } from './dto/createChildren.dto';
import { ChildrenEntity } from './children.entity';

@Controller('children')
export class ChildrenController {
  constructor(private readonly childrenService: ChildrenService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createChildren(
    @Param('id') userId: number,
    @Body() createChildrenDto: CreateChildrenDto,
  ): Promise<ChildrenEntity> {
    return this.childrenService.createChildren(userId, createChildrenDto);
  }
}
