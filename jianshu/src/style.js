import {createGlobalStyle} from  'styled-components'

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    p,
    ol,
    ul,
    li,
    dl,
    dt,
    dd,
    blockquote,
    figure,
    fieldset,
    legend,
    textarea,
    pre,
    iframe,
    hr,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      padding: 0;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 100%;
      font-weight: normal;
    }
    
    ul {
      list-style: none;
    }
    
    button,
    input,
    select,
    textarea {
      margin: 0;
      outline:none;
      border:none;
    }
    
    html {
      box-sizing: border-box;
    }
    
    *, *::before, *::after {
      box-sizing: inherit;
    }
    
    img,
    video {
      height: auto;
    }
    
    iframe {
      border: 0;
    }
    
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    
    td,
    th {
      padding: 0;
    }
    
    td:not([align]),
    th:not([align]) {
      text-align: left;
    }
    a{
        text-decoration:none;
        color:#333;
    }
    html,body,#root{
        width:100%;
        height:100%;
    }
    p,div{
        word-wrap:break-word;  
        word-break:break-all; 
    }
`
