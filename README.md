# react-datamaps-india 🇮🇳

> Datamaps for india region

[![npm version](https://img.shields.io/npm/v/react-datamaps-india.svg)](https://www.npmjs.com/package/react-datamaps-india)

[![npm downloads](https://img.shields.io/npm/dw/react-datamaps-india.svg)](https://www.npmjs.com/package/react-datamaps-india)

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-datamaps-india)](https://www.npmjs.com/package/react-datamaps-india)

## ✨ [Demo](https://react-datamaps.netlify.app/)

## 🏠 [Homepage](https://github.com/sshyam-gupta/react-datamaps-india#readme)

## Installation

```bash
pnpm add react-datamaps-india
```

or with other package manager like npm

```bash
npm install react-datamaps-india
```

## Usage

```jsx
import DatamapsIndia from 'react-datamaps-india'

const Example = () => {
  return (
    <DatamapsIndia
      regionData={{
        Maharashtra: {
          value: 10,
        },
      }}
      hoverComponent={({ value }) => {
        return (
          <>
            <p>{value.name}</p>
            <p>{value.value}</p>
          </>
        )
      }}
      mapLayout={{
        title: 'Title',
        legendTitle: 'Legend Title',
        startColor: '#FFDAB9',
        endColor: '#FF6347',
        hoverTitle: 'Count',
        noDataColor: '#f5f5f5',
        borderColor: '#8D8D8D',
        hoverBorderColor: '#8D8D8D',
        hoverColor: 'green',
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
Arunachal Pradesh
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

## Contributing

Contributions, issues and feature requests are always welcome!
Feel free to check [issues page](https://github.com/sshyam-gupta/react-datamaps-india/issues).

## Support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Shyam Gupta (shyamm@outlook.com)](https://github.com/sshyam-gupta)
This project is [MIT](https://github.com/sshyam-gupta/react-datamaps-india/blob/main/LICENSE) licensed.

## About me

- Website: [sshyam-gupta.space](https://sshyam-gupta.space/)
- Twitter: [@shyamm06](https://twitter.com/shyamm06)
- GitHub: [@sshyam-gupta](https://github.com/sshyam-gupta)
- LinkedIn: [@shyam-gupta-66463a62](https://linkedin.com/in/https://www.linkedin.com/in/shyam-gupta-66463a62/)
