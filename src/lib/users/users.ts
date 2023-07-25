import { AxiosRequestConfig } from 'axios'
import { Configuration, ConfigurationParameters, UserResponse, UsersApi } from '../asanaClient'

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
        optFields?: Array<'name' | 'offset' | 'path' | 'uri'>,
        limit?: number,
        offset?: string,
        options: AxiosRequestConfig = {},
    ) {
        const res = await this.usersApi.getFavoritesForUser(
            userGid,
            resourceType,
            this.workspaceGid,
            optPretty,
            limit,
            offset,
            optFields,
            options,
        )
        return res.data.data
    }

    async getUser(
        userGid: string,
        optPretty?: boolean,
        optFields?: any,
        options: AxiosRequestConfig = {},
    ) {
        const res = await this.usersApi.getUser(userGid, optPretty, optFields, options)
        return res.data.data
    }

    async getUserByName(
        nameOfUser: string,
        team?: string,
        optPretty?: boolean,
        optFields?: Array<any>,
        limit?: number,
        offset?: string,
        options: AxiosRequestConfig = {},
    ) {
        const res = await this.usersApi.getUsers(
            this.workspaceGid,
            team,
            optPretty,
            limit,
            offset,
            optFields,
            options,
        )
        const { data } = res as never as { data: { data: UserResponse[] } }
        return data.data?.find((e) => e.name === nameOfUser)
    }

    async getUsers(
        team?: string,
        optPretty?: boolean,
        optFields?: Array<
            | 'email'
            | 'name'
            | 'offset'
            | 'path'
            | 'photo'
            | 'photo.image_1024x1024'
            | 'photo.image_128x128'
            | 'photo.image_21x21'
            | 'photo.image_27x27'
            | 'photo.image_36x36'
            | 'photo.image_60x60'
            | 'uri'
            | 'workspaces'
            | 'workspaces.name'
        >,
        limit?: number,
        offset?: string,
        options: AxiosRequestConfig = {},
    ) {
        const res = await this.usersApi.getUsers(
            this.workspaceGid,
            team,
            optPretty,
            limit,
            offset,
            optFields,
            options,
        )

        const { data } = res as never as { data: { data: UserResponse[] } }

        return data.data
    }

    async getUsersForTeam(
        teamGid: string,
        optPretty?: boolean,
        optFields?: Array<any>,
        offset?: string,
        options: AxiosRequestConfig = {},
    ) {
        const res = await this.usersApi.getUsersForTeam(
            teamGid,
            optPretty,
            offset,
            optFields,
            options,
        )
        return res.data.data
    }

    async getUsersForWorkspace(
        optPretty?: boolean,
        optFields?: Array<any>,
        offset?: string,
        options: AxiosRequestConfig = {},
    ) {
        const res = await this.usersApi.getUsersForWorkspace(
            this.workspaceGid,
            optPretty,
            offset,
            optFields,
            options,
        )
        return res.data.data
    }
}
