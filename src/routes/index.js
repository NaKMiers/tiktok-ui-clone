import routeConfig from '~/config/routes'
import HomePage from '~/pages/HomePage'
import FollowingPage from '~/pages/FollowingPage'
import ProfilePage from '~/pages/ProfilePage'
import SearchPage from '~/pages/UploadPage'
import UploadPage from '~/pages/UploadPage'
import { OnlyHeader } from '~/components/Layouts'
import PageNotFound from '~/pages/PageNotFound/index.js'

const publicRoutes = [
   { path: routeConfig.home, component: HomePage },
   { path: routeConfig.following, component: FollowingPage },
   { path: routeConfig.profile, component: ProfilePage },
   { path: routeConfig.upload, component: UploadPage, layout: OnlyHeader },
   { path: routeConfig.search, component: SearchPage, layout: null },
   { path: routeConfig.notfound, component: PageNotFound, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
