import {
    AddCustomFieldSettingRequest,
    AddFollowersRequest,
    AddMembersRequest,
    Configuration,
    ConfigurationParameters,
    ProjectDuplicateRequest,
    ProjectRequest,
    ProjectsApi,
    RemoveCustomFieldSettingRequest,
    RemoveFollowersRequest,
    RemoveMembersRequest,
} from '../asanaClient'

export class Projects {
    readonly projectsApi: ProjectsApi
    constructor(private readonly configuration: ConfigurationParameters) {
        const config = new Configuration(this.configuration)
        this.projectsApi = new ProjectsApi(config)
    }

    async addCustomFieldSettingForProject(
        projectGid: string,
        data: AddCustomFieldSettingRequest,
        optPretty?: boolean,
        options?: any,
    ) {
        const res = await this.projectsApi.addCustomFieldSettingForProject(
            projectGid,
            { data },
            optPretty,
            options,
        )
        return res.data.data
    }

    async addFollowersForProject(
        projectGid: string,
        data: AddFollowersRequest,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.addFollowersForProject(
            projectGid,
            { data },
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async addMembersForProject(
        projectGid: string,
        data: AddMembersRequest,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.addMembersForProject(
            projectGid,
            { data },
            optPretty,
            optFields,
            options,
        )

        return res.data.data
    }

    async createProject(
        data: ProjectRequest,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.createProject({ data }, optPretty, optFields, options)
        return res.data.data
    }

    async createProjectForTeam(
        teamGid: string,
        data: ProjectRequest,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.createProjectForTeam(
            teamGid,
            { data },
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async createProjectForWorkspace(
        workspaceGid: string,
        data: ProjectRequest,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.createProjectForWorkspace(
            workspaceGid,
            { data },
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
        data: ProjectDuplicateRequest,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.duplicateProject(
            projectGid,
            optPretty,
            optFields,
            { data },
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
        data: RemoveCustomFieldSettingRequest,
        optPretty?: boolean,
        options?: any,
    ) {
        const res = await this.projectsApi.removeCustomFieldSettingForProject(
            projectGid,
            { data },
            optPretty,
            options,
        )
        return res.data.data
    }
    async removeFollowersForProject(
        projectGid: string,
        data: RemoveFollowersRequest,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.removeFollowersForProject(
            projectGid,
            { data },
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async removeMembersForProject(
        projectGid: string,
        data: RemoveMembersRequest,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.removeMembersForProject(
            projectGid,
            { data },
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async updateProject(
        projectGid: string,
        data: ProjectRequest,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.projectsApi.updateProject(
            projectGid,
            { data },
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }
}
