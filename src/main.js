import './app.css'
import Home from './routes/+page.svelte'

const app = new Home({
  target: document.getElementById('app'),
})

export default app
