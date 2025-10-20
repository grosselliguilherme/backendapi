import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {  
  // Conecta ao banco quando o módulo é inicializado
  async onModuleInit() {
    await this.$connect();
  }

  // Desconecta do banco quando o módulo é destruído (opcional, mas recomendado)
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
