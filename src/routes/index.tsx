import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hub from '../views/hub/index'
import Configurations from '../views/configurations/index'
import { BaseLayout } from "../layouts/insideApp/base"


const AppRoutes = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Hub />} />
          <Route path="hub" element={<Hub />} />
          <Route path="configurations" element={<Configurations />} />
          <Route
            path="asdfasdfasdf"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes