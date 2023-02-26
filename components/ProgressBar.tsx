import { css, cx } from "emotion";
import * as styles from "./styles";
import React from "react";
import { colors } from "pebble-shared";

type Props = {
  tabs: string[];
  selectedTab: number;
};
export default class ProgressBar extends React.Component<Props> {
  render() {
    const { tabs } = this.props;
    return (
      <div className={styles.progressBar}>
        {tabs.map((tab, index) => (
          <div
            key={tab}
            className={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px"
            })}
          >
            <div
              className={cx(
                styles.progressIcon,
                css({
                  background:
                    index + 1 === this.props.selectedTab
                      ? colors.violet.base
                      : colors.gray.base
                })
              )}
            >
              {index + 1}
            </div>
            <div>{tab}</div>
            {index < tabs.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    );
  }
}
