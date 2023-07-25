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
 * @interface RuleTriggerRequest
 */
export interface RuleTriggerRequest {
    /**
     * The ID of the resource. For the duration of the beta, this resource is always a task, and this task must exist in the project in which the rule is created.
     * @type {string}
     * @memberof RuleTriggerRequest
     */
    'resource': string;
    /**
     * The dynamic keys and values of the request. These fields are intended to be used in the action for the rule associated with this trigger.
     * @type {{ [key: string]: object; }}
     * @memberof RuleTriggerRequest
     */
    'action_data': { [key: string]: object; };
}
