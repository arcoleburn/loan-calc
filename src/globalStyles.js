import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Alice&family=Merriweather+Sans:wght@300;400;700&display=swap');

//header font: 'Merriweather Sans' 
//text font: 'Alice'


:root{
  --green: #3cb09b;
  --blue: #324d5d;
  --liteGreen: #eef7ef;
  --lgShadow: #1f4323;
  --orange: #e37263;
  --white: #fff;
  --darkText: #4A4a4a;
  --lightText: #bbbbbb;
  
  --fontSuperBig: 2.5rem;
  --fontBig: 1.5rem;
  --fontMed: 1.2rem;
  --fontSmall: 1rem;
  --fontTiny:.8rem;
}

body{
  background-color: var(--liteGreen);
  label, datalist{
    font-family: 'Alice';
  }
}


`;
