/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";
import { Component, lazy } from "react";
import * as FooSync from "./Foo";

const Foo = lazy(() => Promise.resolve(FooSync));

type Props = {};

type State = {};

export default class Bar extends Component<Props, State> {
  props: Props;

  state: State = {};

  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  render(): React.ReactNode {
    return (
      <div>
        <Foo message={"foobar"} />
      </div>
    );
  }
}
