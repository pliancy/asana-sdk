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


import { UserCompact } from './user-compact';
import { WorkspaceCompact } from './workspace-compact';

/**
 * A user task list represents the tasks assigned to a particular user. It provides API access to a user’s [My Tasks](https://asana.com/guide/help/fundamentals/my-tasks) view in Asana.
 * @export
 * @interface UserTaskListCompactAllOf
 */
export interface UserTaskListCompactAllOf {
    /**
     * The name of the user task list.
     * @type {string}
     * @memberof UserTaskListCompactAllOf
     */
    'name'?: string;
    /**
     * The owner of the user task list, i.e. the person whose My Tasks is represented by this resource.
     * @type {UserCompact}
     * @memberof UserTaskListCompactAllOf
     */
    'owner'?: UserCompact;
    /**
     * The workspace in which the user task list is located.
     * @type {WorkspaceCompact}
     * @memberof UserTaskListCompactAllOf
     */
    'workspace'?: WorkspaceCompact;
}

