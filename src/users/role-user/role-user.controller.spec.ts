import { Test, TestingModule } from '@nestjs/testing';
import { RoleUserController } from './role-user.controller';
import { RoleUserService } from './role-user.service';

describe('RoleUserController', () => {
  let controller: RoleUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleUserController],
      providers: [RoleUserService],
    }).compile();

    controller = module.get<RoleUserController>(RoleUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
