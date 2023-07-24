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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorResponse } from '../types';
// @ts-ignore
import { InlineObject15 } from '../types';
// @ts-ignore
import { InlineResponse2012 } from '../types';
/**
 * OrganizationExportsApi - axios parameter creator
 * @export
 */
export const OrganizationExportsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.
         * @summary Create an organization export request
         * @param {InlineObject15} inlineObject15 
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOrganizationExport: async (inlineObject15: InlineObject15, optPretty?: boolean, optFields?: Array<string>, limit?: number, offset?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'inlineObject15' is not null or undefined
            assertParamExists('createOrganizationExport', 'inlineObject15', inlineObject15)
            const localVarPath = `/organization_exports`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)

            // authentication personalAccessToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (optPretty !== undefined) {
                localVarQueryParameter['opt_pretty'] = optPretty;
            }

            if (optFields) {
                localVarQueryParameter['opt_fields'] = optFields.join(COLLECTION_FORMATS.csv);
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject15, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns details of a previously-requested Organization export.
         * @summary Get details on an org export request
         * @param {string} organizationExportGid Globally unique identifier for the organization export.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrganizationExport: async (organizationExportGid: string, optPretty?: boolean, optFields?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'organizationExportGid' is not null or undefined
            assertParamExists('getOrganizationExport', 'organizationExportGid', organizationExportGid)
            const localVarPath = `/organization_exports/{organization_export_gid}`
                .replace(`{${"organization_export_gid"}}`, encodeURIComponent(String(organizationExportGid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)

            // authentication personalAccessToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (optPretty !== undefined) {
                localVarQueryParameter['opt_pretty'] = optPretty;
            }

            if (optFields) {
                localVarQueryParameter['opt_fields'] = optFields.join(COLLECTION_FORMATS.csv);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OrganizationExportsApi - functional programming interface
 * @export
 */
export const OrganizationExportsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OrganizationExportsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.
         * @summary Create an organization export request
         * @param {InlineObject15} inlineObject15 
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOrganizationExport(inlineObject15: InlineObject15, optPretty?: boolean, optFields?: Array<string>, limit?: number, offset?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2012>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOrganizationExport(inlineObject15, optPretty, optFields, limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns details of a previously-requested Organization export.
         * @summary Get details on an org export request
         * @param {string} organizationExportGid Globally unique identifier for the organization export.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOrganizationExport(organizationExportGid: string, optPretty?: boolean, optFields?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2012>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOrganizationExport(organizationExportGid, optPretty, optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OrganizationExportsApi - factory interface
 * @export
 */
export const OrganizationExportsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrganizationExportsApiFp(configuration)
    return {
        /**
         * This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.
         * @summary Create an organization export request
         * @param {InlineObject15} inlineObject15 
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOrganizationExport(inlineObject15: InlineObject15, optPretty?: boolean, optFields?: Array<string>, limit?: number, offset?: string, options?: any): AxiosPromise<InlineResponse2012> {
            return localVarFp.createOrganizationExport(inlineObject15, optPretty, optFields, limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns details of a previously-requested Organization export.
         * @summary Get details on an org export request
         * @param {string} organizationExportGid Globally unique identifier for the organization export.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrganizationExport(organizationExportGid: string, optPretty?: boolean, optFields?: Array<string>, options?: any): AxiosPromise<InlineResponse2012> {
            return localVarFp.getOrganizationExport(organizationExportGid, optPretty, optFields, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OrganizationExportsApi - object-oriented interface
 * @export
 * @class OrganizationExportsApi
 * @extends {BaseAPI}
 */
export class OrganizationExportsApi extends BaseAPI {
    /**
     * This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.
     * @summary Create an organization export request
     * @param {InlineObject15} inlineObject15 
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationExportsApi
     */
    public createOrganizationExport(inlineObject15: InlineObject15, optPretty?: boolean, optFields?: Array<string>, limit?: number, offset?: string, options?: AxiosRequestConfig) {
        return OrganizationExportsApiFp(this.configuration).createOrganizationExport(inlineObject15, optPretty, optFields, limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns details of a previously-requested Organization export.
     * @summary Get details on an org export request
     * @param {string} organizationExportGid Globally unique identifier for the organization export.
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationExportsApi
     */
    public getOrganizationExport(organizationExportGid: string, optPretty?: boolean, optFields?: Array<string>, options?: AxiosRequestConfig) {
        return OrganizationExportsApiFp(this.configuration).getOrganizationExport(organizationExportGid, optPretty, optFields, options).then((request) => request(this.axios, this.basePath));
    }
}
