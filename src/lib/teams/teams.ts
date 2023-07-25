import { AxiosRequestConfig } from 'axios'
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
        optFields?: Array<
            | 'is_admin'
            | 'is_guest'
            | 'is_limited_access'
            | 'team'
            | 'team.name'
            | 'user'
            | 'user.name'
        >,
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
        optFields?: Array<
            | 'description'
            | 'edit_team_name_or_description_access_level'
            | 'edit_team_visibility_or_trash_team_access_level'
            | 'guest_invite_management_access_level'
            | 'html_description'
            | 'join_request_management_access_level'
            | 'member_invite_management_access_level'
            | 'name'
            | 'organization'
            | 'organization.name'
            | 'permalink_url'
            | 'team_member_removal_access_level'
            | 'visibility'
        >,
        options?: any,
    ) {
        if (!data.organization) data.organization = this.workspaceGid
        const res = await this.teamsApi.createTeam({ data }, optPretty, optFields, options)

        return res.data.data
    }

    async getTeam(
        teamGid: string,
        optPretty?: boolean,
        optFields?: Array<
            | 'description'
            | 'edit_team_name_or_description_access_level'
            | 'edit_team_visibility_or_trash_team_access_level'
            | 'guest_invite_management_access_level'
            | 'html_description'
            | 'join_request_management_access_level'
            | 'member_invite_management_access_level'
            | 'name'
            | 'organization'
            | 'organization.name'
            | 'permalink_url'
            | 'team_member_removal_access_level'
            | 'visibility'
        >,
    ) {
        const res = await this.teamsApi.getTeam(teamGid, optPretty, optFields)
        return res.data.data
    }

    async getTeamByName(
        teamName: string,
        optPretty?: boolean,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.getTeamsForOrganization(optPretty, limit, offset, options)

        if (res) return res.find((e) => e.name === teamName)
        else return null
    }

    async getTeamsForOrganization(
        optPretty?: boolean,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.teamsApi.getTeamsForWorkspace(
            this.workspaceGid,
            optPretty,
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
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.teamsApi.getTeamsForUser(
            userGid,
            organization,
            optPretty,
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
        options?: AxiosRequestConfig,
    ) {
        const res = await this.teamsApi.removeUserForTeam(
            teamGid,
            { data: { user: userGid } },
            optPretty,
            options,
        )
        return res.data.data
    }

    async removeUsersForTeam(
        teamGid: string,
        userGids: string[],
        optPretty?: boolean,
        options?: AxiosRequestConfig,
    ) {
        const removed = []
        const errors = []
        for (const e of userGids) {
            try {
                await this.removeUserForTeam(teamGid, e, optPretty, options)
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

    async updateTeam(
        gid: string,
        data: Partial<TeamRequest>,
        optPretty?: boolean,
        optFields?: Array<
            | 'description'
            | 'edit_team_name_or_description_access_level'
            | 'edit_team_visibility_or_trash_team_access_level'
            | 'guest_invite_management_access_level'
            | 'html_description'
            | 'join_request_management_access_level'
            | 'member_invite_management_access_level'
            | 'name'
            | 'organization'
            | 'organization.name'
            | 'permalink_url'
            | 'team_member_removal_access_level'
            | 'visibility'
        >,
        options?: AxiosRequestConfig,
    ) {
        const res = await this.teamsApi.updateTeam(gid, { data }, optPretty, optFields, options)
        return res.data.data
    }
}
