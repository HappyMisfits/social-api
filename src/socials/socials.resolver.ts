import { Args, Query, Resolver } from "@nestjs/graphql";
import { Youtube } from "./graphql-types/Youtube.type";
import { SocialsService } from './socials.service';


@Resolver(() => Youtube)
export class YoutubeResolver {

    constructor(
        private socialsService: SocialsService,
      ) {}

      @Query(() => Youtube)
        async youtube(@Args('id', { type: () => String }) id: string) {
            return this.socialsService.getYoutubeFollowers(id);
    }
}