import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from 'styled-components'

import { Content,Title,Card} from './components'

import { GlobalStyles, theme } from './styles'
import Grid from './components/grid/ndex';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title data-cy="title">Sudoku</Title>
      <Card data-cy="card">
       <Grid/>
      </Card>
    </Content>
  </ThemeProvider>,
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
