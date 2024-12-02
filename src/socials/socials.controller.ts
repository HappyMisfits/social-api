import { 
    Controller,
    Get,
    Param
} from '@nestjs/common';
import { SocialsService } from './socials.service';

@Controller('socials')
export class SocialsController {

    constructor(private readonly socialsService: SocialsService) {}

    @Get('youtube')
    async getYoutubeFollowers(@Param('id') id: string) {
        return await this.socialsService.getYoutubeFollowers(id);
    }
}
