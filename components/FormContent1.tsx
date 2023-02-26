import React from "react";
import { css } from "emotion";
import TextArea from "./TextArea";
import { Form1 } from "./facebook/typings";
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

type Props = Form1 & { onChange: (value?: Form1) => void };
type State = Form1;

export default class FormContent1 extends React.Component<Props, State> {
  state: State = {};
  componentDidMount(): void {
    const { onChange, ...rest } = this.props;
    this.setState({ ...rest });
  }

  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.formWrap}>
          <TextArea
            labels={[
              "Add the name of the company",
              "Add tagline of your brand"
            ]}
            onChange={(index, value) => {
              if (index === 0) {
                this.setState({ companyName: value });
                this.props.onChange({ companyName: value });
              }
              if (index === 1) {
                this.setState({
                  tagline: value
                });
                this.props.onChange({ tagline: value });
              }
            }}
            value={[this.state?.companyName || "", this.state?.tagline || ""]}
          />
        </div>
      </div>
    );
  }
}
