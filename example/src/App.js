import React, { Component } from 'react'

import ReactDatamaps from 'react-datamaps-india'

export default class App extends Component {
  render() {
    return (
      <div>
        <ReactDatamaps regionData={{
          Maharashtra: 10
        }} mapLayout={{
          title: '',
          legendTitle: '',
          startColor: 'blue',
          endColor: 'red',
          hoverTitle: 'sount',
          noDataColor: '#f5f5f5',
          borderColor: '#8D8D8D',
          hoverColor: 'green'
        }} />
      </div>
    )
  }
}
