import React from 'react';

const CHEVRON_DOWN_BLACK = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19.102' height='19.102' viewBox='0 0 19.102 19.102'%3E%3Cpath d='M3.117,16.595l13.507.03-.03-13.507H14.071l.089,9.322L12.439,14.16l-9.322-.089Z' transform='translate(9.551 -4.408) rotate(45)' fill='%23000'/%3E%3C/svg%3E")`;
const CHEVRON_DOWN_WHITE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19.102' height='19.102' viewBox='0 0 19.102 19.102'%3E%3Cpath d='M3.117,16.595l13.507.03-.03-13.507H14.071l.089,9.322L12.439,14.16l-9.322-.089Z' transform='translate(9.551 -4.408) rotate(45)' fill='%23fff'/%3E%3C/svg%3E")`;

const baseInputStyle = (theme) => ({
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
  boxSizing: 'border-box',
});

/**
 * Die Kavallerie form field. Renders input, textarea, select, or checkbox.
 * theme: 'dark' (white borders, for red bg) | 'light' (black borders, for light bg)
 */
export function FormField({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  options = [],
  theme = 'dark',
  required,
  name,
  rows = 4,
}) {
  const inputStyle = baseInputStyle(theme);

  if (type === 'checkbox') {
    return (
      <label style={{
        display: 'grid',
        gridTemplateColumns: '21px auto',
        gap: '0.5em',
        fontSize: 'var(--font-size-copy-xsmall)',
        lineHeight: '1.2',
        cursor: 'pointer',
        color: theme === 'dark' ? 'var(--color-white)' : 'var(--color-black)',
        alignItems: 'start',
      }}>
        <input
          type="checkbox"
          name={name}
          required={required}
          style={{
            appearance: 'none',
            WebkitAppearance: 'none',
            width: '21px',
            height: '21px',
            border: `2px solid ${theme === 'dark' ? 'var(--color-white)' : 'var(--color-black)'}`,
            borderRadius: '50%',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        />
        <span>{label}</span>
      </label>
    );
  }

  if (type === 'select') {
    return (
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          ...inputStyle,
          height: '55px',
          appearance: 'none',
          WebkitAppearance: 'none',
          cursor: 'pointer',
          backgroundImage: theme === 'dark' ? CHEVRON_DOWN_WHITE : CHEVRON_DOWN_BLACK,
          backgroundPosition: 'right 20px center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '10px',
        }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value ?? opt} value={opt.value ?? opt}>
            {opt.label ?? opt}
          </option>
        ))}
      </select>
    );
  }

  if (type === 'textarea') {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        style={{
          ...inputStyle,
          padding: '12px 20px',
          lineHeight: 'var(--line-height-copy)',
          resize: 'vertical',
        }}
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      style={{ ...inputStyle, height: '55px' }}
    />
  );
}
