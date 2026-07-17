import React from 'react';

/**
 * Die Kavallerie headline component.
 * Uses PP Formula Condensed (weight 900, uppercase) for headlines,
 * Helvetica Now Display (weight 400) for sub-headlines.
 */
export function Headline({
  children,
  size = 'h2',
  tag,
  color,
  subHeadline = false,
}) {
  const sizeMap = {
    '3xlarge': { fontSize: 'var(--font-size-3xlarge)', lineHeight: '0.950em' },
    '2xlarge': { fontSize: 'var(--font-size-2xlarge)', lineHeight: '1em' },
    'xlarge':  { fontSize: 'var(--font-size-xlarge)',  lineHeight: '1' },
    'large':   { fontSize: 'var(--font-size-large)',   lineHeight: '1.200em' },
    'medium':  { fontSize: 'var(--font-size-medium)',  lineHeight: '1' },
    'small':   { fontSize: 'var(--font-size-small)',   lineHeight: '1' },
    'h1': { fontSize: 'var(--font-size-headline-h1)', lineHeight: '1' },
    'h2': { fontSize: 'var(--font-size-headline-h2)', lineHeight: '1' },
    'h3': { fontSize: 'var(--font-size-headline-h3)', lineHeight: '1' },
    'h4': { fontSize: 'var(--font-size-headline-h4)', lineHeight: '1' },
    'h5': { fontSize: 'var(--font-size-headline-h5)', lineHeight: '1' },
    'h6': { fontSize: 'var(--font-size-headline-h6)', lineHeight: '1' },
  };

  if (subHeadline) {
    const El = tag || 'p';
    return (
      <El style={{
        fontFamily: 'var(--font-base)',
        fontWeight: 400,
        fontSize: 'var(--font-size-sub-headline)',
        lineHeight: '1.286em',
        textTransform: 'none',
        letterSpacing: 0,
        color: color || 'var(--color-black)',
        margin: 0,
      }}>
        {children}
      </El>
    );
  }

  const sizeStyle = sizeMap[size] || sizeMap['h2'];
  const defaultTag = size.startsWith('h') && size.length === 2 ? size : 'h2';
  const El = tag || defaultTag;

  return (
    <El style={{
      fontFamily: 'var(--font-headline)',
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: 0,
      color: color || 'var(--color-black)',
      margin: 0,
      ...sizeStyle,
    }}>
      {children}
    </El>
  );
}
