import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl'
import en from 'react-intl/locale-data/en'
import fi from 'react-intl/locale-data/fi'
import sv from 'react-intl/locale-data/sv'
import rootStore from './stores/rootStore'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Login, Home } from './views/views'
import translations from './lang/translations'
import wiz from './assets/images/wiz.svg'

addLocaleData([...en, ...fi, ...sv])

@observer
class App extends Component {
  render() {
    const { setLocale, language } = rootStore
    return (
      <Provider rootStore={rootStore}>
        <IntlProvider locale={language} messages={translations[language]}>
          <Router>
            <div style={{ textAlign: 'center' }}>
              <h1>{`Language: ${language}`}</h1>
              <img alt="wizard" width="100" height="100" src={wiz} />
              <h1>
                <FormattedMessage id="hello" />
              </h1>
              <button onClick={() => setLocale('fi')}>Suomi</button>
              <button onClick={() => setLocale('en')}>Englanti</button>
              <button onClick={() => setLocale('sv')}>Svensku</button>

              <div>
                <h3>
                  <Link to="/">front </Link>
                  <Link to="/login">Login</Link>
                </h3>
              </div>

              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
            </div>
          </Router>
        </IntlProvider>
      </Provider>
    )
  }
}

export default App
