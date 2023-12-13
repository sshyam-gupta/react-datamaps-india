import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import ReactDataMaps from '.'
import './styles.css'

const STATES = {
  'Andaman & Nicobar Island': {
    value: 1,
  },
  'Andhra Pradesh': {
    value: 2,
  },
  Assam: {
    value: 6,
  },
  'Arunachal Pradesh': {
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
  'Dadra and Nagar Haveli and Daman and Diu': {
    value: 55,
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
  Ladakh: {
    value: 37,
  },
}

function App() {
  const [states, setStates] = useState<{
    [x: string]: {
      value: number
    }
  }>(STATES)

  const onCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e

    const val = parseInt(target.value, 10)

    if (!Number.isFinite(val) || Number.isNaN(val)) return

    setStates({
      ...states,
      [target.name]: {
        value: Number.isFinite(val) ? val : 0,
      },
    })
  }

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
        <ReactDataMaps
          regionData={states}
          mapLayout={{
            title: 'Datamaps',
            // legendTitle: 'Legend',
            // startColor: '#1F8A70',
            // endColor: '#000',
            // noDataColor: 'blue',
            // borderColor: 'yellow',
            // hoverColor: 'green',
            // hoverValuePrefix: 'Counts',
          }}
          hoverComponent={({ value }: any) => {
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
          <thead>
            <tr>
              <th>State</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(states).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>
                  <input
                    name={key}
                    value={value.value}
                    onChange={onCountChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style>{`
          .container {
            display: flex;
          }
          table,
          th,
          td {
            border: 1px solid #ccc;
            border-collapse: collapse;
          }
          tbody tr:nth-child(even) {
            background-color: initial;
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
