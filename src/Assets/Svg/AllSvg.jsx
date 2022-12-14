function CartIcon(props) {
  return (
    <svg width='27' height='27' viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z'
      ></path>
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg width='27' height='27' viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z'
      ></path>
    </svg>
  );
}
export { CartIcon, HeartIcon };
