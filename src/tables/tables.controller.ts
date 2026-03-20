import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TablesService } from './tables.service';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';
import { UpdateTableDto } from './dto/UpdateTableDto';
import { ResponseTableDto } from './dto/response-table.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Tables')
@Controller('tables')
export class TablesController {
  constructor(private readonly tableService: TablesService) {}

  @ApiOperation({ summary: 'create new table' })
  @ApiResponse({
    status: 201,
    type: ResponseTableDto,
  })
  @Post()
  async create(@Body() createTableDto: CreateTableDto): Promise<Table> {
    return await this.tableService.create(createTableDto);
  }
  @ApiOperation({ summary: 'get all tables' })
  @ApiResponse({
    status: 200,
    type: ResponseTableDto,
  })
  @Get()
  async findAll(): Promise<ResponseTableDto[]> {
    return this.tableService.findAll();
  }
  @ApiOperation({ summary: 'get table' })
  @ApiResponse({
    status: 200,
    type: ResponseTableDto,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Table> {
    return this.tableService.findById(+id);
  }
  @ApiOperation({ summary: 'change table' })
  @ApiResponse({
    status: 200,
    type: ResponseTableDto,
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTableDto: UpdateTableDto,
  ): Promise<Table> {
    return this.tableService.update(+id, updateTableDto);
  }
  @ApiOperation({ summary: 'delete table' })
  @ApiResponse({
    status: 204,
  })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.tableService.delete(+id);
  }
}
