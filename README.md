# mobx-toastr

> Tiny Mobx wrapper around toastr notifications library.

[![NPM](https://img.shields.io/npm/v/mobx-toastr.svg)](https://www.npmjs.com/package/mobx-toastr)
[![Build Status](https://travis-ci.org/padsbanger/mobx-toastr.svg?branch=master)](https://travis-ci.org/padsbanger/mobx-toastr)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mobx-toastr
```

## Usage

```jsx
import React, { Component } from 'react'

import Toastr from 'mobx-toastr'
import '../node_modules/toastr/build/toastr.css';

const options = {
  closeButton: false
}

const Root = (
  <Provider Toastr={new Toastr(options)}>
    <App />
  </Provider>
)


ReactDOM.render(Root, document.getElementById('root'))
```

## API & Documentation

For detailed documentation look [here](https://github.com/CodeSeven/toastr).

## License

MIT © [padsbanger](https://github.com/padsbanger)
