import React from "react";
import {Text, BoxProps, Stack} from "@chakra-ui/core";

import Button from "../controls/Button";

interface Props extends BoxProps {
  limit: number;
  children: string;
}

const TruncatedText: React.FC<Props> = ({limit = 280, children, ...props}) => {
  const [isToggled, toggle] = React.useState(false);
  const truncated = children.slice(0, limit);
  const shouldTruncate = children.length > truncated.length;

  if (!shouldTruncate) return <Text {...props}>{children}</Text>;

  return (
    <Stack spacing={0}>
      <Text {...props}>{isToggled ? children : `${truncated}...`}</Text>
      <Text onClick={() => toggle(!isToggled)} {...props} fontWeight="bold">
        {isToggled ? "Ver menos" : "Ver más"}
      </Text>
    </Stack>
  );
};

export default TruncatedText;
