import HomePage from '~/pages/HomePage'
import FollowingPage from '~/pages/FollowingPage'
import ProfilePage from '~/pages/ProfilePage'
import SearchPage from '~/pages/UploadPage'
import UploadPage from '~/pages/UploadPage'
import { OnlyHeader } from '~/components/Layouts'
import PageNotFound from '~/pages/PageNotFound/index.js'

const publicRoutes = [
   { path: '/', component: HomePage },
   { path: '/following', component: FollowingPage },
   { path: '/@:nickname', component: ProfilePage },
   { path: '/upload', component: UploadPage, layout: OnlyHeader },
   { path: '/search', component: SearchPage, layout: null },
   { path: '/*', component: PageNotFound, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
