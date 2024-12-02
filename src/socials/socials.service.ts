import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { Youtube } from './interfaces/Youtube.interface';

@Injectable()
export class SocialsService {
    constructor(private readonly httpService: HttpService) {}

    getYoutubeFollowers(channelId: string): Observable<AxiosResponse<Youtube>> {

        const options = {
            method: 'GET',
            url: 'https://youtube-v2.p.rapidapi.com/channel/details',
            params: {
              channel_id: 'UCXuqSBlHAE6Xw-yeJA0Tunw' //channelId
            },
            headers: {
              'x-rapidapi-key': process.env.RAPIDAPI_KEY,
              'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
            }
        };

        try {
            return this.httpService
                .request(options)
                .pipe(map((res) => res.data))
        
        } catch (error) {
            return error;
        }

    }
}
