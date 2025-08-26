import './style.css'

import { Header } from './components/Header.ts'

function main () {
  const app = document.getElementById('app');
  if(!app) return;

  app.appendChild(Header());
}

main();
