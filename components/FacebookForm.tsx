import React from "react";
import ProgressBar from "./ProgressBar";
import { css } from "emotion";
import { colors } from "pebble-web";
import BudgetDuration from "./facebook/BudgetDuration";
import Audience from "./facebook/Audience";
import BottomBar from "./BottomBar";
import AdDetailsType from "./facebook/AdDetails";
import AdDetails from "./facebook/AdDetails";
import { AudienceType, Budget } from "./facebook/typings";
const styles = {
  contentWrap: css({
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "space-between",
    gap: "40px",
    flex: 4 / 5,
    backgroundColor: `${colors.gray.lightest}`,
    width: "100%",
    overflowY: "auto",
    zIndex: 0
  })
};

type State = {
  index: number;
  budget?: Budget;
  audience?: AudienceType;
  adDetails?: AdDetailsType;
};
export default class FacebookForm extends React.Component<{}, State> {
  state: State = {
    index: 0,
    audience: {
      ageGroup: "30"
    }
  };
  render() {
    const { index } = this.state;
    return (
      <div className={styles.contentWrap}>
        <ProgressBar
          tabs={["Budget & Duration", "Audience", "Targeting"]}
          selectedTab={index}
        />
        {index === 0 && (
          <BudgetDuration
            onChange={(key, value) =>
              this.setState({
                budget: {
                  ...this.state.budget,
                  [key]: value
                }
              })
            }
            {...this.state.budget}
          />
        )}
        {index === 1 && (
          <Audience
            onChange={(key:string, value) =>
              this.setState({
                audience: {
                  ...this.state.audience,
                  [key]: value
                }
              })
            }
            {...this.state.audience}
          />
        )}
        {index === 2 && (
          <AdDetails
            onChange={(key:string, value) =>
              this.setState({
                adDetails: {
                  ...this.state.adDetails,
                  [key]: value
                }
              })
            }
            {...this.state.adDetails}
          />
        )}
        <BottomBar
          onNext={() => this.setState({ index: index + 1 })}
          onPrev={() => index > 0 && this.setState({ index: index - 1 })}
        />
      </div>
    );
  }
}
