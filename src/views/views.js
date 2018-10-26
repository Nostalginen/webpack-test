import React from 'react'
import DynamicImport from './dynamic-import'
const Home = props => (
  <DynamicImport load={() => import('./frontpage/frontpage')}>
    {Component =>
      Component === null ? <p>Loading</p> : <Component {...props} />
    }
  </DynamicImport>
)

const Login = props => (
  <DynamicImport load={() => import('./login/login')}>
    {Component =>
      Component === null ? <p>Loading</p> : <Component {...props} />
    }
  </DynamicImport>
)

export { Home, Login }
