import React from "react";
import { css, cx } from "emotion";
import { colors } from "pebble-shared";
import Label from "./label";
import { Input, Checkbox, Tag, Button } from "pebble-web";
import typography from "@components/typography";
import { onChange, Gender, AudienceType } from "./typings";

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
    cursor: "pointer"
  }),

  divider: css({
    border: `1px solid ${colors.gray.lighter}`,
    display: "flex",
    height: "0",
    width: "100%"
  }),

  boxWrap: css({
    display: "flex",
    flexDirection: "column",
    gap: "7px",
    alignItems: "center",
    padding: "5px",
    justifyContent: "flex-start",
    minHeight: "160px",
    border: `1px solid ${colors.gray.lighter}`,
    width: "500px"
  })
};

const locations = [
  {
    id: 1,
    label: "Hyderbad,Telangana, India"
  },
  {
    id: 2,
    label: "Benagaluru,Telangana, India"
  },
  {
    id: 3,
    label: "Noida,Delhi, India"
  }
];

type Location = { id: number; label: string };
type Props = { onChange: onChange } & AudienceType;
type State = {
  targetedLocations: Location[];
  excludedLocations: Location[];
  gender?: Gender;
  suggestions: Location[];
  search?: string;
};
export default class AudienceForm extends React.Component<Props, State> {
  state: State = {
    targetedLocations: [],
    suggestions: [],
    excludedLocations: []
  };

  componentDidMount() {
    this.setState({
      targetedLocations: this.props.targetedLocations || [],
      excludedLocations: this.props.excludedLocations || []
    });
  }
  private renderSuggestions() {
    const { search } = this.state;
    if (!search) return [];
    this.setState({
      suggestions: locations.filter(
        location =>
          location.label.toLowerCase().includes(search.toLowerCase()) ||
          search.toLowerCase().includes(location.label.toLowerCase())
      )
    });
  }
  private renderLocationBox() {
    return (
      <div
        className={css({
          display: "flex",
          gap: "16px"
        })}
      >
        {this.renderTargetesBox()}
        {this.renderExludesBox()}
      </div>
    );
  }
  private renderLocationSearch() {
    return (
      <div className={css({ display: "flex", gap: "16px" })}>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            width: "661px"
          })}
        >
          <Input
            onChange={(value: string) => {
              this.setState({ search: value });
              this.renderSuggestions();
            }}
            type="text"
            placeholder=""
            value={this.state.search}
          />
          {this.state.suggestions.map(item => (
            <div
              className={css({
                display: "flex",
                justifyContent: "space-between",
                padding: "16px",
                alignItems: "center"
              })}
            >
              <div>{item.label}</div>
              <div
                className={css({
                  display: "flex",
                  gap: "36px",
                  alignItems: "center",
                  justifyContent: "center"
                })}
              >
                <Button
                  type="link"
                  onClick={() => {
                    this.setState({
                      targetedLocations: [
                        ...this.state.targetedLocations,
                        item
                      ],
                      search: item.label,
                      suggestions: []
                    });
                    this.props.onChange("targetedLocations", [
                      ...this.state.targetedLocations,
                      item
                    ]);
                  }}
                  className={css({
                    ":not([disabled]):hover": {
                      textDecoration: "none"
                    },
                    fontSize: "14px"
                  })}
                >
                  Target
                </Button>
                <Button
                  type="link"
                  onClick={() => {
                    this.setState({
                      excludedLocations: [...this.state.excludedLocations, item]
                    });
                    this.props.onChange("excludedLocations", [
                      ...this.state.excludedLocations,
                      item
                    ]);
                  }}
                  className={css({
                    ":not([disabled]):hover": {
                      textDecoration: "none"
                    },
                    fontSize: "14px"
                  })}
                >
                  Exclude
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* <Button onClick={() => {}} type="link">
          Advance Search
        </Button> */}
      </div>
    );
  }

  private renderTargetesBox() {
    const { targetedLocations } = this.state;
    return (
      <div className={css({ display: "flex", flexDirection: "column" })}>
        <div className={cx(typography.gray, typography.regular12)}>
          Targeted Locations {targetedLocations.length}
        </div>
        <div className={styles.boxWrap}>
          {targetedLocations.map(location => (
            <div
              className={css({
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "9px",
                width: "90%",
                borderRadius: "4px"
              })}
            >
              <div className={cx(typography.regular14)}>{location.label}</div>
              <div
                onClick={() =>
                  this.setState({
                    targetedLocations: this.state.targetedLocations.filter(
                      ex => ex.id !== location.id
                    ),
                    search: ""
                  })
                }
              >
                X
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  private renderExludesBox() {
    return (
      <div className={css({ display: "flex", flexDirection: "column" })}>
        <div className={cx(typography.gray, typography.regular12)}>
          Excluded Locations {this.state.excludedLocations.length}
        </div>
        <div className={styles.boxWrap}>
          {this.state.excludedLocations.map(location => (
            <div
              className={css({
                display: "flex",
                justifyContent: "space-between",
                padding: "9px",
                width: "90%",
                borderRadius: "4px"
              })}
            >
              <div className={cx(typography.regular14)}>{location.label}</div>
              <div
                className={cx("pi", "pi-close")}
                onClick={() => {
                  this.setState({
                    excludedLocations: this.state.excludedLocations.filter(
                      ex => ex.id !== location.id
                    )
                  });
                }}
              >
                X
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render(): React.ReactNode {
    return (
      <div className={styles.wrap}>
        <div className={styles.budget}>
          <Label label="Locations" />
          <div className={cx(typography.gray, typography.regular12)}>
            Locations
          </div>

          <>{this.renderLocationBox()}</>
          <>{this.renderLocationSearch()}</>
        </div>
        <div className={styles.budget}>
          <Label label="Gender" />
          <div className={styles.divider} />
          <div className={cx(typography.gray, typography.regular12)}>
            Select which gender to select
          </div>
          <div className={css({ display: "flex", gap: "25px" })}>
            {Object.values(Gender).map(opt => (
              <div className={css({ display: "flex" })}>
                <input
                  type="checkbox"
                  onChange={event =>
                    event.target.value &&
                    this.props.onChange("gender", event.target.value)
                  }
                  value={opt}
                  checked={this.props.gender === opt}
                />
                <div>{opt}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.budget}>
          <Label label="Age Group" />
          <div className={styles.divider} />
          <div className={cx(typography.gray, typography.regular12)}>
            Enter which age group to target
          </div>
          <Input
            type="text"
            onChange={value => this.props.onChange("ageGroup", value)}
            placeholder=""
            value={this.props.ageGroup || 30}
          />
        </div>

        <div className={styles.budget}>
          <Label label="Detailed Targeting" />
          <div className={styles.divider} />
          <div className={cx(typography.gray, typography.regular12)}>
            Added Tags
          </div>
          <div className={css({ display: "flex", gap: "25px" })}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(opt => (
              // <Checkbox value={"Real Estate"} label={"Real Estate"} />
              <Tag label="Real Estate" color="purple" />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
