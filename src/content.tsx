import './styles.css'
import React from 'react';
import { createRoot } from 'react-dom/client';
import Content from './content/main'

const container = document.createElement('div')
container.id = 'sgt-root'
document.body.appendChild(container)

const root = createRoot(document.getElementById('sgt-root')!);
root.render(<Content />);
