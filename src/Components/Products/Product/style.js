import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    marginBottom: "2rem",
    transition: "all 250ms linear",
    scrollbarWidth: "none",
    width: 2000,
    // margin:20,
    // padding: 10,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  description: {
    textAlign: "justify",
    height: "8rem",
    maxWidth: "230px",
    whiteSpace: "wrap" /* Removendo quebra de linha */,
    overflow: "hidden" /* Removendo a barra de rolagem */,
    textOverflow: "ellipsis" /* Adicionando "..." ao final do texto */,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "justify",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}));
