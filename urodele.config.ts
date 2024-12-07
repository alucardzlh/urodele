export const config = {
  github: {
    login: "alucardzlh", // github login name, not user name
    repo: "alucardzlh.github.io", //"urodele",
    logInUrl: "https://github-login.alucardzlh.workers.dev/api/oauth/authorize?redirect_uri=https://alucardzlh.github.io/login",
    // logInAuthUrl: "https://github.com/login/oauth/authorize?client_id=Ov23litwlAHIYV70Ifwx&redirect_uri=https://alucardzlh.github.io&scope=repo,use",
    logInAuthUrl: "https://github-login.alucardzlh.workers.dev/api/oauth/token"
  },
  head: {
    title: "Welcome",
  },
  footer: {
    copyright: "© Alucardzlh",
    copyrightUrl: "https://github.com/alucardzlh",
  },
  giscus: {
    src: "https://giscus.app/client.js",
    "data-repo": "alucardzlh/alucardzlh.github.io",
    "data-repo-id": "R_kgDONWtphA",
    "data-category": "Announcements",
    "data-category-id": "DIC_kwDONWtphM4CkxzD",
    "data-mapping": "pathname",
    "data-strict": "0",
    "data-reactions-enabled": "1",
    "data-emit-metadata": "0",
    "data-input-position": "bottom",
    "data-theme": "preferred_color_scheme",
    "data-lang": "zh-CN",
    crossorigin: "anonymous",
    async: true,
  }as object | false,
} as const;

export default config;
