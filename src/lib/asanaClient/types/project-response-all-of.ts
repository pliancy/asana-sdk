/* tslint:disable */
/* eslint-disable */
/**
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { CustomFieldCompact } from './custom-field-compact';
import { ProjectBriefCompact } from './project-brief-compact';
import { ProjectTemplateCompact } from './project-template-compact';
import { TeamCompact } from './team-compact';
import { UserCompact } from './user-compact';
import { WorkspaceCompact } from './workspace-compact';

/**
 * 
 * @export
 * @interface ProjectResponseAllOf
 */
export interface ProjectResponseAllOf {
    /**
     * Array of Custom Fields.
     * @type {Array<CustomFieldCompact>}
     * @memberof ProjectResponseAllOf
     */
    'custom_fields'?: Array<CustomFieldCompact>;
    /**
     * True if the project is currently marked complete, false if not.
     * @type {boolean}
     * @memberof ProjectResponseAllOf
     */
    'completed'?: boolean;
    /**
     * The time at which this project was completed, or null if the project is not completed.
     * @type {string}
     * @memberof ProjectResponseAllOf
     */
    'completed_at'?: string | null;
    /**
     * 
     * @type {UserCompact}
     * @memberof ProjectResponseAllOf
     */
    'completed_by'?: UserCompact;
    /**
     * Array of users following this project. Followers are a subset of members who have opted in to receive \"tasks added\" notifications for a project.
     * @type {Array<UserCompact>}
     * @memberof ProjectResponseAllOf
     */
    'followers'?: Array<UserCompact>;
    /**
     * The current owner of the project, may be null.
     * @type {UserCompact & object}
     * @memberof ProjectResponseAllOf
     */
    'owner'?: UserCompact & object;
    /**
     * 
     * @type {TeamCompact & object}
     * @memberof ProjectResponseAllOf
     */
    'team'?: TeamCompact & object;
    /**
     * The icon for a project.
     * @type {string}
     * @memberof ProjectResponseAllOf
     */
    'icon'?: ProjectResponseAllOfIconEnum;
    /**
     * A url that points directly to the object within Asana.
     * @type {string}
     * @memberof ProjectResponseAllOf
     */
    'permalink_url'?: string;
    /**
     * 
     * @type {ProjectBriefCompact & object}
     * @memberof ProjectResponseAllOf
     */
    'project_brief'?: ProjectBriefCompact & object;
    /**
     * 
     * @type {ProjectTemplateCompact & object}
     * @memberof ProjectResponseAllOf
     */
    'created_from_template'?: ProjectTemplateCompact & object;
    /**
     * 
     * @type {WorkspaceCompact & object}
     * @memberof ProjectResponseAllOf
     */
    'workspace'?: WorkspaceCompact & object;
}

/**
    * @export
    * @enum {string}
    */
export enum ProjectResponseAllOfIconEnum {
    List = 'list',
    Board = 'board',
    Timeline = 'timeline',
    Calendar = 'calendar',
    Rocket = 'rocket',
    People = 'people',
    Graph = 'graph',
    Star = 'star',
    Bug = 'bug',
    LightBulb = 'light_bulb',
    Globe = 'globe',
    Gear = 'gear',
    Notebook = 'notebook',
    Computer = 'computer',
    Check = 'check',
    Target = 'target',
    Html = 'html',
    Megaphone = 'megaphone',
    ChatBubbles = 'chat_bubbles',
    Briefcase = 'briefcase',
    PageLayout = 'page_layout',
    MountainFlag = 'mountain_flag',
    Puzzle = 'puzzle',
    Presentation = 'presentation',
    LineAndSymbols = 'line_and_symbols',
    SpeedDial = 'speed_dial',
    Ribbon = 'ribbon',
    Shoe = 'shoe',
    ShoppingBasket = 'shopping_basket',
    Map = 'map',
    Ticket = 'ticket',
    Coins = 'coins'
}

