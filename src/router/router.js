import ErrorPage from "../components/ErrorPage"
import FullPost from "../components/FullPost"
import Login from "../components/Login"
import About from "../pages/About"
import Posts from "../pages/Posts"

 export const privateRoutes = [
    { path: '/', element: Posts, exact: true },
    { path: '/posts', element: Posts, exact: true },
    { path: '/posts/:id', element: FullPost, exact: true },
    { path: '/about', element: About, exact: true },
    { path: '*', element: ErrorPage, exact: false },
]


export const publicRoutes = [
    { path: '/login', element: Login, exact: true },
    { path: '/*', element: Login, exact: false },
]

