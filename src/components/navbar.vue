<template>
  <nav class="nav">
    <ul class="nav-list">
      <li>
        <router-link to="/" exact-active-class="active" exact>Home</router-link>
      </li>

      <li class="dropdown">
        <span class="dropbtn">Community ▼</span>
        <ul class="dropdown-content">
          <li>
            <a
              href="/community/member1"
              target="_blank"
              rel="noopener noreferrer"
              >Member1</a
            >
          </li>
          <li>
            <a
              href="/community/member2"
              target="_blank"
              rel="noopener noreferrer"
              >Member2</a
            >
          </li>
          <li>
            <a
              href="/community/member3"
              target="_blank"
              rel="noopener noreferrer"
              >Member3</a
            >
          </li>
        </ul>
      </li>

      <li>
        <a
          href="https://discord.gg/invite/JfMh3P57zh"
          target="_blank"
          rel="noopener noreferrer"
          >Discord</a
        >
      </li>
    </ul>
  </nav>
</template>
