import '../styles.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import Popup from './index'

const root = createRoot(document.getElementById('extension-popup-root')!)
root.render(<Popup />)
