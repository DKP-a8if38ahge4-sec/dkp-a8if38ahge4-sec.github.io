/* @ds-bundle: {"format":4,"namespace":"DieKavallerieDesignSystem_21d065","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Headline","sourcePath":"components/core/Headline.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"}],"sourceHashes":{"components/core/Button.jsx":"68631c1ed67b","components/core/Headline.jsx":"d567dc4f0de9","components/forms/FormField.jsx":"13d7aa0ed427"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DieKavallerieDesignSystem_21d065 = window.DieKavallerieDesignSystem_21d065 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const ARROW_SVG = {
  red: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17.799' height='17.799' viewBox='0 0 17.799 17.799'%3E%3Cpath d='M2.36,12.563l10.226.022L12.563,2.36h-1.91l.067,7.057L1.326,0,0,1.326,9.417,10.72,2.36,10.653Z' transform='translate(0 8.899) rotate(-45)' fill='%23ff003c'/%3E%3C/svg%3E")`,
  white: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17.799' height='17.799' viewBox='0 0 17.799 17.799'%3E%3Cpath d='M2.36,12.563l10.226.022L12.563,2.36h-1.91l.067,7.057L1.326,0,0,1.326,9.417,10.72,2.36,10.653Z' transform='translate(0 8.899) rotate(-45)' fill='%23fff'/%3E%3C/svg%3E")`,
  black: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17.799' height='17.799' viewBox='0 0 17.799 17.799'%3E%3Cpath d='M2.36,12.563l10.226.022L12.563,2.36h-1.91l.067,7.057L1.326,0,0,1.326,9.417,10.72,2.36,10.653Z' transform='translate(0 8.899) rotate(-45)' fill='%231d1d1d'/%3E%3C/svg%3E")`
};

/**
 * Die Kavallerie button. Pill-shaped, 2px border.
 * Variants: 'red' (default), 'black', 'white' (for dark backgrounds).
 * Sizes: 'default' (with arrow icon), 'large' (no arrow, bigger padding).
 */
function Button({
  children,
  variant = 'red',
  size = 'default',
  href,
  onClick,
  type = 'button',
  disabled
}) {
  const [hovered, setHovered] = React.useState(false);
  const isLarge = size === 'large';
  const variantStyles = {
    red: {
      border: '2px solid var(--color-red)',
      color: hovered ? 'var(--color-white)' : 'var(--color-red)',
      backgroundColor: hovered ? 'var(--color-red)' : 'transparent',
      arrowColor: hovered ? 'white' : 'red'
    },
    black: {
      border: '2px solid var(--color-black)',
      color: hovered ? 'var(--color-white)' : 'var(--color-black)',
      backgroundColor: hovered ? 'var(--color-black)' : 'transparent',
      arrowColor: hovered ? 'white' : 'black'
    },
    white: {
      border: '2px solid var(--color-white)',
      color: hovered ? 'var(--color-red)' : 'var(--color-white)',
      backgroundColor: hovered ? 'var(--color-white)' : 'transparent',
      arrowColor: hovered ? 'red' : 'white'
    }
  };
  const v = variantStyles[variant] || variantStyles.red;
  const baseStyle = {
    fontFamily: 'var(--font-base)',
    fontSize: isLarge ? 'var(--font-size-button)' : 'var(--font-size-button-small)',
    fontWeight: 700,
    lineHeight: '1.056em',
    letterSpacing: 0,
    borderRadius: 'var(--border-radius-button)',
    textDecoration: 'none',
    padding: isLarge ? '38px 52px' : '28px 61px 28px 33px',
    minWidth: '150px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    boxSizing: 'border-box',
    position: 'relative',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    border: v.border,
    color: v.color,
    backgroundColor: v.backgroundColor,
    transition: 'background-color 0.2s, color 0.2s'
  };
  const arrowStyle = {
    display: 'inline-block',
    width: '17px',
    height: '17px',
    backgroundImage: ARROW_SVG[v.arrowColor],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    flexShrink: 0
  };
  const El = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(El, {
    href: href,
    onClick: disabled ? undefined : onClick,
    type: href ? undefined : type,
    disabled: El === 'button' ? disabled : undefined,
    style: baseStyle,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, children, !isLarge && /*#__PURE__*/React.createElement("span", {
    style: arrowStyle,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Headline.jsx
try { (() => {
/**
 * Die Kavallerie headline component.
 * Uses PP Formula Condensed (weight 900, uppercase) for headlines,
 * Helvetica Now Display (weight 400) for sub-headlines.
 */
function Headline({
  children,
  size = 'h2',
  tag,
  color,
  subHeadline = false
}) {
  const sizeMap = {
    '3xlarge': {
      fontSize: 'var(--font-size-3xlarge)',
      lineHeight: '0.950em'
    },
    '2xlarge': {
      fontSize: 'var(--font-size-2xlarge)',
      lineHeight: '1em'
    },
    'xlarge': {
      fontSize: 'var(--font-size-xlarge)',
      lineHeight: '1'
    },
    'large': {
      fontSize: 'var(--font-size-large)',
      lineHeight: '1.200em'
    },
    'medium': {
      fontSize: 'var(--font-size-medium)',
      lineHeight: '1'
    },
    'small': {
      fontSize: 'var(--font-size-small)',
      lineHeight: '1'
    },
    'h1': {
      fontSize: 'var(--font-size-headline-h1)',
      lineHeight: '1'
    },
    'h2': {
      fontSize: 'var(--font-size-headline-h2)',
      lineHeight: '1'
    },
    'h3': {
      fontSize: 'var(--font-size-headline-h3)',
      lineHeight: '1'
    },
    'h4': {
      fontSize: 'var(--font-size-headline-h4)',
      lineHeight: '1'
    },
    'h5': {
      fontSize: 'var(--font-size-headline-h5)',
      lineHeight: '1'
    },
    'h6': {
      fontSize: 'var(--font-size-headline-h6)',
      lineHeight: '1'
    }
  };
  if (subHeadline) {
    const El = tag || 'p';
    return /*#__PURE__*/React.createElement(El, {
      style: {
        fontFamily: 'var(--font-base)',
        fontWeight: 400,
        fontSize: 'var(--font-size-sub-headline)',
        lineHeight: '1.286em',
        textTransform: 'none',
        letterSpacing: 0,
        color: color || 'var(--color-black)',
        margin: 0
      }
    }, children);
  }
  const sizeStyle = sizeMap[size] || sizeMap['h2'];
  const defaultTag = size.startsWith('h') && size.length === 2 ? size : 'h2';
  const El = tag || defaultTag;
  return /*#__PURE__*/React.createElement(El, {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: 0,
      color: color || 'var(--color-black)',
      margin: 0,
      ...sizeStyle
    }
  }, children);
}
Object.assign(__ds_scope, { Headline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Headline.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
const CHEVRON_DOWN_BLACK = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19.102' height='19.102' viewBox='0 0 19.102 19.102'%3E%3Cpath d='M3.117,16.595l13.507.03-.03-13.507H14.071l.089,9.322L12.439,14.16l-9.322-.089Z' transform='translate(9.551 -4.408) rotate(45)' fill='%23000'/%3E%3C/svg%3E")`;
const CHEVRON_DOWN_WHITE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19.102' height='19.102' viewBox='0 0 19.102 19.102'%3E%3Cpath d='M3.117,16.595l13.507.03-.03-13.507H14.071l.089,9.322L12.439,14.16l-9.322-.089Z' transform='translate(9.551 -4.408) rotate(45)' fill='%23fff'/%3E%3C/svg%3E")`;
const baseInputStyle = theme => ({
  borderRadius: '15px',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '0',
  paddingBottom: '0',
  display: 'block',
  lineHeight: '2',
  fontSize: 'var(--font-size-copy)',
  fontFamily: 'var(--font-base)',
  boxShadow: 'none',
  outline: 'none',
  border: theme === 'dark' ? '1px solid var(--color-white)' : '1px solid var(--color-black)',
  backgroundColor: 'transparent',
  color: theme === 'dark' ? 'var(--color-white)' : 'var(--color-black)',
  width: '100%',
  boxSizing: 'border-box'
});

/**
 * Die Kavallerie form field. Renders input, textarea, select, or checkbox.
 * theme: 'dark' (white borders, for red bg) | 'light' (black borders, for light bg)
 */
function FormField({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  options = [],
  theme = 'dark',
  required,
  name,
  rows = 4
}) {
  const inputStyle = baseInputStyle(theme);
  if (type === 'checkbox') {
    return /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'grid',
        gridTemplateColumns: '21px auto',
        gap: '0.5em',
        fontSize: 'var(--font-size-copy-xsmall)',
        lineHeight: '1.2',
        cursor: 'pointer',
        color: theme === 'dark' ? 'var(--color-white)' : 'var(--color-black)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      name: name,
      required: required,
      style: {
        appearance: 'none',
        WebkitAppearance: 'none',
        width: '21px',
        height: '21px',
        border: `2px solid ${theme === 'dark' ? 'var(--color-white)' : 'var(--color-black)'}`,
        borderRadius: '50%',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", null, label));
  }
  if (type === 'select') {
    return /*#__PURE__*/React.createElement("select", {
      name: name,
      value: value,
      onChange: onChange,
      required: required,
      style: {
        ...inputStyle,
        height: '55px',
        appearance: 'none',
        WebkitAppearance: 'none',
        cursor: 'pointer',
        backgroundImage: theme === 'dark' ? CHEVRON_DOWN_WHITE : CHEVRON_DOWN_BLACK,
        backgroundPosition: 'right 20px center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '10px'
      }
    }, placeholder && /*#__PURE__*/React.createElement("option", {
      value: ""
    }, placeholder), options.map(opt => /*#__PURE__*/React.createElement("option", {
      key: opt.value ?? opt,
      value: opt.value ?? opt
    }, opt.label ?? opt)));
  }
  if (type === 'textarea') {
    return /*#__PURE__*/React.createElement("textarea", {
      name: name,
      placeholder: placeholder,
      value: value,
      onChange: onChange,
      required: required,
      rows: rows,
      style: {
        ...inputStyle,
        padding: '12px 20px',
        lineHeight: 'var(--line-height-copy)',
        resize: 'vertical'
      }
    });
  }
  return /*#__PURE__*/React.createElement("input", {
    type: type,
    name: name,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    style: {
      ...inputStyle,
      height: '55px'
    }
  });
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Headline = __ds_scope.Headline;

__ds_ns.FormField = __ds_scope.FormField;

})();
