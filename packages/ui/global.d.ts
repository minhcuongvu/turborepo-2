declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare namespace JSX {
  // this used to work but not recommended. 
  // now this is just here for reference.
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
