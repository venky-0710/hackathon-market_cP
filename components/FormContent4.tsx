import React from "react";
import { css, cx } from "emotion";
import typography from "./typography";
import { colors } from "pebble-shared";

const styles = {
   cardWrap: css({
      display: "flex",
      padding: "24px",
      gap: "16px",
      alignItems: "flex-start",
      justifyContent: "center",
      background: colors.white.base,
   }),
   card: css({
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      border: `1px solid ${colors.gray.light}`,
      borderRadius: "4px",
      cursor: "pointer",
   }),

   selectedCard: css({
      background: colors.violet.lightest,
   }),
};

const cards = [
   {
      id: 1,
      header: "Upload your own logo",
      text: "Best if you have your own logo and want to continue with that",
   },
   {
      id: 2,
      header: "Create new logo",
      text: "Use the power of AI to generate beautiful logo for your company, choose the one you like.",
   },
];

type State = {
   selected: number;
};
export default class FormContent4 extends React.Component<{}, State> {
    state:State ={
        selected: -1
    }
   render() {
      const { selected } = this.state;
      return (
         <div className={css({ display: "flex", flexDirection: "column" })}>
            <div className={cx(typography.medium20, css({ marginBottom: "20px" }))}>Select Logo</div>
            <div className={styles.cardWrap}>
               {cards.map((card) => (
                  <div
                     className={cx(styles.card, card.id === selected && styles.selectedCard)}
                     key={card.id}
                     onClick={() => this.setState({ selected: card.id })}
                  >
                     <div className={cx(typography.medium14, css({ color: colors.gray.darker }))}>{card.header}</div>
                     <div className={cx(typography.regular12, css({ color: colors.gray.base }))}>{card.text}</div>
                  </div>
               ))}
            </div>
         </div>
      );
   }
}
