export const Routes = {
    HOME: '/',
    CLIENTS: {
        LIST: '/clients',
        CREATE: '/clients/create',
        EDIT: '/clients/:id',
        EDIT_PARAM: (id?: number) => `/clients/${id}`
    },
    PRODUCTS: {
        LIST: '/products',
        CREATE: '/products/create',
        EDIT: '/products/:id',
        EDIT_PARAM: (id?: number) => `/products/${id}`
    },
    CREADOR: {
        LIST: '/creador',
        CREATE: '/creador/create',
        EDIT: '/creador/:id',
        EDIT_PARAM: (id?: number) => `/creador/${id}`
    },
    RIFAS: {
        LIST: '/rifas',
        CREATE: '/rifas/create',
        EDIT: '/rifas/:id',
        EDIT_PARAM: (id?: number) => `/rifas/${id}`
    },
    USUARIOPARTICIPANTE: {
        LIST: '/usuarioparticipante',
        CREATE: '/usuarioparticipante/create',
        EDIT: '/usuarioparticipante/:id',
        EDIT_PARAM: (id?: number) => `/usuarioparticipante/${id}`
    },
    SURTIDOR: {
        LIST: '/surtidor',
        CREATE: '/surtidor/create',
        EDIT: '/surtidor/:id',
        EDIT_PARAM: (id?: number) => `/surtidor/${id}`
    },
    BOMBA: {
        LIST: '/bomba',
        CREATE: '/bomba/create',
        EDIT: '/bomba/:id',
        EDIT_PARAM: (id?: number) => `/bomba/${id}`
    },
    TIPOCOMBUSTIBLE: {
        LIST: '/tipocombustible',
        CREATE: '/tipocombustible/create',
        EDIT: '/tipocombustible/:id',
        EDIT_PARAM: (id?: number) => `/tipocombustible/${id}`
    },
    VENTA: {
        LIST: '/ventas',
        CREATE: '/ventas/create',
        EDIT: '/ventas/:id',
        EDIT_PARAM: (id?: number) => `/ventas/${id}`
    },
    AUTH: {
        LOGIN: '/login'
    }
}