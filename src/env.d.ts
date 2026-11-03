// Experimental WebMCP attributes are not yet included in Astro's HTML types.
declare namespace astroHTML.JSX {
  interface InputHTMLAttributes {
    toolparamdescription?: string;
  }
  interface FieldsetHTMLAttributes {
    toolparamdescription?: string;
  }
}
