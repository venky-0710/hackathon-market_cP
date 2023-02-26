import React from "react";
import { css, cx } from "emotion";
import typography from "@components/typography";
import Label from "./label";
import { colors } from "pebble-shared";
import { Input } from "pebble-web";
import { onChange, AdDetailsType } from "./typings";
const styles = {
  wrap: css({
    display: "flex",
    flexDirection: "column",
    background: colors.white.base
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

type Props = { onChange: onChange } & AdDetailsType;
export default class AdDetails extends React.Component<Props> {
  render() {
    const {props} = this;
    return (
      <div className={styles.wrap}>
        <div className={css({ display: "flex", justifyContent: "flex-start" })}>
          <Label label="Ad-creative" />
        </div>
        <div
          className={css({ display: "flex", justifyContent: "space-around" })}
        >
          <div
            className={css({
              display: "flex",
              padding: "76px 16px",
              flexDirection: "column",
              gap: "10px"
            })}
          >
            <img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              width={300}
              height={180}
            />
            <div className={cx(typography.gray, typography.medium12)}>
              Use Ad-generated via AI
            </div>
          </div>

          <div
            className={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            })}
          >
            or
          </div>
          <div
            className={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            })}
          >
            <div
              className={cx(
                typography.medium12,
                typography.gray,
                css({ cursor: "pointer" })
              )}
            >
              Upload your own add
            </div>
          </div>
        </div>

        <div className={styles.budget}>
          <Label label="Primary Text" />
          <div className={styles.divider} />
          <div className={cx(typography.gray, typography.regular12)}>
            Primary Text
          </div>
          <Input
            type="text"
            onChange={value => this.props.onChange("primaryText", value)}
            placeholder=""
            value={this.props.primaryText}
          />
        </div>

        <div className={styles.budget}>
          <Label label="Headline" />
          <div className={styles.divider} />
          <div className={cx(typography.gray, typography.regular12)}>
            Headline
          </div>
          <Input
            type="text"
            onChange={value => this.props.onChange("headLine", value)}
            placeholder=""
            value={props.headLine}
          />
        </div>

        <div className={styles.budget}>
          <Label label="Description" />
          <div className={styles.divider} />
          <div className={cx(typography.gray, typography.regular12)}>
            Description
          </div>
          <Input
            type="text"
            onChange={value => this.props.onChange("description", value)}
            placeholder=""
            value={props.description}
          />
        </div>
      </div>
    );
  }
}
