import React from "react";
import { css ,cx} from "emotion";
type Props = {
   label: string;
   className?: string;
};

const styles = {
   label: css({
      display: "flex",
      justifyContent: "space-between",
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
      alignItems: "center",
   }),
};
export default class Label extends React.Component<Props> {
   render() {
      const { label } = this.props;
      return (
         <div className={cx(styles.label,this.props.className)} key={label}>
            <div>{label}</div>
         </div>
      );
   }
}
