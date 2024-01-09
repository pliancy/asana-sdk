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


import { ProjectCompact } from './project-compact';
import { TaskTemplateRecipe } from './task-template-recipe';
import { UserCompact } from './user-compact';

/**
 * 
 * @export
 * @interface TaskTemplateResponseAllOf
 */
export interface TaskTemplateResponseAllOf {
    /**
     * Name of the task template.
     * @type {string}
     * @memberof TaskTemplateResponseAllOf
     */
    'name'?: string;
    /**
     * The project that this task template belongs to.
     * @type {ProjectCompact}
     * @memberof TaskTemplateResponseAllOf
     */
    'project'?: ProjectCompact | null;
    /**
     * The configuration for the task that will be created from this template.
     * @type {TaskTemplateRecipe}
     * @memberof TaskTemplateResponseAllOf
     */
    'template'?: TaskTemplateRecipe;
    /**
     * The user who created this task template.
     * @type {UserCompact}
     * @memberof TaskTemplateResponseAllOf
     */
    'created_by'?: UserCompact;
    /**
     * The time at which this task template was created.
     * @type {string}
     * @memberof TaskTemplateResponseAllOf
     */
    'created_at'?: string;
}
