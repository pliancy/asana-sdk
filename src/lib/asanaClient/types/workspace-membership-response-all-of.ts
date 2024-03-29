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


import { UserTaskListCompact } from './user-task-list-compact';
import { WorkspaceMembershipResponseAllOfVacationDates } from './workspace-membership-response-all-of-vacation-dates';

/**
 * 
 * @export
 * @interface WorkspaceMembershipResponseAllOf
 */
export interface WorkspaceMembershipResponseAllOf {
    /**
     * 
     * @type {UserTaskListCompact}
     * @memberof WorkspaceMembershipResponseAllOf
     */
    'user_task_list'?: UserTaskListCompact;
    /**
     * Reflects if this user still a member of the workspace.
     * @type {boolean}
     * @memberof WorkspaceMembershipResponseAllOf
     */
    'is_active'?: boolean;
    /**
     * Reflects if this user is an admin of the workspace.
     * @type {boolean}
     * @memberof WorkspaceMembershipResponseAllOf
     */
    'is_admin'?: boolean;
    /**
     * Reflects if this user is a guest of the workspace.
     * @type {boolean}
     * @memberof WorkspaceMembershipResponseAllOf
     */
    'is_guest'?: boolean;
    /**
     * 
     * @type {WorkspaceMembershipResponseAllOfVacationDates}
     * @memberof WorkspaceMembershipResponseAllOf
     */
    'vacation_dates'?: WorkspaceMembershipResponseAllOfVacationDates | null;
    /**
     * The time at which this resource was created.
     * @type {string}
     * @memberof WorkspaceMembershipResponseAllOf
     */
    'created_at'?: string;
}

