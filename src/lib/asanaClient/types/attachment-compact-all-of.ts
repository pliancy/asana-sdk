/* tslint:disable */
/* eslint-disable */
/**
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml).
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.
 * @export
 * @interface AttachmentCompactAllOf
 */
export interface AttachmentCompactAllOf {
    /**
     * The name of the file.
     * @type {string}
     * @memberof AttachmentCompactAllOf
     */
    'name'?: string;
    /**
     * The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `onedrive`, `box`, `vimeo`, and `external`.
     * @type {string}
     * @memberof AttachmentCompactAllOf
     */
    'resource_subtype'?: string;
}

