export const config = {
  github: {
    login: "alucardzlh", // github login name, not user name
    repo: "alucardzlh.github.io", //"urodele",
    logInUrl: "https://github-login.link-ai.workers.dev/",
    logInAuthUrl: "https://github-login.link-ai.workers.dev/",
  },
  head: {
    title: "Urodele",
  },
  footer: {
    copyright: "© Alucard·D·Zhang",
    copyrightUrl: "https://github.com/alucardzlh",
  },
  giscus: false as object | false,
} as const;

export default config;
