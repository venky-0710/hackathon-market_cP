import React from "react";
import { css, cx } from "emotion";
import { colors } from "pebble-shared";
import { Button, DropDown, Input } from "pebble-web";
import { Switch } from "@material-ui/core";
const tableHeader = [
  "On/Off",
  "Campagin",
  "Budget",
  "Spends",
  "CPL",
  "QRate",
  "QLeads",
  "CPQL"
];

const tableData = [
  {
    "On/Off": true,
    Campagin: "Tata Primalti",
    Budget: 1000,
    Spends: 200000,
    CPL: 413,
    QRate: 50,
    QLeads: 231,
    CPQL: 868
  },
  {
    "On/Off": true,
    Campagin: "Tata Primalti",
    Budget: 1000,
    Spends: 200000,
    CPL: 413,
    QRate: 50,
    QLeads: 231,
    CPQL: 868
  },
  {
    "On/Off": true,
    Campagin: "Tata Primalti",
    Budget: 1000,
    Spends: 200000,
    CPL: 413,
    QRate: 50,
    QLeads: 231,
    CPQL: 868
  },

  {
    "On/Off": true,
    Campagin: "Tata Primalti",
    Budget: 1000,
    Spends: 200000,
    CPL: 413,
    QRate: 50,
    QLeads: 231,
    CPQL: 868
  },

  {
    "On/Off": true,
    Campagin: "Tata Primalti",
    Budget: 1000,
    Spends: 200000,
    CPL: 413,
    QRate: 50,
    QLeads: 231,
    CPQL: 868
  },

  {
    "On/Off": true,
    Campagin: "Tata Primalti",
    Budget: 1000,
    Spends: 200000,
    CPL: 413,
    QRate: 50,
    QLeads: 231,
    CPQL: 868
  },

  {
    "On/Off": true,
    Campagin: "Tata Primalti",
    Budget: 1000,
    Spends: 200000,
    CPL: 413,
    QRate: 50,
    QLeads: 231,
    CPQL: 868
  },

  {
    "On/Off": true,
    Campagin: "Tata Primalti",
    Budget: 1000,
    Spends: 200000,
    CPL: 413,
    QRate: 50,
    QLeads: 231,
    CPQL: 868
  },

  {
    "On/Off": true,
    Campagin: "Tata Primalti",
    Budget: 1000,
    Spends: 200000,
    CPL: 413,
    QRate: 50,
    QLeads: 231,
    CPQL: 868
  }
];

const styles = {
  header: css({
    padding: "18px 8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colors.gray.base,
    background: colors.gray.lighter,
    fontSize: "12px",
    flexGrow: 1,
    border: "0.5px solid gray"
  }),
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
  }),
  table: css({
    borderSpacing: 0,
    width: 1100,
    display: "flex",
    flexDirection: "column"
  }),
  tableCell: css({
    padding: "8px"
  })
};
export default class Campaign extends React.Component {
  renderTable() {
    return (
      <table className={styles.table}>
        <thead>
          <tr className={css({ display: "flex", width: "1100px" })}>
            {tableHeader.map(heading => (
              <th className={styles.header}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, outerIndex) => (
            <tr key={row.CPL} className={css({ display: "flex" })}>
              {Object.values(row).map((value, index) => {
                console.log(outerIndex, index);
                if (index == 3 || (index == 6 && outerIndex === 0)) {
                  return (
                    <td
                      key={index}
                      className={cx(
                        styles.header,
                        css({
                          background: colors.green.light,
                          color: colors.gray.darker
                        })
                      )}
                    >
                      {value === true ? (
                        <Switch defaultChecked={true} color="primary"/>
                      ) : (
                        <div>value</div>
                      )}
                    </td>
                  );
                }
                if (index === 6 && outerIndex > 0) {
                  return (
                    <td
                      key={index}
                      className={cx(
                        styles.header,
                        css({
                          background: colors.green.light,
                          color: colors.gray.darker
                        })
                      )}
                    >
                      {value === true ? (
                        <Switch defaultChecked={true} color="primary"/>
                      ) : (
                        <div>value</div>
                      )}
                    </td>
                  );
                }
                return (
                  <td
                    key={index}
                    className={cx(
                      styles.header,
                      css({
                        background: colors.white.base,
                        color: colors.gray.darker
                      })
                    )}
                  >
                    {value === true ? (
                      <Switch defaultChecked={true} color="primary"/>
                    ) : (
                      <div>value</div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  private renderHeader() {
    return (
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "7px"
        })}
      >
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            width: "1000px"
          })}
        >
          <div>Campaigns</div>
          <div
            className={css({
              display: "flex",
              gap: "10px",
              justifyContent: "flex-end"
            })}
          >
            <Button
              onClick={() => {}}
              className={css({
                background: colors.gray.base,
                color: colors.gray.dark
              })}
            >
              {" "}
              Create Campaign
            </Button>
            <Button onClick={() => {}}> View Recommendations</Button>
          </div>
        </div>
        <div
          className={css({
            border: "1px solid gray",
            width: "100%",
            height: 0
          })}
        />
      </div>
    );
  }

  private renderSearchBox() {
    return (
      <div
        className={css({ display: "flex", justifyContent: "space-between" })}
      >
        <Input onChange={() => {}} placeholder="" />
        <div className={css({ display: "flex", gap: "8px" })}>
          <DropDown buttonLabel={"Edit"}>
            {({ toggle }) => <div>Edit</div>}
          </DropDown>
          <div className={cx("pi", "pi-dots")} />
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className={styles.contentWrap}>
        <div
          className={css({
            background: colors.white.base,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            height: "auto"
          })}
        >
          {this.renderHeader()}
          {/* {this.renderSearchBox()} */}
          {this.renderTable()}
        </div>
      </div>
    );
  }
}
