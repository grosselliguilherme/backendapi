import { CreateDiscDto } from 'src/dtos/create-discs-dto';
import { UpdateDiscDto } from 'src/dtos/update-discs-dto';
import { GetDiscDto } from 'src/dtos/get-discs-dto';

export abstract class DiscsRepository {
  abstract create(data: CreateDiscDto, userId: number): Promise<GetDiscDto>;
  abstract findAll(): Promise<GetDiscDto[]>;
  abstract findOne(id: number): Promise<GetDiscDto>;
  abstract update(id: number, data: UpdateDiscDto): Promise<GetDiscDto>;
  abstract delete(id: number): Promise<void>;
}
