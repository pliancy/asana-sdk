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
import { InlineResponse20016 } from '../types';
// @ts-ignore
import { InlineResponse20017 } from '../types';
/**
 * PortfolioMembershipsApi - axios parameter creator
 * @export
 */
export const PortfolioMembershipsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the complete portfolio record for a single portfolio membership.
         * @summary Get a portfolio membership
         * @param {string} portfolioMembershipGid 
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'portfolio' | 'portfolio.name' | 'user' | 'user.name'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPortfolioMembership: async (portfolioMembershipGid: string, optPretty?: boolean, optFields?: Array<'portfolio' | 'portfolio.name' | 'user' | 'user.name'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'portfolioMembershipGid' is not null or undefined
            assertParamExists('getPortfolioMembership', 'portfolioMembershipGid', portfolioMembershipGid)
            const localVarPath = `/portfolio_memberships/{portfolio_membership_gid}`
                .replace(`{${"portfolio_membership_gid"}}`, encodeURIComponent(String(portfolioMembershipGid)));
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
         * Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.
         * @summary Get multiple portfolio memberships
         * @param {string} [portfolio] The portfolio to filter results on.
         * @param {string} [workspace] The workspace to filter results on.
         * @param {string} [user] A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPortfolioMemberships: async (portfolio?: string, workspace?: string, user?: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/portfolio_memberships`;
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

            if (portfolio !== undefined) {
                localVarQueryParameter['portfolio'] = portfolio;
            }

            if (workspace !== undefined) {
                localVarQueryParameter['workspace'] = workspace;
            }

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
        /**
         * Returns the compact portfolio membership records for the portfolio.
         * @summary Get memberships from a portfolio
         * @param {string} portfolioGid Globally unique identifier for the portfolio.
         * @param {string} [user] A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPortfolioMembershipsForPortfolio: async (portfolioGid: string, user?: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'portfolioGid' is not null or undefined
            assertParamExists('getPortfolioMembershipsForPortfolio', 'portfolioGid', portfolioGid)
            const localVarPath = `/portfolios/{portfolio_gid}/portfolio_memberships`
                .replace(`{${"portfolio_gid"}}`, encodeURIComponent(String(portfolioGid)));
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
 * PortfolioMembershipsApi - functional programming interface
 * @export
 */
export const PortfolioMembershipsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PortfolioMembershipsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the complete portfolio record for a single portfolio membership.
         * @summary Get a portfolio membership
         * @param {string} portfolioMembershipGid 
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'portfolio' | 'portfolio.name' | 'user' | 'user.name'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPortfolioMembership(portfolioMembershipGid: string, optPretty?: boolean, optFields?: Array<'portfolio' | 'portfolio.name' | 'user' | 'user.name'>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20017>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortfolioMembership(portfolioMembershipGid, optPretty, optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.
         * @summary Get multiple portfolio memberships
         * @param {string} [portfolio] The portfolio to filter results on.
         * @param {string} [workspace] The workspace to filter results on.
         * @param {string} [user] A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPortfolioMemberships(portfolio?: string, workspace?: string, user?: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20016>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortfolioMemberships(portfolio, workspace, user, optPretty, limit, offset, optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the compact portfolio membership records for the portfolio.
         * @summary Get memberships from a portfolio
         * @param {string} portfolioGid Globally unique identifier for the portfolio.
         * @param {string} [user] A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPortfolioMembershipsForPortfolio(portfolioGid: string, user?: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20016>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortfolioMembershipsForPortfolio(portfolioGid, user, optPretty, limit, offset, optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PortfolioMembershipsApi - factory interface
 * @export
 */
export const PortfolioMembershipsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PortfolioMembershipsApiFp(configuration)
    return {
        /**
         * Returns the complete portfolio record for a single portfolio membership.
         * @summary Get a portfolio membership
         * @param {string} portfolioMembershipGid 
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'portfolio' | 'portfolio.name' | 'user' | 'user.name'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPortfolioMembership(portfolioMembershipGid: string, optPretty?: boolean, optFields?: Array<'portfolio' | 'portfolio.name' | 'user' | 'user.name'>, options?: any): AxiosPromise<InlineResponse20017> {
            return localVarFp.getPortfolioMembership(portfolioMembershipGid, optPretty, optFields, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.
         * @summary Get multiple portfolio memberships
         * @param {string} [portfolio] The portfolio to filter results on.
         * @param {string} [workspace] The workspace to filter results on.
         * @param {string} [user] A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPortfolioMemberships(portfolio?: string, workspace?: string, user?: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>, options?: any): AxiosPromise<InlineResponse20016> {
            return localVarFp.getPortfolioMemberships(portfolio, workspace, user, optPretty, limit, offset, optFields, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the compact portfolio membership records for the portfolio.
         * @summary Get memberships from a portfolio
         * @param {string} portfolioGid Globally unique identifier for the portfolio.
         * @param {string} [user] A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPortfolioMembershipsForPortfolio(portfolioGid: string, user?: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>, options?: any): AxiosPromise<InlineResponse20016> {
            return localVarFp.getPortfolioMembershipsForPortfolio(portfolioGid, user, optPretty, limit, offset, optFields, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PortfolioMembershipsApi - object-oriented interface
 * @export
 * @class PortfolioMembershipsApi
 * @extends {BaseAPI}
 */
export class PortfolioMembershipsApi extends BaseAPI {
    /**
     * Returns the complete portfolio record for a single portfolio membership.
     * @summary Get a portfolio membership
     * @param {string} portfolioMembershipGid 
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array<'portfolio' | 'portfolio.name' | 'user' | 'user.name'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortfolioMembershipsApi
     */
    public getPortfolioMembership(portfolioMembershipGid: string, optPretty?: boolean, optFields?: Array<'portfolio' | 'portfolio.name' | 'user' | 'user.name'>, options?: AxiosRequestConfig) {
        return PortfolioMembershipsApiFp(this.configuration).getPortfolioMembership(portfolioMembershipGid, optPretty, optFields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.
     * @summary Get multiple portfolio memberships
     * @param {string} [portfolio] The portfolio to filter results on.
     * @param {string} [workspace] The workspace to filter results on.
     * @param {string} [user] A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
     * @param {Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortfolioMembershipsApi
     */
    public getPortfolioMemberships(portfolio?: string, workspace?: string, user?: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>, options?: AxiosRequestConfig) {
        return PortfolioMembershipsApiFp(this.configuration).getPortfolioMemberships(portfolio, workspace, user, optPretty, limit, offset, optFields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the compact portfolio membership records for the portfolio.
     * @summary Get memberships from a portfolio
     * @param {string} portfolioGid Globally unique identifier for the portfolio.
     * @param {string} [user] A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
     * @param {Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortfolioMembershipsApi
     */
    public getPortfolioMembershipsForPortfolio(portfolioGid: string, user?: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'offset' | 'path' | 'portfolio' | 'portfolio.name' | 'uri' | 'user' | 'user.name'>, options?: AxiosRequestConfig) {
        return PortfolioMembershipsApiFp(this.configuration).getPortfolioMembershipsForPortfolio(portfolioGid, user, optPretty, limit, offset, optFields, options).then((request) => request(this.axios, this.basePath));
    }
}
