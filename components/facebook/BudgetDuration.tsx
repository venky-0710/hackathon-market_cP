import React from "react";
import { css, cx } from "emotion";
import { colors } from "pebble-shared";
import Label from "./label";
import { Input } from "pebble-web";
import { TextField } from "@material-ui/core";
import typography from "@components/typography";
import { Budget, onChange } from "./typings";

const styles = {
  wrap: css({
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }),

  budget: css({
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    background: colors.white.base,
    gap: "10px",
    alignItems: "flex-start",
    borderRadius: "4px",
    cursor: "pointer",
    height: "173px"
  }),

  divider: css({
    border: `1px solid ${colors.gray.lighter}`,
    display: "flex",
    height: "0",
    width: "100%"
  })
};

type Props = { onChange: onChange } & Budget;

export default class FacebookForm extends React.Component<Props> {
  render(): React.ReactNode {
    const { props } = this;
    return (
      <div className={styles.wrap}>
        <div className={styles.budget}>
          <Label label="Budget" />
          <div className={styles.divider} />
          <div className={cx(typography.gray, typography.regular12)}>
            Avg daily Budget
          </div>
          <Input
            type="text"
            onChange={value => this.props.onChange("dailyBudget", value)}
            placeholder=""
            value={props.dailyBudget}
          />
        </div>
        <div className={styles.budget}>
          <Label label="Duration" />
          <div className={styles.divider} />
          <div className={css({ display: "flex", gap: "19px" })}>
            <div
              className={css({
                display: "flex",
                gap: "5px",
                flexDirection: "column"
              })}
            >
              <div className={cx(typography.gray, typography.regular12)}>
                Start Date
              </div>
              <TextField
                placeholder=""
                type={"date"}
                onChange={e => this.props.onChange("startDate", e.target.value)}
                value={props.startDate}
              />
            </div>
            <div
              className={css({
                display: "flex",
                gap: "5px",
                flexDirection: "column"
              })}
            >
              <div className={cx(typography.gray, typography.regular12)}>
                End Date
              </div>
              <TextField
                id="date"
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => this.props.onChange("endDate", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
