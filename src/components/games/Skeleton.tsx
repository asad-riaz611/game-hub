import { Card, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

const Skeleton = () => {
  return (
    <Card.Root height={{ base: "305px", lg: "350px" }}>
      <SkeletonCircle />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default Skeleton;
