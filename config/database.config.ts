import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { inflate } from 'zlib';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions() {
    if(process.env.NODE_ENV === 'production'){
      return this.configService.get('prodDatabase');
    }else { 
      return this.configService.get('devDatabase');
    }
  }
}