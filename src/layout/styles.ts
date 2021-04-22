export const styles = () => ({
    root: {
      textAlign: "center" as any,
      display: "flex",
      flexDirection: "column" as any,
      minHeight: "100vh",
      color: "#000133",
    },
    container: {
      display: "flex",
      flex: 1,
    },
    drawer: {
      width: "240px",
      position: "static" as any,
    },
    main: {
      flex: 1,
      background: "#f7f5f5",
      color: "black",
      padding: "60px"
    },
    link: {
        textDecoration: "none" as any,
        color: "black",
        "&:hover": {
        color: "black",
        textDecoration: "none" as any
        }
    },
    nested: {
        paddingLeft: '32px',
      },
  
  
  });
  
  