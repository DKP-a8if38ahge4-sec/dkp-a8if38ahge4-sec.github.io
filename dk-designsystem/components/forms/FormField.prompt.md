# FormField

Styled form input, select, textarea, or checkbox for Die Kavallerie forms.
Always set `theme` to match the background: `'dark'` on red sections, `'light'` on grey-light.

```jsx
<FormField type="text" placeholder="Ihr Name" theme="dark" />
<FormField type="email" placeholder="E-Mail-Adresse" theme="dark" />
<FormField type="textarea" placeholder="Ihre Nachricht" rows={5} theme="dark" />
<FormField type="select" placeholder="Bitte wählen" options={['Option A', 'Option B']} theme="dark" />
<FormField type="checkbox" label="Ich stimme der Datenschutzerklärung zu." theme="dark" required />
<FormField type="text" placeholder="Name" theme="light" />
```

## Themes
- `dark` — white 1px border and text. For use on red (`--color-red`) backgrounds.
- `light` — black 1px border and text. For use on grey-light (`--color-grey-light`) backgrounds.
