import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import InternasionalListPage from "./pages/Trip/InternasionalListPage";
import DomestikListPage from "./pages/Trip/DomestikListPage";
import PackagesList from "./pages/PackagesList";
import SewaMobil from "./pages/SewaMobil";
import TripHome from "./pages/Trip/Home"
import Layout from "./components/Layout";
import DetailWisata from "./pages/Trip/DetailWisata";
import DetailSewaMobil from "./pages/DetailSewaMobil";

const router = createBrowserRouter([
  {
    // Gunakan Layout sebagai elemen dasar untuk semua halaman
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Trip',
        element: <TripHome />,
      },
      {
        path: '/Trip/Domestik/:region',
        element: <DomestikListPage />,
      },
      {
        path: '/Trip/Internasional/:region',
        element: <InternasionalListPage />,
      },
      {
        path: '/Trip/:type/:region/:slug',
        element: <DetailWisata />,
      },
      {
        path: '/Trip/:type',
        element: <PackagesList />,
      },
      {
        path: '/sewa-mobil',
        element: <SewaMobil />,
      },
      {
        path: '/sewa-mobil/:region',
        element: <DetailSewaMobil />,
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Gunakan RouterProvider untuk merender aplikasi */}
    <RouterProvider router={router} />
  </StrictMode>
)
