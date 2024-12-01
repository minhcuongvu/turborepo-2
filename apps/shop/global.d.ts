declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare namespace JSX {
  interface IntrinsicElements {
    root: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    navbar: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
