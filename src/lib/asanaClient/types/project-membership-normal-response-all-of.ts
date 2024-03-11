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
import { UserCompact } from './user-compact';

/**
 * 
 * @export
 * @interface ProjectMembershipNormalResponseAllOf
 */
export interface ProjectMembershipNormalResponseAllOf {
    /**
     * 
     * @type {UserCompact}
     * @memberof ProjectMembershipNormalResponseAllOf
     */
    'user'?: UserCompact;
    /**
     * 
     * @type {ProjectCompact}
     * @memberof ProjectMembershipNormalResponseAllOf
     */
    'project'?: ProjectCompact;
    /**
     * The base type of this resource.
     * @type {string}
     * @memberof ProjectMembershipNormalResponseAllOf
     */
    'resource_type'?: string;
    /**
     * Whether the member has full access or comment-only access to the project.
     * @type {string}
     * @memberof ProjectMembershipNormalResponseAllOf
     */
    'write_access'?: ProjectMembershipNormalResponseAllOfWriteAccessEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum ProjectMembershipNormalResponseAllOfWriteAccessEnum {
    FullWrite = 'full_write',
    CommentOnly = 'comment_only'
}


