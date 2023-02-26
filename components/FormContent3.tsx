import React from "react";
import { colors } from "pebble-shared";
import { css, cx } from "emotion";
import { Form3 } from "./facebook/typings";
import typography from "./typography";
const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
  }
];

const styles = {
  imagesWrap: css({
    display: "flex",
    flexWrap: "wrap",
    gap: "40px"
  }),
  imageBody: css({
    display: "flex",
    flexDirection: "column",
    padding: "8px",
    gap: "8px",
    background: colors.white.base,
    cursor: "pointer"
  })
};

type State = {
  selectedImgs: number[];
};

type Props = Form3 & { onChange: (value?: Form3) => void };
export default class FormContent3 extends React.Component<Props, State> {
  state: State = {
    selectedImgs: []
  };
  render() {
    return (
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "40px"
        })}
      >
        <div className={cx(typography.medium20)}>
          Click to select projects you would like to work on
        </div>
        <div className={styles.imagesWrap}>
          {images.map(image => {
            const isSelected = this.state.selectedImgs.includes(image.id);
            return (
              <div
                className={styles.imageBody}
                key={image.id}
                onClick={() => {
                  if (!!isSelected) {
                    this.setState({
                      selectedImgs: this.state.selectedImgs.filter(
                        id => id !== image.id
                      )
                    });
                    this.props.onChange({
                      selectedImgs: this.state.selectedImgs.filter(
                        id => id !== image.id
                      )
                    });
                  } else {
                    this.setState({
                      selectedImgs: [...this.state.selectedImgs, image.id]
                    });
                    this.props.onChange({
                      selectedImgs: [...this.state.selectedImgs, image.id]
                    });
                  }
                }}
              >
                <img src={image.src} height="180" width="233" />
                <div>Tata La Vida</div>
                <div
                  className={css({
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center"
                  })}
                >
                  <div className={cx("pi", "pi-location")} />
                  <div className={cx(typography.regular12)}>
                    Golf Course Road Gurgaon
                  </div>
                </div>
                <div
                  className={css({
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "44px"
                  })}
                >
                  <div className={cx(typography.medium12, typography.violet)}>
                    2% Brokerage
                  </div>
                  <div className={cx(typography.regular12)}>
                    Starting 75 Lakhs
                  </div>
                </div>

                <div
                  className={cx(
                    css({
                      height: 20,
                      width: 20,
                      borderRadius: "50%",
                      background: isSelected
                        ? colors.violet.base
                        : colors.gray.light
                    })
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
