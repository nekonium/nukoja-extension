import React, { Component } from 'react'
import PropTypes from 'prop-types'
import contractMap from 'nuko-contract-metadata'
import Fuse from 'fuse.js'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '../../../text-field'

const contractList = Object.entries(contractMap)
  .map(([ _, tokenData]) => tokenData)
  .filter(tokenData => Boolean(tokenData.erc20))

const fuse = new Fuse(contractList, {
  shouldSort: true,
  threshold: 0.45,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    { name: 'name', weight: 0.5 },
    { name: 'symbol', weight: 0.5 },
  ],
})

export default class TokenSearch extends Component {
  static contextTypes = {
    t: PropTypes.func,
  }

  static defaultProps = {
    error: null,
  }

  static propTypes = {
    onSearch: PropTypes.func,
    error: PropTypes.string,
  }

  constructor (props) {
    super(props)

    this.state = {
      searchQuery: '',
    }
  }

  handleSearch (searchQuery) {
    this.setState({ searchQuery })
    const fuseSearchResult = fuse.search(searchQuery)
    const addressSearchResult = contractList.filter(token => {
      return token.address.toLowerCase() === searchQuery.toLowerCase()
    })
    const results = [...addressSearchResult, ...fuseSearchResult]
    this.props.onSearch({ searchQuery, results })
  }

  renderAdornment () {
    return (
      <InputAdornment
        position="start"
        style={{ marginRight: '12px' }}
      >
        <img src="images/search.svg" />
      </InputAdornment>
    )
  }

  render () {
    const { error } = this.props
    const { searchQuery } = this.state

    return (
      <TextField
        id="search-tokens"
        placeholder={this.context.t('searchTokens')}
        type="text"
        value={searchQuery}
        onChange={e => this.handleSearch(e.target.value)}
        error={error}
        fullWidth
        startAdornment={this.renderAdornment()}
      />
    )
  }
}
