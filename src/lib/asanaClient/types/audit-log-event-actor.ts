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
 * The entity that triggered the event. Will typically be a user.
 * @export
 * @interface AuditLogEventActor
 */
export interface AuditLogEventActor {
    /**
     * The type of actor. Can be one of `user`, `asana`, `asana_support`, `anonymous`, or `external_administrator`.
     * @type {string}
     * @memberof AuditLogEventActor
     */
    'actor_type'?: AuditLogEventActorActorTypeEnum;
    /**
     * Globally unique identifier of the actor, if it is a user.
     * @type {string}
     * @memberof AuditLogEventActor
     */
    'gid'?: string;
    /**
     * The name of the actor, if it is a user.
     * @type {string}
     * @memberof AuditLogEventActor
     */
    'name'?: string;
    /**
     * The email of the actor, if it is a user.
     * @type {string}
     * @memberof AuditLogEventActor
     */
    'email'?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum AuditLogEventActorActorTypeEnum {
    User = 'user',
    Asana = 'asana',
    AsanaSupport = 'asana_support',
    Anonymous = 'anonymous',
    ExternalAdministrator = 'external_administrator'
}


