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
import { UserTaskListCompact } from './user-task-list-compact';
import { WorkspaceCompact } from './workspace-compact';
import { WorkspaceMembershipCompact } from './workspace-membership-compact';
import { WorkspaceMembershipResponseAllOf } from './workspace-membership-response-all-of';
import { WorkspaceMembershipResponseAllOfVacationDates } from './workspace-membership-response-all-of-vacation-dates';

/**
 * @type WorkspaceMembershipResponse
 * @export
 */
export type WorkspaceMembershipResponse = WorkspaceMembershipCompact & WorkspaceMembershipResponseAllOf;


