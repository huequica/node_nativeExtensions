# node_nativeExtensions

[![CircleCI](https://circleci.com/gh/huequica/node_nativeExtensions/tree/master.svg?style=svg&circle-token=a98467058b075fbddb53cdb139a65bbfcabed87e)](https://circleci.com/gh/huequica/node_nativeExtensions/tree/master)
![NPM](https://img.shields.io/npm/l/@huequica/native_extensions?style=flat-square)

# Summary

This package is huequica's original Native Classes Extension method pack.

- **THIS PACKAGE IS NOT COMMING MAJOR RELEASE**.
  - Working is not support.

# Install

```bash
$ yarn add @huequica/native_extensions
# or npm i @huequica/native_extensions
```

# Usage

## index.ts

```ts
import '@huequica/native_extensions';
import sample from './sample';
```

## sample.ts

```ts
const sample = (): void => {
	console.log(['hoge', 'fuga', 'piyo'].lastItemIs('piyo')); // -> true
};
```
