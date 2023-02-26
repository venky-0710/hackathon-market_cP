import { Button, colors } from "pebble-web";
import React from "react";
import { css } from "emotion";

const styles = {
   wrap: css({
      display: "flex",
      justifyContent: "flex-end",
      padding: "24px 12px",
      gap: "10px",
      bottom: 0,
      position: "sticky",
      zIndex: 10,
      background: colors.white.base,
      width: "100%",
      boxShadow: "0px 0px 9px rgba(0, 0, 0, 0.2)",
   }),
};

type Props = {
   onNext: () => void;
   onPrev: () => void;
};
export default class BottomBar extends React.Component<Props> {
   render() {
      return (
         <div className={styles.wrap}>
            <Button
               className={css({ background: colors.gray.base, 
                  color: colors.gray.darker,
                  "&:hover":{
                     background:colors.gray.base
                  }   
               
               })}
               onClick={this.props.onPrev}
            >
               Go Back
            </Button>
            <Button onClick={this.props.onNext}>Continue</Button>
         </div>
      );
   }
}
