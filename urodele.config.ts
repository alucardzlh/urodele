export const config = {
  github: {
    login: "alucardzlh", // github login name, not user name
    repo: "alucardzlh.github.io", //"urodele",
    logInUrl: "https://github.com/login/oauth/authorize?client_id=Ov23litwlAHIYV70Ifwx&redirect_uri=https://alucardzlh.github.io",
    logInAuthUrl: "",
  },
  head: {
    title: "章北海的根据地",
  },
  footer: {
    copyright: "© Alucard·D·Zhang",
    copyrightUrl: "https://github.com/alucardzlh",
  },
  giscus: false as object | false,
} as const;

export default config;
