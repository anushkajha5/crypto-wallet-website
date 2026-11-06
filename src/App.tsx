import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Download } from './pages/Download'
import { Faq } from './pages/Faq'
import { Home } from './pages/Home'
import { Privacy } from './pages/Privacy'
import { Terms } from './pages/Terms'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="download" element={<Download />} />
          <Route path="faq" element={<Faq />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
