import { Module } from '@nestjs/common';
import { ProcessesService } from './processes.service';
import { ProcessesResolver } from './processes.resolver';
import { SubscriptionService } from 'src/common/subscription.service';

@Module({
  providers: [ProcessesService, ProcessesResolver, SubscriptionService]
})
export class ProcessesModule {}
