export interface Instagram {
    data: Data;
}

export interface Data {
    about:                                          null;
    account_badges:                                 any[];
    account_type:                                   number;
    active_standalone_fundraisers:                  ActiveStandaloneFundraisers;
    adjusted_banners_order:                         any[];
    ads_incentive_expiration_date:                  null;
    ads_page_id:                                    null;
    ads_page_name:                                  null;
    bio_links:                                      BioLink[];
    biography:                                      string;
    biography_email:                                null;
    biography_with_entities:                        BiographyWithEntities;
    birthday_today_visibility_for_viewer:           string;
    business_contact_method:                        string;
    can_add_fb_group_link_on_profile:               boolean;
    can_hide_category:                              boolean;
    can_hide_public_contacts:                       boolean;
    category:                                       string;
    category_id:                                    number;
    contact_phone_number:                           string;
    current_catalog_id:                             null;
    direct_messaging:                               string;
    external_lynx_url:                              string;
    external_url:                                   string;
    fbid_v2:                                        number;
    follower_count:                                 number;
    following_count:                                number;
    full_name:                                      string;
    has_anonymous_profile_picture:                  boolean;
    has_chaining:                                   boolean;
    has_gen_ai_personas_for_profile_banner:         boolean;
    has_guides:                                     boolean;
    has_igtv_series:                                boolean;
    has_views_fetching:                             boolean;
    hd_profile_pic_url_info:                        HDProfilePic;
    hd_profile_pic_versions:                        HDProfilePic[];
    highlights_tray_type:                           string;
    id:                                             string;
    is_business:                                    boolean;
    is_call_to_action_enabled:                      boolean;
    is_category_tappable:                           boolean;
    is_eligible_for_request_message:                boolean;
    is_favorite:                                    boolean;
    is_favorite_for_clips:                          boolean;
    is_favorite_for_igtv:                           boolean;
    is_favorite_for_stories:                        boolean;
    is_opal_enabled:                                boolean;
    is_open_to_collab:                              boolean;
    is_parenting_account:                           boolean;
    is_private:                                     boolean;
    is_profile_audio_call_enabled:                  boolean;
    is_profile_picture_expansion_enabled:           boolean;
    is_verified:                                    boolean;
    latest_reel_media:                              number;
    live_subscription_status:                       string;
    location_data:                                  LocationData;
    media_count:                                    number;
    merchant_checkout_style:                        string;
    page_id:                                        number;
    page_name:                                      string;
    pinned_channels_info:                           PinnedChannelsInfo;
    primary_profile_link_type:                      number;
    professional_conversion_suggested_account_type: number;
    profile_context:                                string;
    profile_context_facepile_users:                 any[];
    profile_context_links_with_user_ids:            any[];
    profile_pic_id:                                 string;
    profile_pic_url:                                string;
    profile_pic_url_hd:                             string;
    profile_reels_sorting_eligibility:              string;
    public_email:                                   string;
    public_phone_country_code:                      string;
    public_phone_number:                            string;
    recon_features:                                 ReconFeatures;
    seller_shoppable_feed_type:                     string;
    show_shoppable_feed:                            boolean;
    third_party_downloads_enabled:                  number;
    total_igtv_videos:                              number;
    upcoming_events:                                any[];
    username:                                       string;
    views_on_grid_status:                           string;
}

export interface ActiveStandaloneFundraisers {
    fundraisers: any[];
    total_count: number;
}

export interface BioLink {
    icon_url:                              string;
    image_url:                             string;
    is_pinned:                             boolean;
    is_verified:                           boolean;
    link_id:                               number;
    link_type:                             string;
    lynx_url:                              string;
    media_type:                            string;
    open_external_url_with_in_app_browser: boolean;
    title:                                 string;
    url:                                   string;
}

export interface BiographyWithEntities {
    entities: Entity[];
    raw_text: string;
}

export interface Entity {
    user: User;
}

export interface User {
    id:       number;
    username: string;
}

export interface HDProfilePic {
    height: number;
    url:    string;
    width:  number;
}

export interface LocationData {
    address_street:        string;
    city_id:               number;
    city_name:             string;
    instagram_location_id: string;
    latitude:              number;
    longitude:             number;
    zip:                   string;
}

export interface PinnedChannelsInfo {
    has_public_channels:  boolean;
    pinned_channels_list: any[];
}

export interface ReconFeatures {
    enable_recon_cta: boolean;
}