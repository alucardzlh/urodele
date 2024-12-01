export const config = {
  github: {
    login: "alucardzlh", // github login name, not user name
    repo: "urodele", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
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
