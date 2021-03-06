import { DynamicModule, Module } from '@nestjs/common';
import { HomeAssistantService } from './home-assistant.service';
import { ConfigModule } from '../../config/config.module';
import { EntitiesModule } from '../../entities/entities.module';

@Module({})
export default class HomeAssistantModule {
  static forRoot(): DynamicModule {
    return {
      module: HomeAssistantModule,
      imports: [ConfigModule, EntitiesModule],
      providers: [HomeAssistantService],
    };
  }
}
