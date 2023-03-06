import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
// main.ts
import GitsUi from "@gits-id/ui";

// load CSS bundle
import '@gits-id/ui/styles';

// or uncomment this line to load SCSS styles
// import '@gits-id/ui/styles.scss';

const app = createApp(App);

app.use(GitsUi);

createApp(App).mount('#app')
