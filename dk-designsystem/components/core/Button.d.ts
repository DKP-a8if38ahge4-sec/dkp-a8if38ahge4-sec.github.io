/**
 * Die Kavallerie pill button. Use for all CTAs across the site.
 * Default variant is red outline; hover fills solid. Use 'white' on red backgrounds.
 *
 * @startingPoint section="Core" subtitle="Pill CTA button, all variants" viewport="700x200"
 */
export interface ButtonProps {
  /** Button label text */
  children: React.ReactNode;
  /** Visual variant */
  variant?: 'red' | 'black' | 'white';
  /** 'default' shows right-arrow icon; 'large' is bigger with no icon */
  size?: 'default' | 'large';
  /** Renders as <a> when provided */
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
