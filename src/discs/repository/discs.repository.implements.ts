import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DiscsRepository } from './discs.repository';
import { CreateDiscDto } from 'src/dtos/create-discs-dto';
import { UpdateDiscDto } from 'src/dtos/update-discs-dto';
import { GetDiscDto } from 'src/dtos/get-discs-dto';

@Injectable()
export class DiscsRepositoryImplements implements DiscsRepository {
  constructor(private prisma: PrismaService) {}

  // ID do usuário "loja" que será dono de todos os discos
  private readonly STORE_USER_ID = 1;

  async create(data: CreateDiscDto): Promise<GetDiscDto> {
    // garante que o usuário "loja" existe
    const storeUser = await this.prisma.user.findUnique({ where: { id: this.STORE_USER_ID } });
    if (!storeUser) throw new BadRequestException('Usuário da loja não existe. Crie o usuário com ID 1.');

    // cria o disco vinculado ao usuário "loja"
    const disc = await this.prisma.disc.create({
      data: {
        ...data,
        user: { connect: { id: this.STORE_USER_ID } },
      },
    });

    const dto = new GetDiscDto();
    dto.id = disc.id;
    dto.title = disc.title;
    dto.artist = disc.artist;
    dto.price = disc.price;
    dto.stock = disc.stock;
    dto.createdAt = disc.createdAt.toISOString();
    return dto;
  }

  async findAll(): Promise<GetDiscDto[]> {
    const discs = await this.prisma.disc.findMany();
    return discs.map(disc => {
      const dto = new GetDiscDto();
      dto.id = disc.id;
      dto.title = disc.title;
      dto.artist = disc.artist;
      dto.price = disc.price;
      dto.stock = disc.stock;
      dto.createdAt = disc.createdAt.toISOString();
      return dto;
    });
  }

  async findOne(id: number): Promise<GetDiscDto> {
    const disc = await this.prisma.disc.findUnique({ where: { id } });
    if (!disc) throw new NotFoundException('Disco não encontrado.');

    const dto = new GetDiscDto();
    dto.id = disc.id;
    dto.title = disc.title;
    dto.artist = disc.artist;
    dto.price = disc.price;
    dto.stock = disc.stock;
    dto.createdAt = disc.createdAt.toISOString();
    return dto;
  }

  async update(id: number, data: UpdateDiscDto): Promise<GetDiscDto> {
    const disc = await this.prisma.disc.findUnique({ where: { id } });
    if (!disc) throw new NotFoundException('Disco não encontrado.');

    const updated = await this.prisma.disc.update({ where: { id }, data });

    const dto = new GetDiscDto();
    dto.id = updated.id;
    dto.title = updated.title;
    dto.artist = updated.artist;
    dto.price = updated.price;
    dto.stock = updated.stock;
    dto.createdAt = updated.createdAt.toISOString();
    return dto;
  }

  async delete(id: number): Promise<void> {
    const disc = await this.prisma.disc.findUnique({ where: { id } });
    if (!disc) throw new NotFoundException('Disco não encontrado.');

    await this.prisma.disc.delete({ where: { id } });
  }
}
