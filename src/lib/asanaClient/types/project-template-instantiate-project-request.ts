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


import { DateVariableRequest } from './date-variable-request';
import { RequestedRoleRequest } from './requested-role-request';

/**
 * 
 * @export
 * @interface ProjectTemplateInstantiateProjectRequest
 */
export interface ProjectTemplateInstantiateProjectRequest {
    /**
     * The name of the new project.
     * @type {string}
     * @memberof ProjectTemplateInstantiateProjectRequest
     */
    'name': string;
    /**
     * *Optional*. Sets the team of the new project. If the project template exists in an _organization_, you may specify a value for `team`. If no value is provided then it defaults to the same team as the project template.
     * @type {string}
     * @memberof ProjectTemplateInstantiateProjectRequest
     */
    'team'?: string;
    /**
     * Sets the project to public to its team.
     * @type {boolean}
     * @memberof ProjectTemplateInstantiateProjectRequest
     */
    'public'?: boolean;
    /**
     * *Optional*. If set to `true`, the endpoint returns an \"Unprocessable Entity\" error if you fail to provide a calendar date value for any date variable. If set to `false`, a default date is used for each unfulfilled date variable (e.g., the current date is used as the Start Date of a project).
     * @type {boolean}
     * @memberof ProjectTemplateInstantiateProjectRequest
     */
    'is_strict'?: boolean;
    /**
     * Array of mappings of date variables to calendar dates.
     * @type {Array<DateVariableRequest>}
     * @memberof ProjectTemplateInstantiateProjectRequest
     */
    'requested_dates'?: Array<DateVariableRequest>;
    /**
     * Array of mappings of template roles to user ids
     * @type {Array<RequestedRoleRequest>}
     * @memberof ProjectTemplateInstantiateProjectRequest
     */
    'requested_roles'?: Array<RequestedRoleRequest>;
}

