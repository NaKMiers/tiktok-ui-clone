// Config
import config from '~/config'

// Layouts
import { OnlyHeader } from '~/layouts'

// Pages
import HomePage from '~/pages/HomePage'
import FollowingPage from '~/pages/FollowingPage'
import ProfilePage from '~/pages/ProfilePage'
import SearchPage from '~/pages/UploadPage'
import UploadPage from '~/pages/UploadPage'
import PageNotFound from '~/pages/PageNotFound/index.js'

// Public routes
const publicRoutes = [
   { path: config.routes.home, component: HomePage },
   { path: config.routes.following, component: FollowingPage },
   { path: config.routes.profile, component: ProfilePage },
   { path: config.routes.upload, component: UploadPage, layout: OnlyHeader },
   { path: config.routes.search, component: SearchPage, layout: null },
   { path: config.routes.notfound, component: PageNotFound, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
