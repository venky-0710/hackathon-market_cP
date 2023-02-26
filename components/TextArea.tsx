import React from "react";
import { css } from "emotion";
import { Input, Button } from "pebble-web";
const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%"
  }),

  label: css({
    display: "flex",
    justifyContent: "space-between",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    alignItems: "center"
  })
};

type Props = {
  labels: string[];
  onChange: (index: number, value: any) => void;
  value: string[];
};
export default class TextArea extends React.Component<Props> {
  render() {
    return (
      <div className={styles.container}>
        {this.props.labels.map((label, index) => (
          <>
            <div className={styles.label} key={label}>
              <div>{label}</div>
              {index === this.props.labels.length - 1 && (
                <Button onClick={() => {}}>Generate Automatically</Button>
              )}
            </div>
            <Input
              textArea
              onChange={value => this.props.onChange(index, value)}
              placeholder=""
              className={css({
                width: "935px",
                height: "77px",
                fontSize: 16
              })}
              value={this.props.value[index]}
            />
          </>
        ))}
      </div>
    );
  }
}
