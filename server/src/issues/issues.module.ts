import { Module } from '@nestjs/common';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { IssueService } from './issue.service';

@Module({
    imports: [InMemoryDBModule.forFeature('issues')],
    providers: [IssueService],
    exports: [IssueService],
})
export class IssuesModule {}