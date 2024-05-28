import App from "./App.jsx"
import Profile from './pages/Profile.jsx'
import ContactUs from './pages/ContactUs.jsx'
import FAQ from './pages/FAQ.jsx'
import Gallery from "./pages/Gallery.jsx"
import ErrorPage from './pages/ErrorPage.jsx'

const routes = [
    { 
        path: "/",
        element: <App />
      },
    
      { 
        path: "/profile",
        element: <Profile />
      }, 
    
      {
        path: "/contact-us",
        element: <ContactUs />
      },
      {
        path: "/faq",
        element: <FAQ />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
]

export default routes

