export const config = {
  github: {
    login: "alucardzlh", // github login name, not user name
    repo: "alucardzlh.github.io", //"urodele",
    logInUrl: "https://github.com/login/oauth/authorize?client_id=Ov23litwlAHIYV70Ifwx&redirect_uri=https://alucardzlh.github.io&scope=repo,user",
    logInAuthUrl: "https://github.com/login/oauth/authorize?client_id=Ov23litwlAHIYV70Ifwx&redirect_uri=https://alucardzlh.github.io&scope=repo,use",
  },
  head: {
    title: "章北海的根据地",
  },
  footer: {
    copyright: "© Glink",
    copyrightUrl: "https://github.com/glink24/urodele",
  },
  giscus: false as object | false,
} as const;

export default config;
