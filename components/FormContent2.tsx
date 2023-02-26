import React from "react";
import { css } from "emotion";
import ProgressBar from "./ProgressBar";
import TextArea from "./TextArea";
import { Form2 } from "./facebook/typings";
const styles = {
  wrap: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  }),
  formWrap: css({
    display: "flex",
    padding: "100px"
  })
};

type Props = { onChange: (value?: Form2) => void } & Form2;

type State = Form2;
export default class FormContent2 extends React.Component<Props, State> {
  state: State = {};
  componentDidMount() {
    const { onChange, ...rest } = this.props;
    this.setState({ ...rest });
  }
  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.formWrap}>
          <TextArea
            labels={["Add Something about company"]}
            onChange={(index, value: string) => {
              this.setState({
                desc: value
              });
              this.props.onChange({ desc: value });
            }}
            value={[this.state?.desc || ""]}
          />
        </div>
      </div>
    );
  }
}
