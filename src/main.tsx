import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './global.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
    <Analytics />

  </React.StrictMode>,
)
