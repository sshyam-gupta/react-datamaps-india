import React, { Component } from 'react'

import ReactDatamaps from 'react-datamaps-india'

const STATES = {
  'Andaman & Nicobar Island': {
    value: 1,
  },
  'Andhra Pradesh': {
    value: 2,
  },
  Assam: {
    value: 3,
  },
  'Arunanchal Pradesh': {
    value: 4,
  },
  Bihar: {
    value: 5,
  },
  Chandigarh: {
    value: 6,
  },
  Chhattisgarh: {
    value: 7,
  },
  'Dadara & Nagar Haveli': {
    value: 8,
  },
  'Daman & Diu': {
    value: 9,
  },
  Delhi: {
    value: 10,
  },
  Goa: {
    value: 11,
  },
  Gujarat: {
    value: 12,
  },
  Haryana: {
    value: 13,
  },
  'Himachal Pradesh': {
    value: 14,
  },
  'Jammu & Kashmir': {
    value: 15,
  },
  Jharkhand: {
    value: 16,
  },
  Karnataka: {
    value: 17,
  },
  Kerala: {
    value: 18,
  },
  Lakshadweep: {
    value: 19,
  },
  'Madhya Pradesh': {
    value: 20,
  },
  Maharashtra: {
    value: 21,
  },
  Manipur: {
    value: 22,
  },
  Meghalaya: {
    value: 23,
  },
  Mizoram: {
    value: 24,
  },
  Nagaland: {
    value: 25,
  },
  Odisha: {
    value: 26,
  },
  Puducherry: {
    value: 27,
  },
  Punjab: {
    value: 28,
  },
  Rajasthan: {
    value: 29,
  },
  Sikkim: {
    value: 30,
  },
  'Tamil Nadu': {
    value: 31,
  },
  Telangana: {
    value: 32,
  },
  Tripura: {
    value: 33,
  },
  'Uttar Pradesh': {
    value: 34,
  },
  Uttarakhand: {
    value: 35,
  },
  'West Bengal': {
    value: 36,
  },
}

export default class App extends Component {
  state = STATES

  onCountChange = (e) => {
    const target = e.target
    if (!isFinite(target.value) || isNaN(target.value)) return
    this.setState({
      [target.name]: {
        value: isFinite(parseInt(target.value)) ? parseInt(target.value) : 0,
      },
    })
  }

  render() {
    const { startColor, endColor, ...regionData } = this.state
    return (
      <div className="container">
        <div
          style={{
            flex: 1,
            display: 'inline-block',
            position: 'relative',
            width: '100%',
            paddingBottom: '100%',
            verticalAlign: 'top',
            overflow: 'hidden',
          }}
        >
          <ReactDatamaps
            regionData={regionData}
            mapLayout={{
              title: 'Title',
              width: '',
              legendTitle: 'Legend',
              startColor: '#FFDAB9',
              endColor: '#FF6347',
              hoverTitle: 'Count',
              noDataColor: '#f5f5f5',
              borderColor: '#8D8D8D',
              hoverBorderColor: 'pink',
              hoverColor: 'green',
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
                  <input
                    name={key}
                    value={value.value}
                    onChange={this.onCountChange}
                  />
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
