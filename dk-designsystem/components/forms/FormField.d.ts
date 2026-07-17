/**
 * Die Kavallerie form field. Renders a styled input, textarea, select, or checkbox.
 * Use theme='dark' on red/dark backgrounds; theme='light' on grey-light backgrounds.
 */
export interface FormFieldProps {
  /** Field type */
  type?: 'text' | 'email' | 'textarea' | 'select' | 'checkbox';
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  /** Options for select type: string[] or {value, label}[] */
  options?: (string | { value: string; label: string })[];
  /** 'dark' = white borders (for red bg); 'light' = black borders (for light bg) */
  theme?: 'dark' | 'light';
  required?: boolean;
  name?: string;
  /** Textarea rows (default 4) */
  rows?: number;
}
