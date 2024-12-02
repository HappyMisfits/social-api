export interface TikTok {
    success: boolean;
    data:    Data;
}

export interface Data {
    user:     User;
    stats:    Stats;
    itemList: any[];
}

export interface Stats {
    followerCount:  number;
    followingCount: number;
    heart:          number;
    heartCount:     number;
    videoCount:     number;
    diggCount:      number;
    friendCount:    number;
}

export interface User {
    id:                     string;
    shortId:                string;
    uniqueId:               string;
    nickname:               string;
    avatarLarger:           string;
    avatarMedium:           string;
    avatarThumb:            string;
    signature:              string;
    createTime:             number;
    verified:               boolean;
    secUid:                 string;
    ftc:                    boolean;
    relation:               number;
    openFavorite:           boolean;
    bioLink:                BioLink;
    commentSetting:         number;
    commerceUserInfo:       CommerceUserInfo;
    duetSetting:            number;
    stitchSetting:          number;
    privateAccount:         boolean;
    secret:                 boolean;
    isADVirtual:            boolean;
    roomId:                 string;
    uniqueIdModifyTime:     number;
    ttSeller:               boolean;
    region:                 string;
    downloadSetting:        number;
    profileTab:             ProfileTab;
    followingVisibility:    number;
    recommendReason:        string;
    nowInvitationCardUrl:   string;
    nickNameModifyTime:     number;
    isEmbedBanned:          boolean;
    canExpPlaylist:         boolean;
    profileEmbedPermission: number;
    language:               string;
    eventList:              any[];
    suggestAccountBind:     boolean;
    isOrganization:         number;
}

export interface BioLink {
    link: string;
    risk: number;
}

export interface CommerceUserInfo {
    commerceUser: boolean;
}

export interface ProfileTab {
    showMusicTab:    boolean;
    showQuestionTab: boolean;
    showPlayListTab: boolean;
}



