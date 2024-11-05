export const permissions = [
    {
        role: 'user',
        actions: [
            'get_project',
            'get_project_id',
            'count_project',
            'get_user_profile'
        ]
    },
    {
        role: 'vendor',
        actions: [
            'get_project',
            'get_project_id',
            'post_project',
            'update_project',
            'delete_project',
            'count_project'
        ]
    },
    {
        role:'project_owner',
        actions:[
            'create_project',
            'update_project',
            'delete_project',
            'get_project'
        ]
    },
    {
        role:'project_regulator',
        actions:[
            'create_project',
            'update_project',
            'delete_project',
            'get_project',
            'update_project_status',
        ]
    }
]