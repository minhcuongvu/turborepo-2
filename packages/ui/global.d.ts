declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare namespace JSX {
  interface IntrinsicElements {
    'root-component': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    'navbar-component': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
