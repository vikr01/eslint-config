// @flow
import React, { Component, lazy, type Node } from 'react';

const Foo = lazy(()=>import('./Foo'));

type Props = {};

type State = {};

export default class Bar extends Component<Props, State> {
  props: Props;
  
  state: State = {};

  render(): Node {
    return <div><Foo message={'foobar'} /></div>;
  }
}
