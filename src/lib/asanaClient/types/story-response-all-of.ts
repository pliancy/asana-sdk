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


import { CustomFieldCompact } from './custom-field-compact';
import { EnumOption } from './enum-option';
import { Like } from './like';
import { Preview } from './preview';
import { ProjectCompact } from './project-compact';
import { SectionCompact } from './section-compact';
import { StoryCompact } from './story-compact';
import { StoryResponseDates } from './story-response-dates';
import { TagCompact } from './tag-compact';
import { TaskCompact } from './task-compact';
import { UserCompact } from './user-compact';

/**
 * 
 * @export
 * @interface StoryResponseAllOf
 */
export interface StoryResponseAllOf {
    /**
     * 
     * @type {UserCompact}
     * @memberof StoryResponseAllOf
     */
    'created_by'?: UserCompact;
    /**
     * 
     * @type {string}
     * @memberof StoryResponseAllOf
     */
    'type'?: StoryResponseAllOfTypeEnum;
    /**
     * *Conditional*. Whether the text of the story can be edited after creation.
     * @type {boolean}
     * @memberof StoryResponseAllOf
     */
    'is_editable'?: boolean;
    /**
     * *Conditional*. Whether the text of the story has been edited after creation.
     * @type {boolean}
     * @memberof StoryResponseAllOf
     */
    'is_edited'?: boolean;
    /**
     * *Deprecated - please use likes instead* *Conditional*. True if the story is hearted by the authorized user, false if not.
     * @type {boolean}
     * @memberof StoryResponseAllOf
     */
    'hearted'?: boolean;
    /**
     * *Deprecated - please use likes instead*  *Conditional*. Array of likes for users who have hearted this story.
     * @type {Array<Like>}
     * @memberof StoryResponseAllOf
     */
    'hearts'?: Array<Like>;
    /**
     * *Deprecated - please use likes instead*  *Conditional*. The number of users who have hearted this story.
     * @type {number}
     * @memberof StoryResponseAllOf
     */
    'num_hearts'?: number;
    /**
     * *Conditional*. True if the story is liked by the authorized user, false if not.
     * @type {boolean}
     * @memberof StoryResponseAllOf
     */
    'liked'?: boolean;
    /**
     * *Conditional*. Array of likes for users who have liked this story.
     * @type {Array<Like>}
     * @memberof StoryResponseAllOf
     */
    'likes'?: Array<Like>;
    /**
     * *Conditional*. The number of users who have liked this story.
     * @type {number}
     * @memberof StoryResponseAllOf
     */
    'num_likes'?: number;
    /**
     * *Conditional*. A collection of previews to be displayed in the story.  *Note: This property only exists for comment stories.*
     * @type {Array<Preview>}
     * @memberof StoryResponseAllOf
     */
    'previews'?: Array<Preview>;
    /**
     * *Conditional*\'
     * @type {string}
     * @memberof StoryResponseAllOf
     */
    'old_name'?: string;
    /**
     * *Conditional*
     * @type {string}
     * @memberof StoryResponseAllOf
     */
    'new_name'?: string;
    /**
     * 
     * @type {StoryResponseDates}
     * @memberof StoryResponseAllOf
     */
    'old_dates'?: StoryResponseDates;
    /**
     * 
     * @type {StoryResponseDates}
     * @memberof StoryResponseAllOf
     */
    'new_dates'?: StoryResponseDates;
    /**
     * *Conditional*
     * @type {string}
     * @memberof StoryResponseAllOf
     */
    'old_resource_subtype'?: string;
    /**
     * *Conditional*
     * @type {string}
     * @memberof StoryResponseAllOf
     */
    'new_resource_subtype'?: string;
    /**
     * 
     * @type {StoryCompact}
     * @memberof StoryResponseAllOf
     */
    'story'?: StoryCompact;
    /**
     * 
     * @type {UserCompact}
     * @memberof StoryResponseAllOf
     */
    'assignee'?: UserCompact;
    /**
     * 
     * @type {UserCompact}
     * @memberof StoryResponseAllOf
     */
    'follower'?: UserCompact;
    /**
     * 
     * @type {SectionCompact}
     * @memberof StoryResponseAllOf
     */
    'old_section'?: SectionCompact;
    /**
     * 
     * @type {SectionCompact}
     * @memberof StoryResponseAllOf
     */
    'new_section'?: SectionCompact;
    /**
     * 
     * @type {TaskCompact}
     * @memberof StoryResponseAllOf
     */
    'task'?: TaskCompact;
    /**
     * 
     * @type {ProjectCompact}
     * @memberof StoryResponseAllOf
     */
    'project'?: ProjectCompact;
    /**
     * 
     * @type {TagCompact}
     * @memberof StoryResponseAllOf
     */
    'tag'?: TagCompact;
    /**
     * 
     * @type {CustomFieldCompact}
     * @memberof StoryResponseAllOf
     */
    'custom_field'?: CustomFieldCompact;
    /**
     * *Conditional*
     * @type {string}
     * @memberof StoryResponseAllOf
     */
    'old_text_value'?: string;
    /**
     * *Conditional*
     * @type {string}
     * @memberof StoryResponseAllOf
     */
    'new_text_value'?: string;
    /**
     * *Conditional*
     * @type {number}
     * @memberof StoryResponseAllOf
     */
    'old_number_value'?: number;
    /**
     * *Conditional*
     * @type {number}
     * @memberof StoryResponseAllOf
     */
    'new_number_value'?: number;
    /**
     * 
     * @type {EnumOption}
     * @memberof StoryResponseAllOf
     */
    'old_enum_value'?: EnumOption;
    /**
     * 
     * @type {EnumOption}
     * @memberof StoryResponseAllOf
     */
    'new_enum_value'?: EnumOption;
    /**
     * 
     * @type {StoryResponseDates}
     * @memberof StoryResponseAllOf
     */
    'old_date_value'?: StoryResponseDates;
    /**
     * 
     * @type {StoryResponseDates}
     * @memberof StoryResponseAllOf
     */
    'new_date_value'?: StoryResponseDates;
    /**
     * *Conditional*. The old value of a people custom field story.
     * @type {Array<UserCompact>}
     * @memberof StoryResponseAllOf
     */
    'old_people_value'?: Array<UserCompact>;
    /**
     * *Conditional*. The new value of a people custom field story.
     * @type {Array<UserCompact>}
     * @memberof StoryResponseAllOf
     */
    'new_people_value'?: Array<UserCompact>;
    /**
     * *Conditional*. The old value of a multi-enum custom field story.
     * @type {Array<EnumOption>}
     * @memberof StoryResponseAllOf
     */
    'old_multi_enum_values'?: Array<EnumOption>;
    /**
     * *Conditional*. The new value of a multi-enum custom field story.
     * @type {Array<EnumOption>}
     * @memberof StoryResponseAllOf
     */
    'new_multi_enum_values'?: Array<EnumOption>;
    /**
     * *Conditional*. The new value of approval status.
     * @type {string}
     * @memberof StoryResponseAllOf
     */
    'new_approval_status'?: string;
    /**
     * *Conditional*. The old value of approval status.
     * @type {string}
     * @memberof StoryResponseAllOf
     */
    'old_approval_status'?: string;
    /**
     * 
     * @type {TaskCompact}
     * @memberof StoryResponseAllOf
     */
    'duplicate_of'?: TaskCompact;
    /**
     * 
     * @type {TaskCompact}
     * @memberof StoryResponseAllOf
     */
    'duplicated_from'?: TaskCompact;
    /**
     * 
     * @type {TaskCompact}
     * @memberof StoryResponseAllOf
     */
    'dependency'?: TaskCompact;
    /**
     * The component of the Asana product the user used to trigger the story.
     * @type {string}
     * @memberof StoryResponseAllOf
     */
    'source'?: StoryResponseAllOfSourceEnum;
    /**
     * 
     * @type {TaskCompact & object}
     * @memberof StoryResponseAllOf
     */
    'target'?: TaskCompact & object;
}

/**
    * @export
    * @enum {string}
    */
export enum StoryResponseAllOfTypeEnum {
    Comment = 'comment',
    System = 'system'
}
/**
    * @export
    * @enum {string}
    */
export enum StoryResponseAllOfSourceEnum {
    Web = 'web',
    Email = 'email',
    Mobile = 'mobile',
    Api = 'api',
    Unknown = 'unknown'
}


