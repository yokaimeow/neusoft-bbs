import Main from '@view/Main'
import Login from '@view/Login'
import Register from '@view/Register'
import Error from '@view/Error'
import FindPassword from '@view/FindPassword'
import Index from '@view/Index'
import Topic from '@view/Topic'
import Board from '@view/Board'
import Test from '@view/Test'

const routes = [
    {
        path: '/test',
        component: Test,
    },
    {
        path: '/login',
        component: Login,
        permissionGroupList: [['noLogin']],
        backUrl: '/',
    },
    {
        path: '/register',
        component: Register,
        permissionGroupList: [['noLogin']],
        backUrl: '/',
    },
    {
        path: '/find-password',
        component: FindPassword,
        permissionGroupList: [['noLogin']],
        backUrl: '/',
    },
    {
        path: '/error',
        component: Error,
    },
    {
        component: Main,
        path: '/',
        routes: [
            {
                path: '/',
                component: Index,
                exact: true,
            },
            {
                component: Board,
                path: '/board/:id',
            },
            {
                component: Topic,
                path: '/topic/:id',
            },
        ],
    },
]

export default routes
