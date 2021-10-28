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


import { CustomFieldSettingCompact } from './custom-field-setting-compact';
import { ProjectStatusResponse } from './project-status-response';
import { UserCompact } from './user-compact';
import { WorkspaceCompact } from './workspace-compact';

/**
 * 
 * @export
 * @interface ProjectBaseAllOf
 */
export interface ProjectBaseAllOf {
    /**
     * True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
     * @type {boolean}
     * @memberof ProjectBaseAllOf
     */
    'archived'?: boolean;
    /**
     * Color of the project.
     * @type {string}
     * @memberof ProjectBaseAllOf
     */
    'color'?: ProjectBaseAllOfColorEnum;
    /**
     * The time at which this resource was created.
     * @type {string}
     * @memberof ProjectBaseAllOf
     */
    'created_at'?: string;
    /**
     * 
     * @type {ProjectStatusResponse}
     * @memberof ProjectBaseAllOf
     */
    'current_status'?: ProjectStatusResponse | null;
    /**
     * Array of Custom Field Settings (in compact form).
     * @type {Array<CustomFieldSettingCompact>}
     * @memberof ProjectBaseAllOf
     */
    'custom_field_settings'?: Array<CustomFieldSettingCompact>;
    /**
     * The default view (list, board, calendar, or timeline) of a project.
     * @type {string}
     * @memberof ProjectBaseAllOf
     */
    'default_view'?: ProjectBaseAllOfDefaultViewEnum;
    /**
     * *Deprecated: new integrations should prefer the due_on field.*
     * @type {string}
     * @memberof ProjectBaseAllOf
     */
    'due_date'?: string | null;
    /**
     * The day on which this project is due. This takes a date with format YYYY-MM-DD.
     * @type {string}
     * @memberof ProjectBaseAllOf
     */
    'due_on'?: string | null;
    /**
     * [Opt In](/docs/input-output-options). The notes of the project with formatting as HTML.
     * @type {string}
     * @memberof ProjectBaseAllOf
     */
    'html_notes'?: string;
    /**
     * [Opt In](/docs/input-output-options). Determines if the project is a template.
     * @type {boolean}
     * @memberof ProjectBaseAllOf
     */
    'is_template'?: boolean;
    /**
     * Array of users who are members of this project.
     * @type {Array<UserCompact>}
     * @memberof ProjectBaseAllOf
     */
    'members'?: Array<UserCompact>;
    /**
     * The time at which this project was last modified. *Note: This does not currently reflect any changes in associations such as tasks or comments that may have been added or removed from the project.*
     * @type {string}
     * @memberof ProjectBaseAllOf
     */
    'modified_at'?: string;
    /**
     * Free-form textual information associated with the project (ie., its description).
     * @type {string}
     * @memberof ProjectBaseAllOf
     */
    'notes'?: string;
    /**
     * True if the project is public to the organization. If false, do not share this project with other users in this organization without explicitly checking to see if they have access.
     * @type {boolean}
     * @memberof ProjectBaseAllOf
     */
    'public'?: boolean;
    /**
     * The day on which work for this project begins, or null if the project has no start date. This takes a date with `YYYY-MM-DD` format. *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter. Additionally, start_on and due_on cannot be the same date.*
     * @type {string}
     * @memberof ProjectBaseAllOf
     */
    'start_on'?: string | null;
    /**
     * 
     * @type {WorkspaceCompact & object}
     * @memberof ProjectBaseAllOf
     */
    'workspace'?: WorkspaceCompact & object;
}

/**
    * @export
    * @enum {string}
    */
export enum ProjectBaseAllOfColorEnum {
    DarkPink = 'dark-pink',
    DarkGreen = 'dark-green',
    DarkBlue = 'dark-blue',
    DarkRed = 'dark-red',
    DarkTeal = 'dark-teal',
    DarkBrown = 'dark-brown',
    DarkOrange = 'dark-orange',
    DarkPurple = 'dark-purple',
    DarkWarmGray = 'dark-warm-gray',
    LightPink = 'light-pink',
    LightGreen = 'light-green',
    LightBlue = 'light-blue',
    LightRed = 'light-red',
    LightTeal = 'light-teal',
    LightBrown = 'light-brown',
    LightOrange = 'light-orange',
    LightPurple = 'light-purple',
    LightWarmGray = 'light-warm-gray'
}
/**
    * @export
    * @enum {string}
    */
export enum ProjectBaseAllOfDefaultViewEnum {
    List = 'list',
    Board = 'board',
    Calendar = 'calendar',
    Timeline = 'timeline'
}

