/* tslint:disable */
/* eslint-disable */
/**
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml).
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A story represents an activity associated with an object in the Asana system.
 * @export
 * @interface StoryBaseAllOf
 */
export interface StoryBaseAllOf {
    /**
     * The time at which this resource was created.
     * @type {string}
     * @memberof StoryBaseAllOf
     */
    'created_at'?: string;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     * @type {string}
     * @memberof StoryBaseAllOf
     */
    'resource_subtype'?: string;
    /**
     * The plain text of the comment to add. Cannot be used with html_text.
     * @type {string}
     * @memberof StoryBaseAllOf
     */
    'text'?: string;
    /**
     * [Opt In](/docs/input-output-options). HTML formatted text for a comment. This will not include the name of the creator.
     * @type {string}
     * @memberof StoryBaseAllOf
     */
    'html_text'?: string;
    /**
     * *Conditional*. Whether the story should be pinned on the resource.
     * @type {boolean}
     * @memberof StoryBaseAllOf
     */
    'is_pinned'?: boolean;
    /**
     * The name of the sticker in this story. `null` if there is no sticker.
     * @type {string}
     * @memberof StoryBaseAllOf
     */
    'sticker_name'?: StoryBaseAllOfStickerNameEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum StoryBaseAllOfStickerNameEnum {
    GreenCheckmark = 'green_checkmark',
    PeopleDancing = 'people_dancing',
    DancingUnicorn = 'dancing_unicorn',
    Heart = 'heart',
    PartyPopper = 'party_popper',
    PeopleWavingFlags = 'people_waving_flags',
    SplashingNarwhal = 'splashing_narwhal',
    Trophy = 'trophy',
    YetiRidingUnicorn = 'yeti_riding_unicorn',
    CelebratingPeople = 'celebrating_people',
    DeterminedClimbers = 'determined_climbers',
    PhoenixSpreadingLove = 'phoenix_spreading_love'
}


