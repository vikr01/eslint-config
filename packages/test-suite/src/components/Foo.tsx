import * as React from "react";

type Props = {
  message: string;
};

export default ({ message }: Props): React.ReactNode => <div>{message}</div>;
