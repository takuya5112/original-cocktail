import { createRoot } from 'react-dom/client';
import { App } from './App';

const root = createRoot(document.getElementById('root') as HTMLInputElement);
root.render(<App />);