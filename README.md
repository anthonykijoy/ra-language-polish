# Polish Messages for React-Admin

Polish messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.


## Installation

```sh
npm install --save rac-language-polish
```

## Usage

```jsx
import { Admin } from 'react-admin';
import polishMessages from 'ra-language-polish';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
    'pl': polishMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale]);

<Admin locale="pl" i18nProvider={i18nProvider}>
    ...
</Admin>
```

## License

This translation is licensed under the MIT License