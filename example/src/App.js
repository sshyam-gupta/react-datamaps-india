import React, { Component } from 'react'

import ReactDatamaps from 'react-datamaps-india'

const STATES = {
  'Andaman & Nicobar Island': 0,
  'Andhra Pradesh': 0,
  'Arunanchal Pradesh': 0,
  Assam: 0,
  Bihar: 0,
  Chandigarh: 0,
  Chhattisgarh: 0,
  'Dadara & Nagar Haveli': 0,
  'Daman & Diu': 0,
  Delhi: 0,
  Goa: 0,
  Gujarat: 0,
  Haryana: 0,
  'Himachal Pradesh': 0,
  'Jammu & Kashmir': 0,
  Jharkhand: 0,
  Karnataka: 0,
  Kerala: 0,
  Lakshadweep: 0,
  'Madhya Pradesh': 0,
  Maharashtra: 0,
  Manipur: 0,
  Meghalaya: 0,
  Mizoram: 0,
  Nagaland: 0,
  Odisha: 0,
  Puducherry: 0,
  Punjab: 0,
  Rajasthan: 0,
  Sikkim: 0,
  'Tamil Nadu': 0,
  Telangana: 0,
  Tripura: 0,
  'Uttar Pradesh': 0,
  Uttarakhand: 0,
  'West Bengal': 0
}

export default class App extends Component {
  state = {
    ...STATES,
    startColor: 'green',
    endColor: 'blue'
  }

  onCountChange = e => {
    const target = e.target
    if (!isFinite(target.value) || isNaN(target.value)) return
    this.setState({
      [target.name]: isFinite(parseInt(target.value)) ? parseInt(target.value) : 0
    })
  }

  render() {
    const { startColor, endColor, ...regionData } = this.state
    return (
      <div className="container">
        <div style={{ flex: 1 }}>
          <ReactDatamaps
            regionData={regionData}
            mapLayout={{
              title: '',
              width: 700,
              legendTitle: '',
              startColor,
              endColor,
              hoverTitle: 'Count',
              noDataColor: '#f5f5f5',
              borderColor: '#8D8D8D',
              hoverBorderColor: 'pink',
              hoverColor: 'green'
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
                  <input name={key} value={value} onChange={this.onCountChange} />
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
