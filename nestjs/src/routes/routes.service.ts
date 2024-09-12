import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma/prisma.service';

@Injectable()
export class RoutesService {
  constructor(private PrismaService: PrismaService) {}

  async findAll(query: { price?: number; category?: string; float?: string; search?: string }) {
    const { price, category, float, search } = query;
    return this.PrismaService.item.findMany({
      where: {
        AND: [
          price ? { price: { lte: price } } : {},
          category ? { category: { contains: category, mode: 'insensitive' } } : {},
          float ? { float: { contains: float } } : {},
          search ? { name: { contains: search, mode: 'insensitive' } } : {},
        ],
      },
    });
  }
}
