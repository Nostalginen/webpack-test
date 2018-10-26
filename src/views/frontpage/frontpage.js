import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

export default class FrontPage extends Component {
  render() {
    return (
      <h1>
        <FormattedMessage id="front" />
      </h1>
    )
  }
}
