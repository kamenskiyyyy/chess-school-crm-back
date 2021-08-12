import {
  Body,
  Controller,
  Delete,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PassService } from './pass.service';
import { AuthGuard } from '../user/guards/auth.guard';
import { CreatePassDto } from './dto/createPass.dto';
import { PassEntity } from './pass.entity';
import { DeleteResult } from 'typeorm';

@Controller('pass')
export class PassController {
  constructor(private readonly passService: PassService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createPass(
    @Query('childrenId') childrenId: number,
    @Body() createPassDto: CreatePassDto,
  ): Promise<PassEntity> {
    return this.passService.createPass(childrenId, createPassDto);
  }

  @Put()
  @UseGuards(AuthGuard)
  async updatePass(
    @Query('passId') passId: number,
    @Body() createPassDto: CreatePassDto,
  ): Promise<PassEntity> {
    return this.passService.updatePass(passId, createPassDto);
  }

  @Delete()
  @UseGuards(AuthGuard)
  async deletePass(@Query('passId') passId: number): Promise<DeleteResult> {
    return this.passService.deletePass(passId);
  }
}
