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


import { GoalCompact } from './goal-compact';
import { GoalMembershipResponse } from './goal-membership-response';
import { MemberCompact } from './member-compact';
import { ProjectCompact } from './project-compact';
import { ProjectMembershipCompactResponse } from './project-membership-compact-response';
import { UserCompact } from './user-compact';
import { WorkspaceCompact } from './workspace-compact';

/**
 * 
 * @export
 * @interface MembershipResponse
 */
export interface MembershipResponse {
    /**
     * Globally unique identifier of the resource, as a string.
     * @type {string}
     * @memberof MembershipResponse
     */
    'gid'?: string;
    /**
     * The base type of this resource.
     * @type {string}
     * @memberof MembershipResponse
     */
    'resource_type'?: string;
    /**
     * Type of the membership.
     * @type {string}
     * @memberof MembershipResponse
     */
    'resource_subtype'?: string;
    /**
     * 
     * @type {MemberCompact}
     * @memberof MembershipResponse
     */
    'member'?: MemberCompact;
    /**
     * 
     * @type {ProjectCompact}
     * @memberof MembershipResponse
     */
    'parent'?: ProjectCompact;
    /**
     * Describes if the member is a commenter or editor in goal.
     * @type {string}
     * @memberof MembershipResponse
     */
    'role'?: MembershipResponseRoleEnum;
    /**
     * 
     * @type {GoalCompact & object}
     * @memberof MembershipResponse
     */
    'goal'?: GoalCompact & object;
    /**
     * 
     * @type {UserCompact & object}
     * @memberof MembershipResponse
     */
    'user'?: UserCompact & object;
    /**
     * 
     * @type {WorkspaceCompact & object}
     * @memberof MembershipResponse
     */
    'workspace'?: WorkspaceCompact & object;
    /**
     * Whether the member has admin, editor, commenter, or viewer access to the project.
     * @type {string}
     * @memberof MembershipResponse
     */
    'access_level'?: MembershipResponseAccessLevelEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum MembershipResponseRoleEnum {
    Commenter = 'commenter',
    Editor = 'editor'
}
/**
    * @export
    * @enum {string}
    */
export enum MembershipResponseAccessLevelEnum {
    Admin = 'admin',
    Editor = 'editor',
    Commenter = 'commenter',
    Viewer = 'viewer'
}


