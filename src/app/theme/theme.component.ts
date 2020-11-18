export interface Theme {
  name: string;
  properties: any;
}

// #6A6A6B,#504D4D,#838383,#FF9A00

export const light: Theme = {
  name: "light",
  properties: { 
    "--foreground-default": "#000",
    "--foreground-secondary": "#41474D",
    "--foreground-tertiary": "#797C80",
    "--foreground-quaternary": "#000",
    "--foreground-light": "#41474D",
    "--foreground-input":"#000",
    "--foreground-white":"#fff",
    

    "--background-default": "#ffe8be",
    "--background-secondary": "#fff",
    "--background-tertiary": "#613f61",
    "--background-light": "#FFFFFF",
    "--background-input":"#f3f3f3",
    "--background-ul-li":"#faebd1",
    "--background-ul-hover": "#fff",

    "--primary-default": "#5DFDCB",
    "--primary-dark": "#24B286",
    "--primary-light": "#B2FFE7",

    "--error-default": "#EF3E36",
    "--error-dark": "#800600",
    "--error-light": "#FFCECC",

    "--background-tertiary-shadow": "0 1px 3px 0 rgba(92, 125, 153, 0.5)"
  }
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--foreground-default":"#fff",
    "--foreground-secondary": "#FF9A00",
    "--foreground-tertiary": "#F97676",
    "--foreground-quaternary": "#FFB749",
    "--foreground-light": "#fff",
    "--foreground-input":"#000",
    "--foreground-white":"#fff",
  
    "--background-default": "#686767",
    "--background-secondary": "#424242",
    "--background-tertiary": "#2e2e2e",
    "--background-light": "#FF9A00",
    "--background-input":"#f3f3f3",
    "--background-ul-li":"#686767",
    "--background-ul-hover": "#3a3a39",

    "--primary-default": "#5DFDCB",
    "--primary-dark": "#24B286",
    "--primary-light": "#B2FFE7",

    "--error-default": "#EF3E36",
    "--error-dark": "#800600",
    "--error-light": "#FFCECC",

    "--background-tertiary-shadow": "0 1px 3px 0 rgba(8, 9, 10, 0.5)"
  }
};