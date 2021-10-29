import {
    Configuration,
    ConfigurationParameters,
    InlineObject60,
    InlineObject61,
    InlineObject62,
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
        inlineObject61: InlineObject61,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.teamsApi.addUserForTeam(
            teamGid,
            inlineObject61,
            optPretty,
            optFields,
            options,
        )

        return res.data.data
    }

    async createTeam(
        inlineObject60: InlineObject60,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.teamsApi.createTeam(
            inlineObject60,
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
        inlineObject62: InlineObject62,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.teamsApi.removeUserForTeam(
            teamGid,
            inlineObject62,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }
}
