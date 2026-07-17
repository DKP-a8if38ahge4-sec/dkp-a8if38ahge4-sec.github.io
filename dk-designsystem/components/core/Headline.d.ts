/**
 * Die Kavallerie headline and sub-headline. Headlines use PP Formula Condensed (uppercase);
 * sub-headlines use Helvetica Now Display (regular weight, sentence case).
 *
 * @startingPoint section="Core" subtitle="Headline type scale" viewport="700x400"
 */
export interface HeadlineProps {
  children: React.ReactNode;
  /** Size token — '3xlarge' through 'h6', or 'h1'–'h6' for semantic sizes */
  size?: '3xlarge' | '2xlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Override HTML tag. Defaults to semantic tag matching size. */
  tag?: string;
  /** Override color. Defaults to var(--color-black). */
  color?: string;
  /** Renders as sub-headline (Helvetica Now, regular, 14/24px) instead of PP Formula. */
  subHeadline?: boolean;
}
