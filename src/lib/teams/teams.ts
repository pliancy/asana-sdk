import {
    Configuration,
    ConfigurationParameters,
    TeamAddUserRequest,
    TeamRequest,
    TeamsApi,
} from '../asanaClient'

export class Teams {
    readonly teamsApi: TeamsApi
    constructor(
        private readonly configuration: ConfigurationParameters,
        private readonly workspaceGid: string,
    ) {
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
        if (!data.organization) data.organization = this.workspaceGid
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
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.getTeamsForOrganization(optPretty, optFields, limit, offset, options)

        if (res) return res.find((e) => e.name === teamName)
        else return null
    }

    async getTeamsForOrganization(
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.teamsApi.getTeamsForOrganization(
            this.workspaceGid,
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
        userGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.teamsApi.removeUserForTeam(
            teamGid,
            { data: { user: userGid } },
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async removeUsersForTeam(
        teamGid: string,
        userGids: string[],
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const removed = []
        const errors = []
        for (const e of userGids) {
            try {
                await this.removeUserForTeam(teamGid, e, optPretty, optFields, options)
                removed.push(e)
            } catch (error) {
                errors.push({ userGid: e, error })
            }
        }
        return {
            removed,
            errors,
        }
    }
}
