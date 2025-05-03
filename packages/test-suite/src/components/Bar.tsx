import * as React from 'react';
import { Component, lazy } from 'react';

const Foo = lazy(() => import('./Foo'));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
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
        <Foo message={'foobar'} />
      </div>
    );
  }
}
