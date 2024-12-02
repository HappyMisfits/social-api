export interface Youtube {
    channel_id:       string;
    title:            string;
    description:      string;
    subscriber_count: string;
    links:            Link[];
    avatar:           Avatar[];
    banner:           Avatar[];
    verified:         boolean;
}

export interface Avatar {
    url:    string;
    width:  number;
    height: number;
}

export interface Link {
    name:     string;
    endpoint: string;
}
