import { css } from "emotion";
import { colors } from "pebble-shared";

export default {
  // regular
  regular10: css({
    fontWeight: 400,
    fontSize: "10px"
  }),
  regular12: css({
    fontWeight: 400,
    fontSize: "12px"
  }),
  regularItalic12: css({
    fontWeight: 400,
    fontStyle: "italic",
    fontSize: "12px"
  }),
  regular14: css({
    fontWeight: 400,
    fontSize: "14px"
  }),

  // medium
  medium10: css({
    fontWeight: 500,
    fontSize: "10px"
  }),

  medium20: css({
    fontWeight: 500,
    fontSize: "20px"
  }),
  mediumItalic10: css({
    fontWeight: 500,
    fontStyle: "italic",
    fontSize: "10px"
  }),

  mediumItalic12: css({
    fontWeight: 500,
    fontStyle: "italic",
    fontSize: "12px"
  }),

  medium12: css({
    fontWeight: 500,
    fontSize: "12px"
  }),
  medium14: css({
    fontWeight: 500,
    fontSize: "14px"
  }),
  medium18: css({
    fontWeight: 500,
    fontSize: "18px"
  }),

  // semibold
  semibold10: css({
    fontWeight: 600,
    fontSize: "10px"
  }),
  semibold12: css({
    fontWeight: 600,
    fontSize: "12px"
  }),
  semibold14: css({
    fontWeight: 600,
    fontSize: "14px"
  }),
  semibold16: css({
    fontWeight: 600,
    fontSize: "16px"
  }),
  semibold18: css({
    fontWeight: 600,
    fontSize: "18px"
  }),
  semibold24: css({
    fontWeight: 600,
    fontSize: "24px"
  }),

  // misc
  textOverflow: css({
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }),

  tansparent: css({ color: "transparent" }),

  white: css({ color: colors.white.base }),

  gray: css({ color: colors.gray.base }),
  dark: css({ color: colors.gray.dark }),
  darker: css({ color: colors.gray.darker }),

  violet: css({ color: colors.violet.base }),

  success: css({ color: colors.emerald.base }),
  warning: css({ color: colors.yellow.base }),
  error: css({ color: colors.red.base })
};
