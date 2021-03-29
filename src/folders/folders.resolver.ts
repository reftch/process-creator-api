import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { FoldersArgs } from './dto/folders.args';
import { Folder } from './models/folder.model';
import { FoldersService } from './folders.service';
import { SubscriptionService } from 'src/common/subscription.service';
import { ProjectDescription } from './models/projectDescription.model';
import { NewFolderInput } from './dto/new-folder.input';

@Resolver(of => Folder)
export class FoldersResolver {
  constructor(private readonly foldersService: FoldersService,
    private readonly subscriptionService: SubscriptionService) {}

  @Query(returns => Folder, {name: 'folder'})
  async folder(@Args() foldersArgs: FoldersArgs): Promise<Folder> {
    return await this.foldersService.find(foldersArgs);
  }

  @Query(returns => Folder, {name: 'userHome'})
  async userHome(): Promise<Folder> {
    return await this.foldersService.getUserHome();
  }

  @Mutation(returns => Folder)
  async add(
    @Args('newFolderData') newFolderData: NewFolderInput,
  ): Promise<Folder> {
    const folder = await this.foldersService.create(newFolderData);
    this.subscriptionService.subscription.asyncIterator('newFolder');
    return folder;
  }

  @Mutation(returns => Boolean)
  async remove(@Args('name') name: string) {
    return await this.foldersService.remove(name);
  }

  @Subscription(returns => ProjectDescription)
  projectFound() {
    return this.subscriptionService.subscription.asyncIterator('projectFound');
  }

}
