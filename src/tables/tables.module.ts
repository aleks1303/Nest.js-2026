import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TablesController } from './tables.controller';
import { TypeormModule } from '../typeorm.module';

@Module({
  providers: [TablesService, TypeormModule],
  controllers: [TablesController],
})
export class TablesModule {}
