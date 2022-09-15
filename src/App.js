import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import { DefaultLayout } from './components/Layout'

function App() {
   return (
      <Router>
         <div className='App'>
            <Routes>
               {publicRoutes.map(r => {
                  let Layout = DefaultLayout
                  if (r.layout === null) {
                     Layout = Fragment
                  } else if (r.layout) {
                     Layout = r.layout
                  }
                  const Page = r.component
                  return (
                     <Route
                        key={r.path}
                        path={r.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     />
                  )
               })}
            </Routes>
         </div>
      </Router>
   )
}

export default App
