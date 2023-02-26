import React from "react";
import FormContent1 from "./FormContent1";
import FormContent2 from "./FormContent2";
import FormContent3 from "./FormContent3";
import FormContent4 from "./FormContent4";
import BottomBar from "./BottomBar";
import { css } from "emotion";
import { colors } from "pebble-web";
import ProgressBar from "./ProgressBar";
import { Form1, Form2, Form3, FormDetails } from "./facebook/typings";
const styles = {
  contentWrap: css({
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "space-between",
    flex: 4 / 5,
    backgroundColor: `${colors.gray.lightest}`,
    width: "100%",
    overflowY: "hidden",
    zIndex: 0
  })
};
type State = {
  index: number;
  formDetails?: FormDetails;
};

export default class FormWrapper extends React.Component<{}, State> {
  state: State = {
    index: 1
  };
  render() {
    const { index } = this.state;
    return (
      <div className={styles.contentWrap}>
        <ProgressBar
          tabs={[
            "Name of the company",
            "About company",
            "Select Projects",
            "Select Logo"
          ]}
          selectedTab={index}
        />
        {index === 1 && (
          <FormContent1
            {...this.state.formDetails}
            onChange={data =>
              this.setState({
                formDetails: {
                  ...this.state.formDetails,
                  ...data
                }
              })
            }
          />
        )}
        {index === 2 && (
          <FormContent2
            {...this.state.formDetails}
            onChange={data =>
              this.setState({
                formDetails: {
                  ...this.state.formDetails,
                  ...data
                }
              })
            }
          />
        )}
        {index === 3 && (
          <FormContent3
            {...this.state.formDetails}
            onChange={data =>
              this.setState({
                formDetails: {
                  ...this.state.formDetails,
                  ...data
                }
              })
            }
          />
        )}
        {index === 4 && <FormContent4 />}
        <BottomBar
          onNext={() => this.setState({ index: index + 1 })}
          onPrev={() => index > 1 && this.setState({ index: index - 1 })}
        />
      </div>
    );
  }
}
