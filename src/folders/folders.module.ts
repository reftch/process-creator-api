import { Module } from '@nestjs/common';
import { SubscriptionService } from 'src/common/subscription.service';
import { FoldersResolver } from './folders.resolver';
import { FoldersService } from './folders.service';

@Module({
  providers: [FoldersResolver, FoldersService, SubscriptionService],
})
export class FoldersModule {}
