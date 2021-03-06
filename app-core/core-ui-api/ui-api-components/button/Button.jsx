import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import ButtonOptions from "./ButtonOptions";
import ButtonStyle from "./ButtonStyle";

// component settings
const {
  sizes,
  intents,
  styles,
  shapes,
  fontStyles,
  fontWeights,
  textTransforms,
  textAligns,
  rootClass,
  baseClass
} = ButtonOptions; // prettier-ignore

// component
const Button = ({
  className,
  theme,
  title,
  buttonIntent,
  buttonSize,
  buttonStyle,
  buttonShape,
  fontStyle,
  fontWeight,
  textTransform,
  textAlign,
  disabled,
  onClick
}) => {
  const btRootClass = rootClass(
    cx,
    className,
    buttonStyle,
    buttonShape,
    buttonIntent,
    buttonSize,
    fontStyle,
    fontWeight,
    textTransform,
    textAlign,
    disabled
  );
  return (
    <ButtonStyle
      theme={theme}
      intent={buttonIntent}
      shape={buttonShape}
      fStyle={fontStyle}
      fWeight={fontWeight}
      bSize={buttonSize}
      tTransform={textTransform}
      tAlign={textAlign}
      disabled={disabled}
    >
      <button type="button" className={btRootClass} onClick={onClick}>
        <div className="ui-api-kit-button--text">
          <span>{title}</span>
        </div>
      </button>
    </ButtonStyle>
  );
};

/**
 * display name
 */
Button.displayName = "Button";

/**
 * propType validation
 */
Button.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
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

/**
 * propType default values
 */
Button.defaultProps = {
  className: baseClass,
  buttonIntent: "default",
  buttonShape: "rectangle",
  buttonSize: "normal",
  buttonStyle: "fill",
  fontStyle: "normal",
  fontWeight: "normal",
  textTransform: "none",
  textAlign: "left",
  disabled: false,
  onClick: null
};

export default Button;
