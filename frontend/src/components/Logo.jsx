import { useStore } from '../context/StoreContext';

/**
 * Brand logo (FURCIL horizontal wordmark).
 *  - When an admin has uploaded a store logo (Settings → Brand), show it as-is.
 *  - Otherwise use the bundled `full_logo.png`. It is a light/cream wordmark, so
 *    it is kept as-is on dark surfaces and rendered as a black silhouette on
 *    light surfaces (via `brightness-0`, flipped back on dark via `dark:`).
 *  - `white` forces the dark-surface (cream) treatment — used by the landing nav
 *    when it sits transparent over the dark hero, regardless of the active theme.
 */
export default function Logo({ className = 'h-10', white }) {
  const { logo, name } = useStore();
  const src = logo || '/full_logo.png';
  const tone = logo ? '' : (white ? '' : 'brightness-0 dark:brightness-100');

  return (
    <img
      src={src}
      alt={name || 'FURCIL'}
      className={`w-auto object-contain ${className} ${tone}`}
    />
  );
}
