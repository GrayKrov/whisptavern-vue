# 🌙 WhispTavern.com – Vue 3 SPA

WhispTavern is a community-driven fantasy-themed Single Page Application (SPA) built using Vue 3 and Vue Router. This platform will host creator homepages, a unified community portal, and eventually allow users to edit their own pages via Decap CMS.

---

## 🧰 Requirements

- [Node.js](https://nodejs.org/en/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node)
- Git client
- Text editor (e.g. VS Code)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/whisptavern.git
cd whisptavern
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Local Dev Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🏗️ Project Structure

```
whisptavern/
├── public/
│   └── index.html               # Main HTML file with #app root
├── src/
│   ├── assets/
│   │   └── styles.css           # Global styles (medieval/fantasy aesthetic)
│   ├── components/              # Reusable components (e.g. NavBar, Card)
│   ├── pages/                   # Vue Router pages
│   │   ├── Home.vue
│   │   └── Community.vue
│   ├── router/
│   │   └── index.js             # Vue Router configuration
│   ├── App.vue                  # Root component
│   └── main.js                  # App entry point
├── .gitignore
├── README.md
├── package.json
└── vite.config.js
```

---

## 🌐 Routing Setup

Configured in `/src/router/index.js`:

```js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Community from '../pages/Community.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/community', component: Community },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

---

## 🎨 Class & ID Naming Conventions

| Selector        | Use Case                          |
|----------------|-----------------------------------|
| `#app`          | Mount point from `index.html`     |
| `.page`         | Generic page container            |
| `.section`      | Large layout section              |
| `.container`    | Width-constrained content area    |
| `.card`         | Reusable boxed UI element         |
| `.btn`          | Buttons                           |
| `.nav-bar`      | Top-level navigation              |
| `.page-title`   | Titles (H1)                       |
| `.page-content` | Main content paragraph area       |

---

## 🧩 Creating a New Component

1. Create a `.vue` file in `/src/components/`:

```vue
<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: String,
    description: String
  }
};
</script>

<style scoped>
.card {
  padding: 1rem;
  border-radius: 8px;
  background: #2c2c2c;
  color: white;
}
</style>
```

2. Import it into a page or component:

```js
import CardComponent from '../components/CardComponent.vue';
```

---

## 📄 Adding a New Page

1. Create a new file in `/pages`, e.g. `About.vue`.

```vue
<template>
  <div class="page about-page">
    <h1 class="page-title">About</h1>
    <p class="page-content">Welcome to the WhispTavern.</p>
  </div>
</template>
```

2. Add it to the router:

```js
import About from '../pages/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/community', component: Community },
  { path: '/about', component: About }
];
```

---

## 🏘️ Sub-Site / Community Page Setup

You’ll support creator/streamer sub-sites at:

```
/community/username
```

### To Add a New Creator Page:

1. Create a file like:  
`/pages/community/Slayna.vue`

2. Add a dynamic route:
```js
{
  path: '/community/slayna',
  component: () => import('../pages/community/Slayna.vue')
}
```

---

## 🧠 Decap CMS (Future Setup)

Enable in-browser editing for sub-sites using [Decap CMS](https://decapcms.org/):

1. Add `admin/` directory with:
   - `config.yml`
   - `index.html`

2. Configure `config.yml`:

```yaml
backend:
  name: git-gateway
  branch: main

media_folder: "public/uploads"
public_folder: "/uploads"

collections:
  - name: "pages"
    label: "Pages"
    files:
      - label: "Home"
        name: "home"
        file: "src/pages/Home.vue"
        fields:
          - { label: "Title", name: "title", widget: "string" }
```

3. Configure Netlify Identity and Git Gateway (if using Netlify).

---

## 📦 Deployment (Netlify Recommended)

### Manual Deploy
1. Run:
```bash
npm run build
```

2. Upload the `/dist` folder to Netlify or your host.

### Netlify Git Deploy
- Connect your GitHub repo to Netlify
- Set build command: `npm run build`
- Set publish directory: `dist/`

---

## 🛠 Dev Scripts

| Script         | Action                     |
|----------------|----------------------------|
| `npm run dev`  | Start local dev server     |
| `npm run build`| Build for production       |
| `npm run preview` | Preview production build |

---

## ✨ Roadmap

- [ ] Style site with medieval/fantasy UI
- [ ] Add responsive nav bar and footer
- [ ] Create templated community sub-sites
- [ ] Enable Decap CMS for user editing
- [ ] Add animation/interactivity with Vue transitions or GSAP
- [ ] SEO + OpenGraph optimization

---

## 🧙 Credits & License

Made with ❤️ by the WhispTavern team.  
This project is open-source under the MIT License.
