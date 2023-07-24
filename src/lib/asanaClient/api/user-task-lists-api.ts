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
import { InlineResponse20041 } from '../types';
/**
 * UserTaskListsApi - axios parameter creator
 * @export
 */
export const UserTaskListsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the full record for a user task list.
         * @summary Get a user task list
         * @param {string} userTaskListGid Globally unique identifier for the user task list.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserTaskList: async (userTaskListGid: string, optPretty?: boolean, optFields?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userTaskListGid' is not null or undefined
            assertParamExists('getUserTaskList', 'userTaskListGid', userTaskListGid)
            const localVarPath = `/user_task_lists/{user_task_list_gid}`
                .replace(`{${"user_task_list_gid"}}`, encodeURIComponent(String(userTaskListGid)));
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
         * Returns the full record for a user\'s task list.
         * @summary Get a user\'s task list
         * @param {string} userGid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
         * @param {string} workspace The workspace in which to get the user task list.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserTaskListForUser: async (userGid: string, workspace: string, optPretty?: boolean, optFields?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userGid' is not null or undefined
            assertParamExists('getUserTaskListForUser', 'userGid', userGid)
            // verify required parameter 'workspace' is not null or undefined
            assertParamExists('getUserTaskListForUser', 'workspace', workspace)
            const localVarPath = `/users/{user_gid}/user_task_list`
                .replace(`{${"user_gid"}}`, encodeURIComponent(String(userGid)));
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

            if (workspace !== undefined) {
                localVarQueryParameter['workspace'] = workspace;
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
 * UserTaskListsApi - functional programming interface
 * @export
 */
export const UserTaskListsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserTaskListsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the full record for a user task list.
         * @summary Get a user task list
         * @param {string} userTaskListGid Globally unique identifier for the user task list.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserTaskList(userTaskListGid: string, optPretty?: boolean, optFields?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20041>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserTaskList(userTaskListGid, optPretty, optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the full record for a user\'s task list.
         * @summary Get a user\'s task list
         * @param {string} userGid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
         * @param {string} workspace The workspace in which to get the user task list.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserTaskListForUser(userGid: string, workspace: string, optPretty?: boolean, optFields?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20041>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserTaskListForUser(userGid, workspace, optPretty, optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserTaskListsApi - factory interface
 * @export
 */
export const UserTaskListsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserTaskListsApiFp(configuration)
    return {
        /**
         * Returns the full record for a user task list.
         * @summary Get a user task list
         * @param {string} userTaskListGid Globally unique identifier for the user task list.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserTaskList(userTaskListGid: string, optPretty?: boolean, optFields?: Array<string>, options?: any): AxiosPromise<InlineResponse20041> {
            return localVarFp.getUserTaskList(userTaskListGid, optPretty, optFields, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the full record for a user\'s task list.
         * @summary Get a user\'s task list
         * @param {string} userGid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
         * @param {string} workspace The workspace in which to get the user task list.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserTaskListForUser(userGid: string, workspace: string, optPretty?: boolean, optFields?: Array<string>, options?: any): AxiosPromise<InlineResponse20041> {
            return localVarFp.getUserTaskListForUser(userGid, workspace, optPretty, optFields, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserTaskListsApi - object-oriented interface
 * @export
 * @class UserTaskListsApi
 * @extends {BaseAPI}
 */
export class UserTaskListsApi extends BaseAPI {
    /**
     * Returns the full record for a user task list.
     * @summary Get a user task list
     * @param {string} userTaskListGid Globally unique identifier for the user task list.
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserTaskListsApi
     */
    public getUserTaskList(userTaskListGid: string, optPretty?: boolean, optFields?: Array<string>, options?: AxiosRequestConfig) {
        return UserTaskListsApiFp(this.configuration).getUserTaskList(userTaskListGid, optPretty, optFields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the full record for a user\'s task list.
     * @summary Get a user\'s task list
     * @param {string} userGid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {string} workspace The workspace in which to get the user task list.
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array<string>} [optFields] Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserTaskListsApi
     */
    public getUserTaskListForUser(userGid: string, workspace: string, optPretty?: boolean, optFields?: Array<string>, options?: AxiosRequestConfig) {
        return UserTaskListsApiFp(this.configuration).getUserTaskListForUser(userGid, workspace, optPretty, optFields, options).then((request) => request(this.axios, this.basePath));
    }
}
