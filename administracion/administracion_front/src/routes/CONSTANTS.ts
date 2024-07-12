export const Routes = {
    HOME: '/',
    CLIENTS: {
        LIST: '/clients',
        CREATE: '/clients/create',
        EDIT: '/clients/:id',
        EDIT_PARAM: (id?: number) => `/clients/${id}`
    },
    RUTA: {
        LIST: '/ruta',
        CREATE: '/ruta/create',
        EDIT: '/ruta/:id',
        EDIT_PARAM: (id?: number) => `/ruta/${id}`
    },
    CHOFER: {
        LIST: '/chofer',
        CREATE: '/chofer/create',
        EDIT: '/chofer/:id',
        EDIT_PARAM: (id?: number) => `/chofer/${id}`
    },
    CAMION: {
        LIST: '/camion',
        CREATE: '/camion/create',
        EDIT: '/camion/:id',
        EDIT_PARAM: (id?: number) => `/camion/${id}`
    },
    AUTH: {
        LOGIN: '/login'
    }
}