export const permissions = [
    {
        role: 'user',
        actions: [
            'get_project',
            'get_project_id',
            'count_project',
            'get_user_profile',
            'create_submission',
            'update_submission',
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
            'count_project',
            'delete_submission'
        ]
    },
    {
        role:'Project Owner',
        actions:[
            'create_project',
            'update_project',
            'delete_project',
            'get_project',
            'update_profile',
            'delete_profile',
        ]
    },
    {
        role:'Project Regulator',
        actions:[
            'create_project',
            'update_project',
            'delete_project',
            'get_project',
            'update_project_status',
            'delete_tender',
            'create_tender',
            'update_profile',
            'delete_profile',
            'update_tender'
        ]
    }
]