import './styles.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import Content from './content/index'

const ROOT_ID = 'extension-root'
const container = document.createElement('div')
container.id = ROOT_ID
document.body.appendChild(container)

const root = createRoot(document.getElementById(ROOT_ID)!)
root.render(<Content />)

/** 无需 DOM 操作可以直接删掉以上内容，开始写 ts */
