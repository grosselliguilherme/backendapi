import { Injectable } from '@nestjs/common';
import { CreateDiscDto } from 'src/dtos/create-discs-dto';
import { UpdateDiscDto } from 'src/dtos/update-discs-dto';
import { DiscsRepository } from './repository/discs.repository';
import { GetDiscDto } from 'src/dtos/get-discs-dto';

@Injectable()
export class DiscsService {
  constructor(private discsRepository: DiscsRepository) {}

  create(data: CreateDiscDto, userId: number): Promise<GetDiscDto> {
    return this.discsRepository.create(data, userId);
  }

  findAll(): Promise<GetDiscDto[]> {
    return this.discsRepository.findAll();
  }

  findOne(id: number): Promise<GetDiscDto> {
    return this.discsRepository.findOne(id);
  }

  update(id: number, data: UpdateDiscDto): Promise<GetDiscDto> {
    return this.discsRepository.update(id, data);
  }

  delete(id: number): Promise<void> {
    return this.discsRepository.delete(id);
  }
}
