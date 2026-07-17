import React from 'react';

const ARROW_SVG = {
  red: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17.799' height='17.799' viewBox='0 0 17.799 17.799'%3E%3Cpath d='M2.36,12.563l10.226.022L12.563,2.36h-1.91l.067,7.057L1.326,0,0,1.326,9.417,10.72,2.36,10.653Z' transform='translate(0 8.899) rotate(-45)' fill='%23ff003c'/%3E%3C/svg%3E")`,
  white: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17.799' height='17.799' viewBox='0 0 17.799 17.799'%3E%3Cpath d='M2.36,12.563l10.226.022L12.563,2.36h-1.91l.067,7.057L1.326,0,0,1.326,9.417,10.72,2.36,10.653Z' transform='translate(0 8.899) rotate(-45)' fill='%23fff'/%3E%3C/svg%3E")`,
  black: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17.799' height='17.799' viewBox='0 0 17.799 17.799'%3E%3Cpath d='M2.36,12.563l10.226.022L12.563,2.36h-1.91l.067,7.057L1.326,0,0,1.326,9.417,10.72,2.36,10.653Z' transform='translate(0 8.899) rotate(-45)' fill='%231d1d1d'/%3E%3C/svg%3E")`,
};

/**
 * Die Kavallerie button. Pill-shaped, 2px border.
 * Variants: 'red' (default), 'black', 'white' (for dark backgrounds).
 * Sizes: 'default' (with arrow icon), 'large' (no arrow, bigger padding).
 */
export function Button({ children, variant = 'red', size = 'default', href, onClick, type = 'button', disabled }) {
  const [hovered, setHovered] = React.useState(false);

  const isLarge = size === 'large';

  const variantStyles = {
    red: {
      border: '2px solid var(--color-red)',
      color: hovered ? 'var(--color-white)' : 'var(--color-red)',
      backgroundColor: hovered ? 'var(--color-red)' : 'transparent',
      arrowColor: hovered ? 'white' : 'red',
    },
    black: {
      border: '2px solid var(--color-black)',
      color: hovered ? 'var(--color-white)' : 'var(--color-black)',
      backgroundColor: hovered ? 'var(--color-black)' : 'transparent',
      arrowColor: hovered ? 'white' : 'black',
    },
    white: {
      border: '2px solid var(--color-white)',
      color: hovered ? 'var(--color-red)' : 'var(--color-white)',
      backgroundColor: hovered ? 'var(--color-white)' : 'transparent',
      arrowColor: hovered ? 'red' : 'white',
    },
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
    transition: 'background-color 0.2s, color 0.2s',
  };

  const arrowStyle = {
    display: 'inline-block',
    width: '17px',
    height: '17px',
    backgroundImage: ARROW_SVG[v.arrowColor],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    flexShrink: 0,
  };

  const El = href ? 'a' : 'button';

  return (
    <El
      href={href}
      onClick={disabled ? undefined : onClick}
      type={href ? undefined : type}
      disabled={El === 'button' ? disabled : undefined}
      style={baseStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {!isLarge && <span style={arrowStyle} aria-hidden="true" />}
    </El>
  );
}
