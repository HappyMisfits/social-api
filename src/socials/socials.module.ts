import { Module } from '@nestjs/common';
import { SocialsController } from './socials.controller';
import { SocialsService } from './socials.service';
import { HttpModule } from '@nestjs/axios';
import { YoutubeResolver } from './socials.resolver';

@Module({
  imports: [HttpModule],
  controllers: [SocialsController],
  providers: [SocialsService, 
    YoutubeResolver
  ]
})
export class SocialsModule {}
