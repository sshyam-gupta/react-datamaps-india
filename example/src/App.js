import React, { Component } from 'react'

import ReactDatamaps from 'react-datamaps-india'

const STATES = {
  'Andaman & Nicobar Island': {
    value: 20,
    tesg: 23
  },
  'Andhra Pradesh': {
    value: 0
  },
  'Arunanchal Pradesh': {
    value: 0
  },
  Assam: {
    value: 0
  },
}

export default class App extends Component {
  state = {
    ...STATES,
    startColor: '#FFDAB9',
    endColor: '#FF6347'
  }

  onCountChange = e => {
    const target = e.target
    if (!isFinite(target.value) || isNaN(target.value)) return
    this.setState({
      [target.name]: {
        value: isFinite(parseInt(target.value)) ? parseInt(target.value) : 0
      }
    })
  }

  render() {
    const { startColor, endColor, ...regionData } = this.state
    return (
      <div className="container">
        <div style={{ flex: 1, display: 'inline-block',
    position: 'relative',
    width: '100%',
    paddingBottom: '100%',
    verticalAlign: 'top',
    overflow: 'hidden', }}>
          <ReactDatamaps
            regionData={regionData}
            mapLayout={{
              title: '',
              width: '',
              legendTitle: '',
              startColor,
              endColor,
              hoverTitle: 'Count',
              noDataColor: '#f5f5f5',
              borderColor: '#8D8D8D',
              hoverBorderColor: 'pink',
              hoverColor: 'green'
            }}
            hoverComponent={({ value }) => {
            return (
              <>
                <p>{value.name}</p>
                <p>{value.value}</p>
              </>
            )
            }}
          />
        </div>
        <div className="editor">
          <h2>Edit Here</h2>
          <table>
            <tr>
              <th>State</th>
              <th>Count</th>
            </tr>
            {Object.entries(this.state).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>
                  <input name={key} value={value.value} onChange={this.onCountChange} />
                </td>
              </tr>
            ))}
          </table>
        </div>
        <style>{`
          .container {
            display: flex;
          }
          th {
            text-align: left;
          }
          table,
          th,
          td {
            border: 1px solid black;
            border-collapse: collapse;
          }
          th,
          td {
            padding: 10px 20px;
          }
          @media (max-width: 1000px) {
            .container {
              flex-direction: column;
            }
          }
          .editor {
            flex: 1;
            height: 100vh;
            overflow: scroll;
          }
        `}</style>
      </div>
    )
  }
}
