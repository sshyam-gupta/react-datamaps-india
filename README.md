# react-datamaps-india

> Datamaps for india region

[![NPM](https://img.shields.io/npm/v/react-datamaps-india.svg)](https://www.npmjs.com/package/react-datamaps-india) [![NPM downloads](https://img.shields.io/npm/dw/react-datamaps-india.svg)](https://www.npmjs.com/package/react-datamaps-india) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Demo 
[Demo](https://sshyam-gupta.github.io/react-datamaps-india/)

## Install

```bash
yarn add react-datamaps-india
```

## Usage

```tsx
import * as React from 'react'

import DatamapsIndia from 'react-datamaps-india'

const Example = () => {
  return (
    <DatamapsIndia
      regionData={{
        Maharashtra: {
          value: 10
        }
      }}
      hoverComponent={({ value }) => {
        return <span>{value}</span>
      }}
      mapLayout={{
        title: '',
        legendTitle: '',
        startColor: 'blue',
        endColor: 'red',
        hoverTitle: 'Count',
        noDataColor: '#f5f5f5',
        borderColor: '#8D8D8D',
        hoverBorderColor: '#8D8D8D',
        hoverColor: 'green'
      }}
    />
  )
}
```

### Available Props

### regionData (optional)
#### Object of valid states with count. Find valid states below

### mapLayout (optional)
#### Object of map layout props

```
title: '',
legendTitle: '',
startColor: 'blue',
endColor: 'red',
hoverTitle: 'Count',
noDataColor: '#f5f5f5',
borderColor: '#8D8D8D',
hoverColor: 'green'
hoverBorderColor: 'green'
```

### Valid States

```
Andaman & Nicobar Island
Andhra Pradesh
Arunanchal Pradesh
Assam
Bihar
Chandigarh
Chhattisgarh
Dadara & Nagar Haveli
Daman & Diu
Delhi
Goa
Gujarat
Haryana
Himachal Pradesh
Jammu & Kashmir
Jharkhand
Karnataka
Kerala
Lakshadweep
Madhya Pradesh
Maharashtra
Manipur
Meghalaya
Mizoram
Nagaland
Odisha
Puducherry
Punjab
Rajasthan
Sikkim
Tamil Nadu
Telangana
Tripura
Uttar Pradesh
Uttarakhand
West Bengal
```

## License

MIT © [sshyam-gupta](https://github.com/sshyam-gupta)
