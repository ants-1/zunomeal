import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import { Provider } from './components/ui/provider.tsx'
import AuthLayout from './layouts/AuthLayout.tsx'
import MainLayout from './layouts/MainLayout.tsx'
import OnBoarding from './pages/OnBoarding.tsx'
import Dashboard from './pages/Dashboard.tsx'
import ShoppingList from './pages/ShoppingList.tsx'
import NotFound from './pages/NotFound.tsx'
import MealPlanner from './pages/MealPlanner.tsx'
import Recipes from './pages/Recipes.tsx'
import Profile from './pages/Profile.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/onboarding" element={<OnBoarding />} />
          </Route>

          <Route element={<MainLayout />}>
            {/* Public Routes */}
            <Route index path="/" element={<App />} />

            {/* Private Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
            <Route path="/meal-planner" element={<MealPlanner />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
