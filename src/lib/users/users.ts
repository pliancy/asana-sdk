import { AxiosRequestConfig } from 'axios'
import { Configuration, ConfigurationParameters, UsersApi } from '../asanaClient'

export class Users {
    readonly usersApi: UsersApi
    constructor(
        private readonly configuration: ConfigurationParameters,
        private readonly workspaceGid: string,
    ) {
        const config = new Configuration(this.configuration)
        this.usersApi = new UsersApi(config)
    }

    async getFavoritesForUser(
        userGid: string,
        resourceType: 'portfolio' | 'project' | 'tag' | 'task' | 'user',
        optPretty?: boolean,
        optFields?: Array<string>,
        options: AxiosRequestConfig = {},
    ) {
        const res = await this.usersApi.getFavoritesForUser(
            userGid,
            resourceType,
            this.workspaceGid,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async getUser(
        userGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        options: AxiosRequestConfig = {},
    ) {
        const res = await this.usersApi.getUser(userGid, optPretty, optFields, options)
        return res.data.data
    }

    async getUserByName(
        nameOfUser: string,
        team?: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options: AxiosRequestConfig = {},
    ) {
        const res = await this.usersApi.getUsers(
            this.workspaceGid,
            team,
            optPretty,
            optFields,
            limit,
            offset,
            options,
        )
        return res.data.data?.find((e) => e.name === nameOfUser)
    }

    async getUsers(
        team?: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options: AxiosRequestConfig = {},
    ) {
        const res = await this.usersApi.getUsers(
            this.workspaceGid,
            team,
            optPretty,
            optFields,
            limit,
            offset,
            options,
        )
        return res.data.data
    }

    async getUsersForTeam(
        teamGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        offset?: string,
        options: AxiosRequestConfig = {},
    ) {
        const res = await this.usersApi.getUsersForTeam(
            teamGid,
            optPretty,
            optFields,
            offset,
            options,
        )
        return res.data.data
    }

    async getUsersForWorkspace(
        optPretty?: boolean,
        optFields?: Array<string>,
        offset?: string,
        options: AxiosRequestConfig = {},
    ) {
        const res = await this.usersApi.getUsersForWorkspace(
            this.workspaceGid,
            optPretty,
            optFields,
            offset,
            options,
        )
        return res.data.data
    }
}