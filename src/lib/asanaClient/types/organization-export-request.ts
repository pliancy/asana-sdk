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
 * An *organization_export* request starts a job to export the complete data of the given Organization.
 * @export
 * @interface OrganizationExportRequest
 */
export interface OrganizationExportRequest {
    /**
     * Globally unique identifier for the workspace or organization.
     * @type {string}
     * @memberof OrganizationExportRequest
     */
    'organization'?: string;
}

