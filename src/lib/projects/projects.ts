import {
    Configuration,
    ConfigurationParameters,
    InlineObject26,
    InlineObject27,
    InlineObject28,
    InlineObject29,
    InlineObject30,
    InlineObject31,
    InlineObject32,
    InlineObject33,
    InlineObject34,
    InlineObject35,
    InlineObject36,
    ProjectsApi,
} from '../asanaClient'

export class Projects {
    readonly projectsApi: ProjectsApi
    constructor(private readonly configuration: ConfigurationParameters) {
        const config = new Configuration(this.configuration)
        this.projectsApi = new ProjectsApi(config)
    }

    async addCustomFieldSettingForProject(
        projectGid: string,
        inlineObject31: InlineObject31,
        optPretty?: boolean,
        options?: any,
    ) {
        const res = await this.projectsApi.addCustomFieldSettingForProject(
            projectGid,
            inlineObject31,
            optPretty,
            options,
        )
        return res.data.data
    }

    async addFollowersForProject(
        projectGid: string,
        inlineObject35: InlineObject35,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.addFollowersForProject(
            projectGid,
            inlineObject35,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async addMembersForProject(
        projectGid: string,
        inlineObject33: InlineObject33,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.addMembersForProject(
            projectGid,
            inlineObject33,
            optPretty,
            optFields,
            options,
        )

        return res.data.data
    }

    async createProject(
        inlineObject26: InlineObject26,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.createProject(
            inlineObject26,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async createProjectForTeam(
        teamGid: string,
        inlineObject29: InlineObject29,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.createProjectForTeam(
            teamGid,
            inlineObject29,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async createProjectForWorkspace(
        workspaceGid: string,
        inlineObject30: InlineObject30,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.createProjectForWorkspace(
            workspaceGid,
            inlineObject30,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async deleteProject(
        projectGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.deleteProject(projectGid, optPretty, optFields, options)
        return res.data.data
    }

    async duplicateProject(
        projectGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        inlineObject28?: InlineObject28,
        options?: any,
    ) {
        const res = await this.projectsApi.duplicateProject(
            projectGid,
            optPretty,
            optFields,
            inlineObject28,
            options,
        )
        return res.data.data
    }

    async getProject(
        projectGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.getProject(projectGid, optPretty, optFields, options)
        return res.data.data
    }

    async getProjects(
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        workspace?: string,
        team?: string,
        archived?: boolean,
        options?: any,
    ) {
        const res = await this.projectsApi.getProjects(
            optPretty,
            optFields,
            limit,
            offset,
            workspace,
            team,
            archived,
            options,
        )
        return res.data.data
    }

    async getProjectsForTask(
        taskGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.projectsApi.getProjectsForTask(
            taskGid,
            optPretty,
            optFields,
            limit,
            offset,
            options,
        )
        return res.data.data
    }

    async getProjectsForTeam(
        teamGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        archived?: boolean,
        options?: any,
    ) {
        const res = await this.projectsApi.getProjectsForTeam(
            teamGid,
            optPretty,
            optFields,
            limit,
            offset,
            archived,
            options,
        )
        return res.data.data
    }

    async getProjectsForWorkspace(
        workspaceGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        archived?: boolean,
        options?: any,
    ) {
        const res = await this.projectsApi.getProjectsForWorkspace(
            workspaceGid,
            optPretty,
            optFields,
            limit,
            offset,
            archived,
            options,
        )
        return res.data.data
    }

    async getTaskCountsForProject(
        projectGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.projectsApi.getTaskCountsForProject(
            projectGid,
            optPretty,
            optFields,
            limit,
            offset,
            options,
        )
        return res.data.data
    }

    async removeCustomFieldSettingForProject(
        projectGid: string,
        inlineObject32: InlineObject32,
        optPretty?: boolean,
        options?: any,
    ) {
        const res = await this.projectsApi.removeCustomFieldSettingForProject(
            projectGid,
            inlineObject32,
            optPretty,
            options,
        )
        return res.data.data
    }
    async removeFollowersForProject(
        projectGid: string,
        inlineObject36: InlineObject36,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.removeFollowersForProject(
            projectGid,
            inlineObject36,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async removeMembersForProject(
        projectGid: string,
        inlineObject34: InlineObject34,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.removeMembersForProject(
            projectGid,
            inlineObject34,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async updateProject(
        projectGid: string,
        inlineObject27: InlineObject27,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.updateProject(
            projectGid,
            inlineObject27,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }
}
