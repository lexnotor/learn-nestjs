import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { UserEntity } from './users/user.entity';

@Injectable()
export class AppService {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    entityManager.insert(UserEntity, [
      { names: 'Ados' },
      { names: 'Addes' },
      { names: 'Fary' },
      { names: 'Noples' },
    ]);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
