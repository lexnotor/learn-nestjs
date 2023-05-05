import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {}

  users = [];

  async getAllUser(): Promise<{ data: UserEntity[] }> {
    const data = await this.entityManager.find(UserEntity, {
      withDeleted: true,
    });
    return { data };
  }
  async addUser(
    payload: UserEntity,
  ): Promise<{ data: UserEntity[]; message: string }> {
    const data = await this.entityManager.insert(UserEntity, payload);
    return { data: data.generatedMaps as UserEntity[], message: 'added' };
  }

  async deleteUser(payload: UserEntity): Promise<{
    data: number;
    message: string;
  }> {
    const data = await this.entityManager.softDelete(UserEntity, {
      names: payload.names,
    });
    return { data: data.affected, message: 'deleted' };
  }
}
