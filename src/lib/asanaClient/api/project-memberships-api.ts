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
import { InlineResponse20022 } from '../types';
// @ts-ignore
import { InlineResponse20023 } from '../types';
/**
 * ProjectMembershipsApi - axios parameter creator
 * @export
 */
export const ProjectMembershipsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the complete project record for a single project membership.
         * @summary Get a project membership
         * @param {string} projectMembershipGid 
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'access_level' | 'member' | 'member.name' | 'project' | 'project.name' | 'user' | 'user.name' | 'write_access'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectMembership: async (projectMembershipGid: string, optPretty?: boolean, optFields?: Array<'access_level' | 'member' | 'member.name' | 'project' | 'project.name' | 'user' | 'user.name' | 'write_access'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectMembershipGid' is not null or undefined
            assertParamExists('getProjectMembership', 'projectMembershipGid', projectMembershipGid)
            const localVarPath = `/project_memberships/{project_membership_gid}`
                .replace(`{${"project_membership_gid"}}`, encodeURIComponent(String(projectMembershipGid)));
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
         * Returns the compact project membership records for the project.
         * @summary Get memberships from a project
         * @param {string} projectGid Globally unique identifier for the project.
         * @param {string} [user] A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {Array<'access_level' | 'member' | 'member.name' | 'offset' | 'path' | 'project' | 'project.name' | 'uri' | 'user' | 'user.name' | 'write_access'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectMembershipsForProject: async (projectGid: string, user?: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'access_level' | 'member' | 'member.name' | 'offset' | 'path' | 'project' | 'project.name' | 'uri' | 'user' | 'user.name' | 'write_access'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectGid' is not null or undefined
            assertParamExists('getProjectMembershipsForProject', 'projectGid', projectGid)
            const localVarPath = `/projects/{project_gid}/project_memberships`
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

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }

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
 * ProjectMembershipsApi - functional programming interface
 * @export
 */
export const ProjectMembershipsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProjectMembershipsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the complete project record for a single project membership.
         * @summary Get a project membership
         * @param {string} projectMembershipGid 
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'access_level' | 'member' | 'member.name' | 'project' | 'project.name' | 'user' | 'user.name' | 'write_access'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectMembership(projectMembershipGid: string, optPretty?: boolean, optFields?: Array<'access_level' | 'member' | 'member.name' | 'project' | 'project.name' | 'user' | 'user.name' | 'write_access'>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20022>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectMembership(projectMembershipGid, optPretty, optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the compact project membership records for the project.
         * @summary Get memberships from a project
         * @param {string} projectGid Globally unique identifier for the project.
         * @param {string} [user] A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {Array<'access_level' | 'member' | 'member.name' | 'offset' | 'path' | 'project' | 'project.name' | 'uri' | 'user' | 'user.name' | 'write_access'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectMembershipsForProject(projectGid: string, user?: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'access_level' | 'member' | 'member.name' | 'offset' | 'path' | 'project' | 'project.name' | 'uri' | 'user' | 'user.name' | 'write_access'>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20023>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectMembershipsForProject(projectGid, user, optPretty, limit, offset, optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProjectMembershipsApi - factory interface
 * @export
 */
export const ProjectMembershipsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProjectMembershipsApiFp(configuration)
    return {
        /**
         * Returns the complete project record for a single project membership.
         * @summary Get a project membership
         * @param {string} projectMembershipGid 
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'access_level' | 'member' | 'member.name' | 'project' | 'project.name' | 'user' | 'user.name' | 'write_access'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectMembership(projectMembershipGid: string, optPretty?: boolean, optFields?: Array<'access_level' | 'member' | 'member.name' | 'project' | 'project.name' | 'user' | 'user.name' | 'write_access'>, options?: any): AxiosPromise<InlineResponse20022> {
            return localVarFp.getProjectMembership(projectMembershipGid, optPretty, optFields, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the compact project membership records for the project.
         * @summary Get memberships from a project
         * @param {string} projectGid Globally unique identifier for the project.
         * @param {string} [user] A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {Array<'access_level' | 'member' | 'member.name' | 'offset' | 'path' | 'project' | 'project.name' | 'uri' | 'user' | 'user.name' | 'write_access'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectMembershipsForProject(projectGid: string, user?: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'access_level' | 'member' | 'member.name' | 'offset' | 'path' | 'project' | 'project.name' | 'uri' | 'user' | 'user.name' | 'write_access'>, options?: any): AxiosPromise<InlineResponse20023> {
            return localVarFp.getProjectMembershipsForProject(projectGid, user, optPretty, limit, offset, optFields, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProjectMembershipsApi - object-oriented interface
 * @export
 * @class ProjectMembershipsApi
 * @extends {BaseAPI}
 */
export class ProjectMembershipsApi extends BaseAPI {
    /**
     * Returns the complete project record for a single project membership.
     * @summary Get a project membership
     * @param {string} projectMembershipGid 
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array<'access_level' | 'member' | 'member.name' | 'project' | 'project.name' | 'user' | 'user.name' | 'write_access'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectMembershipsApi
     */
    public getProjectMembership(projectMembershipGid: string, optPretty?: boolean, optFields?: Array<'access_level' | 'member' | 'member.name' | 'project' | 'project.name' | 'user' | 'user.name' | 'write_access'>, options?: AxiosRequestConfig) {
        return ProjectMembershipsApiFp(this.configuration).getProjectMembership(projectMembershipGid, optPretty, optFields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the compact project membership records for the project.
     * @summary Get memberships from a project
     * @param {string} projectGid Globally unique identifier for the project.
     * @param {string} [user] A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
     * @param {Array<'access_level' | 'member' | 'member.name' | 'offset' | 'path' | 'project' | 'project.name' | 'uri' | 'user' | 'user.name' | 'write_access'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectMembershipsApi
     */
    public getProjectMembershipsForProject(projectGid: string, user?: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'access_level' | 'member' | 'member.name' | 'offset' | 'path' | 'project' | 'project.name' | 'uri' | 'user' | 'user.name' | 'write_access'>, options?: AxiosRequestConfig) {
        return ProjectMembershipsApiFp(this.configuration).getProjectMembershipsForProject(projectGid, user, optPretty, limit, offset, optFields, options).then((request) => request(this.axios, this.basePath));
    }
}
