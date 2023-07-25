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



/**
 * 
 * @export
 * @interface GoalBaseAllOf
 */
export interface GoalBaseAllOf {
    /**
     * The name of the goal.
     * @type {string}
     * @memberof GoalBaseAllOf
     */
    'name'?: string;
    /**
     * The notes of the goal with formatting as HTML.
     * @type {string}
     * @memberof GoalBaseAllOf
     */
    'html_notes'?: string;
    /**
     * Free-form textual information associated with the goal (i.e. its description).
     * @type {string}
     * @memberof GoalBaseAllOf
     */
    'notes'?: string;
    /**
     * The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.
     * @type {string}
     * @memberof GoalBaseAllOf
     */
    'due_on'?: string | null;
    /**
     * The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
     * @type {string}
     * @memberof GoalBaseAllOf
     */
    'start_on'?: string | null;
    /**
     * *Conditional*. This property is only present when the `workspace` provided is an organization. Whether the goal belongs to the `workspace` (and is listed as part of the workspace’s goals) or not. If it isn’t a workspace-level goal, it is a team-level goal, and is associated with the goal’s team.
     * @type {boolean}
     * @memberof GoalBaseAllOf
     */
    'is_workspace_level'?: boolean;
    /**
     * True if the goal is liked by the authorized user, false if not.
     * @type {boolean}
     * @memberof GoalBaseAllOf
     */
    'liked'?: boolean;
}

