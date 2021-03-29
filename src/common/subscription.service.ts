import { Injectable } from '@nestjs/common';
import { PubSub } from 'apollo-server-express';

@Injectable()
export class SubscriptionService {

  private readonly pubSub = new PubSub();

  get subscription() {
    return this.pubSub;
  }
}
