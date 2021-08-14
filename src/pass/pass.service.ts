import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PassEntity } from './pass.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreatePassDto } from './dto/createPass.dto';
import { ChildrenEntity } from '../children/children.entity';

@Injectable()
export class PassService {
  constructor(
    @InjectRepository(PassEntity)
    private readonly passRepository: Repository<PassEntity>,
    @InjectRepository(ChildrenEntity)
    private readonly childrenRepository: Repository<ChildrenEntity>,
  ) {}

  async getAllPass(): Promise<PassEntity[]> {
    return await this.passRepository.find();
  }

  async createPass(
    childrenId: number,
    createPassDto: CreatePassDto,
  ): Promise<PassEntity> {
    const newPass = new PassEntity();
    const currentChildren = await this.childrenRepository.findOne(childrenId);
    if (!currentChildren) {
      throw new HttpException(
        'Ребенка с таким id не существует',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    Object.assign(newPass, createPassDto);
    newPass.children = currentChildren;
    return await this.passRepository.save(newPass);
  }

  async updatePass(
    passId: number,
    createPassDto: CreatePassDto,
  ): Promise<PassEntity> {
    const pass = await this.passRepository.findOne(passId);
    if (!pass) {
      throw new HttpException(
        'Абонемента с таким id не существует',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    Object.assign(pass, createPassDto);
    return await this.passRepository.save(pass);
  }

  async deletePass(passId: number): Promise<DeleteResult> {
    const pass = await this.passRepository.findOne(passId);
    if (!pass) {
      throw new HttpException(
        'Абонемента с таким id не существует',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    return await this.passRepository.delete(passId);
  }
}
