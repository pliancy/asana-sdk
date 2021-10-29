import {
    Configuration,
    ConfigurationParameters,
    TeamAddUserRequest,
    TeamRemoveUserRequest,
    TeamRequest,
    TeamsApi,
} from '../asanaClient'

export class Teams {
    readonly teamsApi: TeamsApi
    constructor(private readonly configuration: ConfigurationParameters) {
        const config = new Configuration(this.configuration)
        this.teamsApi = new TeamsApi(config)
    }

    async addUserForTeam(
        teamGid: string,
        data: TeamAddUserRequest,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.teamsApi.addUserForTeam(
            teamGid,
            { data },
            optPretty,
            optFields,
            options,
        )

        return res.data.data
    }

    async createTeam(
        data: TeamRequest,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.teamsApi.createTeam(
            { data },
            optPretty,
            optFields,
            limit,
            offset,
            options,
        )

        return res.data.data
    }

    async getTeam(
        teamGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.teamsApi.getTeam(
            teamGid,
            optPretty,
            optFields,
            limit,
            offset,
            options,
        )
        return res.data.data
    }

    async getTeamByName(
        teamName: string,
        workspaceGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.teamsApi.getTeamsForOrganization(
            workspaceGid,
            optPretty,
            optFields,
            limit,
            offset,
            options,
        )

        return res.data.data?.find((e) => e.name === teamName)
    }

    async getTeamsForOrganization(
        workspaceGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.teamsApi.getTeamsForOrganization(
            workspaceGid,
            optPretty,
            optFields,
            limit,
            offset,
            options,
        )
        return res.data.data
    }

    async getTeamsForUser(
        userGid: string,
        organization: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.teamsApi.getTeamsForUser(
            userGid,
            organization,
            optPretty,
            optFields,
            limit,
            offset,
            options,
        )

        return res.data.data
    }

    async removeUserForTeam(
        teamGid: string,
        data: TeamRemoveUserRequest,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.teamsApi.removeUserForTeam(
            teamGid,
            { data },
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }
}
