import { Card, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

const Skeleton = () => {
  return (
    <Card.Root
      width={{ sm: "250px", lg: "350px" }}
      height={{base: '300px', lg: '350px'}}
      borderRadius={10}
      overflow={"hidden"}
    >
      <SkeletonCircle />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default Skeleton;
