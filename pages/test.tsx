import React from "react";
import { DateInput } from "pebble-web";
export default class date extends React.Component {
  render() {
    return (
      <DateInput
        placeholder=""
        onChange={value => console.log(value)}
        value={new Date()}
        disabled={false}
      />
    );
  }
}
