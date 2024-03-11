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


import { TaskCompactAllOfCreatedBy } from './task-compact-all-of-created-by';

/**
 * The *task* is the basic object around which many operations in Asana are centered.
 * @export
 * @interface TaskCompactAllOf
 */
export interface TaskCompactAllOf {
    /**
     * The name of the task.
     * @type {string}
     * @memberof TaskCompactAllOf
     */
    'name'?: string;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
     * @type {string}
     * @memberof TaskCompactAllOf
     */
    'resource_subtype'?: TaskCompactAllOfResourceSubtypeEnum;
    /**
     * 
     * @type {TaskCompactAllOfCreatedBy}
     * @memberof TaskCompactAllOf
     */
    'created_by'?: TaskCompactAllOfCreatedBy;
}

/**
    * @export
    * @enum {string}
    */
export enum TaskCompactAllOfResourceSubtypeEnum {
    DefaultTask = 'default_task',
    Milestone = 'milestone',
    Section = 'section',
    Approval = 'approval'
}


