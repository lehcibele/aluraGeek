import { Header } from './components/Header'
import { Main } from './components/Main';

import './style.css'

function main () {
  const app = document.getElementById('app');
  if(!app) return;

  app.appendChild(Header());
  app.appendChild(Main());
}

main();
