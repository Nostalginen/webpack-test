import React from 'react'
import { DynamicImport } from '../components'
const Home = props => (
  <DynamicImport load={() => import('./frontpage/frontpage')}>
    {Component =>
      Component === null ? <p>Loading</p> : <Component {...props} />
    }
  </DynamicImport>
)

export { Home }
