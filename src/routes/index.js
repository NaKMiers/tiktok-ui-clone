import HomePage from '~/pages/HomePage'
import FollowingPage from '~/pages/FollowingPage'
import ProfilePage from '~/pages/ProfilePage'
import SearchPage from '~/pages/UploadPage'
import UploadPage from '~/pages/UploadPage'
import { OnlyHeader } from '~/components/Layout'

const publicRoutes = [
   { path: '/', component: HomePage },
   { path: '/following', component: FollowingPage },
   { path: '/profile', component: ProfilePage },
   { path: '/upload', component: UploadPage, layout: OnlyHeader },
   { path: '/search', component: SearchPage, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
