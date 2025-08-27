import { Header } from './components/Header.ts'

import './style.css'

function main () {
  const app = document.getElementById('app');
  if(!app) return;

  app.appendChild(Header());
}

main();
