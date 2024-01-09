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
import { InlineObject27 } from '../types';
// @ts-ignore
import { InlineResponse2001 } from '../types';
// @ts-ignore
import { InlineResponse20024 } from '../types';
// @ts-ignore
import { InlineResponse20025 } from '../types';
/**
 * ProjectStatusesApi - axios parameter creator
 * @export
 */
export const ProjectStatusesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * *Deprecated: new integrations should prefer the `/status_updates` route.*  Creates a new status update on the project.  Returns the full record of the newly created project status update.
         * @summary Create a project status
         * @param {string} projectGid Globally unique identifier for the project.
         * @param {InlineObject27} inlineObject27 
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProjectStatusForProject: async (projectGid: string, inlineObject27: InlineObject27, optPretty?: boolean, optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectGid' is not null or undefined
            assertParamExists('createProjectStatusForProject', 'projectGid', projectGid)
            // verify required parameter 'inlineObject27' is not null or undefined
            assertParamExists('createProjectStatusForProject', 'inlineObject27', inlineObject27)
            const localVarPath = `/projects/{project_gid}/project_statuses`
                .replace(`{${"project_gid"}}`, encodeURIComponent(String(projectGid)));
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject27, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Deletes a specific, existing project status update.  Returns an empty data record.
         * @summary Delete a project status
         * @param {string} projectStatusGid The project status update to get.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProjectStatus: async (projectStatusGid: string, optPretty?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectStatusGid' is not null or undefined
            assertParamExists('deleteProjectStatus', 'projectStatusGid', projectStatusGid)
            const localVarPath = `/project_statuses/{project_status_gid}`
                .replace(`{${"project_status_gid"}}`, encodeURIComponent(String(projectStatusGid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Returns the complete record for a single status update.
         * @summary Get a project status
         * @param {string} projectStatusGid The project status update to get.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectStatus: async (projectStatusGid: string, optPretty?: boolean, optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectStatusGid' is not null or undefined
            assertParamExists('getProjectStatus', 'projectStatusGid', projectStatusGid)
            const localVarPath = `/project_statuses/{project_status_gid}`
                .replace(`{${"project_status_gid"}}`, encodeURIComponent(String(projectStatusGid)));
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
        /**
         * *Deprecated: new integrations should prefer the `/status_updates` route.*  Returns the compact project status update records for all updates on the project.
         * @summary Get statuses from a project
         * @param {string} projectGid Globally unique identifier for the project.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'offset' | 'path' | 'text' | 'title' | 'uri'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectStatusesForProject: async (projectGid: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'offset' | 'path' | 'text' | 'title' | 'uri'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectGid' is not null or undefined
            assertParamExists('getProjectStatusesForProject', 'projectGid', projectGid)
            const localVarPath = `/projects/{project_gid}/project_statuses`
                .replace(`{${"project_gid"}}`, encodeURIComponent(String(projectGid)));
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

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
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
 * ProjectStatusesApi - functional programming interface
 * @export
 */
export const ProjectStatusesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProjectStatusesApiAxiosParamCreator(configuration)
    return {
        /**
         * *Deprecated: new integrations should prefer the `/status_updates` route.*  Creates a new status update on the project.  Returns the full record of the newly created project status update.
         * @summary Create a project status
         * @param {string} projectGid Globally unique identifier for the project.
         * @param {InlineObject27} inlineObject27 
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProjectStatusForProject(projectGid: string, inlineObject27: InlineObject27, optPretty?: boolean, optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20024>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProjectStatusForProject(projectGid, inlineObject27, optPretty, optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Deletes a specific, existing project status update.  Returns an empty data record.
         * @summary Delete a project status
         * @param {string} projectStatusGid The project status update to get.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteProjectStatus(projectStatusGid: string, optPretty?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProjectStatus(projectStatusGid, optPretty, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Returns the complete record for a single status update.
         * @summary Get a project status
         * @param {string} projectStatusGid The project status update to get.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectStatus(projectStatusGid: string, optPretty?: boolean, optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20024>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectStatus(projectStatusGid, optPretty, optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates` route.*  Returns the compact project status update records for all updates on the project.
         * @summary Get statuses from a project
         * @param {string} projectGid Globally unique identifier for the project.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'offset' | 'path' | 'text' | 'title' | 'uri'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectStatusesForProject(projectGid: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'offset' | 'path' | 'text' | 'title' | 'uri'>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20025>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectStatusesForProject(projectGid, optPretty, limit, offset, optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProjectStatusesApi - factory interface
 * @export
 */
export const ProjectStatusesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProjectStatusesApiFp(configuration)
    return {
        /**
         * *Deprecated: new integrations should prefer the `/status_updates` route.*  Creates a new status update on the project.  Returns the full record of the newly created project status update.
         * @summary Create a project status
         * @param {string} projectGid Globally unique identifier for the project.
         * @param {InlineObject27} inlineObject27 
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProjectStatusForProject(projectGid: string, inlineObject27: InlineObject27, optPretty?: boolean, optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>, options?: any): AxiosPromise<InlineResponse20024> {
            return localVarFp.createProjectStatusForProject(projectGid, inlineObject27, optPretty, optFields, options).then((request) => request(axios, basePath));
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Deletes a specific, existing project status update.  Returns an empty data record.
         * @summary Delete a project status
         * @param {string} projectStatusGid The project status update to get.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProjectStatus(projectStatusGid: string, optPretty?: boolean, options?: any): AxiosPromise<InlineResponse2001> {
            return localVarFp.deleteProjectStatus(projectStatusGid, optPretty, options).then((request) => request(axios, basePath));
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Returns the complete record for a single status update.
         * @summary Get a project status
         * @param {string} projectStatusGid The project status update to get.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectStatus(projectStatusGid: string, optPretty?: boolean, optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>, options?: any): AxiosPromise<InlineResponse20024> {
            return localVarFp.getProjectStatus(projectStatusGid, optPretty, optFields, options).then((request) => request(axios, basePath));
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates` route.*  Returns the compact project status update records for all updates on the project.
         * @summary Get statuses from a project
         * @param {string} projectGid Globally unique identifier for the project.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'offset' | 'path' | 'text' | 'title' | 'uri'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectStatusesForProject(projectGid: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'offset' | 'path' | 'text' | 'title' | 'uri'>, options?: any): AxiosPromise<InlineResponse20025> {
            return localVarFp.getProjectStatusesForProject(projectGid, optPretty, limit, offset, optFields, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProjectStatusesApi - object-oriented interface
 * @export
 * @class ProjectStatusesApi
 * @extends {BaseAPI}
 */
export class ProjectStatusesApi extends BaseAPI {
    /**
     * *Deprecated: new integrations should prefer the `/status_updates` route.*  Creates a new status update on the project.  Returns the full record of the newly created project status update.
     * @summary Create a project status
     * @param {string} projectGid Globally unique identifier for the project.
     * @param {InlineObject27} inlineObject27 
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectStatusesApi
     */
    public createProjectStatusForProject(projectGid: string, inlineObject27: InlineObject27, optPretty?: boolean, optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>, options?: AxiosRequestConfig) {
        return ProjectStatusesApiFp(this.configuration).createProjectStatusForProject(projectGid, inlineObject27, optPretty, optFields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Deletes a specific, existing project status update.  Returns an empty data record.
     * @summary Delete a project status
     * @param {string} projectStatusGid The project status update to get.
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectStatusesApi
     */
    public deleteProjectStatus(projectStatusGid: string, optPretty?: boolean, options?: AxiosRequestConfig) {
        return ProjectStatusesApiFp(this.configuration).deleteProjectStatus(projectStatusGid, optPretty, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Returns the complete record for a single status update.
     * @summary Get a project status
     * @param {string} projectStatusGid The project status update to get.
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectStatusesApi
     */
    public getProjectStatus(projectStatusGid: string, optPretty?: boolean, optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>, options?: AxiosRequestConfig) {
        return ProjectStatusesApiFp(this.configuration).getProjectStatus(projectStatusGid, optPretty, optFields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * *Deprecated: new integrations should prefer the `/status_updates` route.*  Returns the compact project status update records for all updates on the project.
     * @summary Get statuses from a project
     * @param {string} projectGid Globally unique identifier for the project.
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
     * @param {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'offset' | 'path' | 'text' | 'title' | 'uri'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectStatusesApi
     */
    public getProjectStatusesForProject(projectGid: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'offset' | 'path' | 'text' | 'title' | 'uri'>, options?: AxiosRequestConfig) {
        return ProjectStatusesApiFp(this.configuration).getProjectStatusesForProject(projectGid, optPretty, limit, offset, optFields, options).then((request) => request(this.axios, this.basePath));
    }
}
