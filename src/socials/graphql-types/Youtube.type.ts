import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Banner {
    @Field()
    url: string;
    @Field(type => Int)
    width: number;
    @Field(type => Int)
    height: number;
}

@ObjectType()
export class Avatar {
    @Field()
    url: string;
    @Field(type => Int)
    width: number;
    @Field(type => Int)
    height: number;
}

@ObjectType()
export class Links {
    @Field()
    name: string;
    @Field()
    endpoint: string;
}

@ObjectType()
export class Youtube {
    @Field()
    channel_id: string;
    @Field()
    title: string;
    @Field()
    description: string;
    @Field()
    subscriber_count: string;
    @Field()
    verified: boolean;
    @Field()
    has_business_email: boolean;
    @Field()
    view_count: string;
    @Field()
    country: string;
    @Field()
    creation_date: string;
    @Field(type => [Banner])
    banner: Banner[];
    @Field(type => [Avatar])
    avatar: Avatar[];
    @Field(type => [Links])
    links: Links[];
}





