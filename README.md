# News Kit

## Project Settings :
1. NextJS
2. ESLint
3. Prettier

## Settings Storybook :
1. getstorybook

2. .storybook => configure story book :

a. addons.js
What will been diplayed in the right panel :

```js
import '@storybook/addon-knobs/register'
import 'storybook-readme/register'
import '@storybook/addon-options/register'
import '@storybook/addon-actions/register'
```

b. config.js : storybook configure :

```js
addDecorator(
  withInfo({
    maxPropsIntoLine: 1,
    name: 'News Kit',
    url: 'https://storybook.news-kit.com',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sortStoriesByKind: true,
    inline: true,
    header: false,
    source: true,
    styles: (stylesheet) => {
      const style = {
        ...stylesheet,
        infoBody: {
          padding: '10px',
        },
      }
      return style
    }
  })
)
```

c. index.css => storybook globale css file (imported inside config.js).

d. preview-head (optional) => css file that contains all style (reconized defaultly by storybook).

```js
https://storybook.js.org/configurations/add-custom-head-tags/
```

e. knobs : lets dynamically change component on story.

3. /components => react component (define proptypes) :

```js
/**
 * propType validation
 */
Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  buttonIntent: PropTypes.oneOf(intents),
  buttonSize: PropTypes.oneOf(sizes),
  buttonStyle: PropTypes.oneOf(styles),
  buttonShape: PropTypes.oneOf(shapes),
  fontStyle: PropTypes.oneOf(fontStyles),
  fontWeight: PropTypes.oneOf(fontWeights),
  textTransform: PropTypes.oneOf(textTransforms),
  textAlign: PropTypes.oneOf(textAligns),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
```

4. /stories => story components documentation :

a. .jsx => specify how the component can be invoked :

```js
  <Button
    title={text("Title", "Click me !")}
    buttonStyle={OptionalSelect("Style", stylesOptions, "fill")}
    buttonShape={OptionalSelect("Shape", shapesOptions, "rectangle")}
    buttonIntent={OptionalSelect("Intent", intentsOptions, "default")}
    buttonSize={OptionalSelect("Size", sizeOptions, "normal")}
    fontStyle={OptionalSelect("Font Style", fontStylesOptions, "normal")}
    fontWeight={OptionalSelect("Font Weight", fontWeightsOptions, "normal")}
    textTransform={OptionalSelect(
      "Text Transform",
      textTransformsOptions,
      "none"
    )}
    textAlign={OptionalSelect("Text Align", textAlignsOptions, "center")}
    disabled={boolean("Disabled", false)}
    onClick={action("button_clicked")}
  />
```

b. Component readme  :

```js
The `<Button>` class support only text display.
```

5. /stories/Button.jsx => export component and documentation.

6. ArtBoard : /stories/index.jsx 
This file will contain all our story components :

```js
stories
  .addDecorator((story, context) => (story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .add('Button', withReadme(...Button))
```

7. Next JS CSS configuration :

```js
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssModules: true,
})
```

8. .babelrc modification :
```js
{
  "presets": [
    "next/babel"
  ],
  "plugins": []
}
```

## Styled Component :

1. configure .babelrc :
```js 
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}
```

2. ButtonWrapper : styled component to wrap CSS (hover, state..) :
```js
.news-kit-button--default{ 
    background : #FFFFFF; 
    border-color : #A569BD;
    color : #A569BD;
    padding : 10px 10px 10px 10px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--default:hover {
    background-color: #A569BD;
    color: #FFFFFF;
  }
````

3. /components/Button.jsx :
```js
  <ButtonWrapper>
      <button
        className={btRootClass}
        type={type}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </button>
  </ButtonWrapper>
```

## Enzyme with Mocha unit test :

1. package install :
```js
npm i --save-dev enzyme enzyme-adapter-react-16
npm i --save-dev mocha chai sinon enzyme-to-json
```

## Theme Manager :

1. ThemeManager :
```js
app-core/core-commons/theme/ThemeManager.jsx
```

2. ThemeProvider :
```js
pages/_app.js
```

3. ThemeConsumer :
```js
pages/user-access/sign-in.jsx
```

4. Themes settings :
```js
app-settings/theme/Themes.js
```

## Language & Localization :

1. LanguageManager :
```js
app-core/core-commons/language/LanguageManager.jsx
```

This class provides : Context, Provider and Consumer for language changes observer.


2. localization settings :
```js
app-settings/localizations
```

a. Dico.js => contains used strings inside application in the different supported localization.

b. Localizations.js => contains supported localizations.
