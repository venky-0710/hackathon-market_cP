import { css } from "emotion";
import { colors, typography } from "pebble-web";

export const logo = css({
   paddingLeft: "25px",
   background: colors.violet.darker,
   display: "flex",
   alignItems: "center",
   height: "50px",
});

export const wrapper = css({
   position: "fixed",
   top: 0,
   right: 0,
   bottom: 0,
   left: 0,
   backgroundColor: "rgba(0,0,0,0.4)",
   zIndex: 10,
});

export const sideBarWrap = css({
   width: "270px",
   flex:1/5,
   backgroundColor: colors.white.base,
   boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.04)",
   zIndex: 11,
   display: "flex",
   flexDirection: "column",
   overflowY: "scroll",
   padding: "24px 0px",
   fontFamily: "Graphik",
});

export const sideLinksWrap = css({
   display: "flex",
   justifyContent: "flex-start",
   flexDirection: "column",
});

export const eachTag = css({
   padding: "15px",
   verticalAlign: "center",
   display: "flex",
   alignItems: "center",
   fontSize: "14px",
   fontWeight: "bold",
   color: colors.gray.darker,
   borderRadius: "3px",
   cursor: "pointer",
   textDecoration: "none",
   "&:hover": {
      background: colors.gray.lighter,
   },
});

export const selectedTag = css({
   background: colors.violet.lightest,
   border:"none",
   color: colors.violet.base,
   "&:hover": {
      background: colors.violet.lightest,
   },
});

export const link = css({
   fontWeight: 500,
   fontSize: "12px",
   cursor: "pointer",
});

export const progressBar = css({
   display: "flex",
   width: "90%",
   background: colors.white.base,
   justifyContent: "space-between",
   padding: "12px",
   alignItems:"center"
});

export const progressIcon = css({
   width: "32px",
   height: "32px",
   display:"flex",
   justifyContent: "center",
   alignItems: "center",
   borderRadius: "50%",
   textAlign: "center",
   color: colors.white.base
});

export const progressText = css({
   fontSize: "14px",
   fontWeight: 500,
});

export const divider = css({
   display:"flex",
   flexGrow:1,
   marginLeft: "10px",
   marginRight: "10px",
   border: `1px solid ${colors.gray.base}`
 })
