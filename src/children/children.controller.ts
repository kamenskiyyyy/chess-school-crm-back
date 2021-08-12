import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ChildrenService } from './children.service';
import { AuthGuard } from '../user/guards/auth.guard';
import { CreateChildrenDto } from './dto/createChildren.dto';
import { ChildrenEntity } from './children.entity';
import { DeleteResult } from 'typeorm';

@Controller('children')
export class ChildrenController {
  constructor(private readonly childrenService: ChildrenService) {}

  @Get()
  @UseGuards(AuthGuard)
  async getAllChildren(
    @Query('userId') userId: number,
  ): Promise<ChildrenEntity[]> {
    return this.childrenService.getAllChildren(userId);
  }

  @Post()
  @UseGuards(AuthGuard)
  async createChildren(
    @Query('userId') userId: number,
    @Body() createChildrenDto: CreateChildrenDto,
  ): Promise<ChildrenEntity> {
    return this.childrenService.createChildren(userId, createChildrenDto);
  }

  @Put()
  @UseGuards(AuthGuard)
  async updateChildren(
    @Query('childrenId') childrenId: number,
    @Body() createChildrenDto: CreateChildrenDto,
  ): Promise<ChildrenEntity> {
    return this.childrenService.updateChildren(childrenId, createChildrenDto);
  }

  @Delete()
  @UseGuards(AuthGuard)
  async deleteChildren(
    @Query('userId') userId: number,
    @Query('childrenId') childrenId: number,
  ): Promise<DeleteResult> {
    return this.childrenService.deleteChildren(userId, childrenId);
  }

  @Put()
  @UseGuards(AuthGuard)
  async addCoins(
    @Query('childrenId') childrenId: number,
    @Query('coins') coins: number,
  ): Promise<ChildrenEntity> {
    return this.childrenService.addCoins(childrenId, coins);
  }
}
