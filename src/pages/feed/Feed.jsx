import { Box } from "@mui/material";
import React from "react";
import { Stack } from "@mui/system";
import AddPost from "../../components/AddPost";
import FeedNav from "../../components/FeedNav";
import LeftBar from "../../components/LeftBar";
import Feeds from "../../components/Feeds";
import RightBar from "../../components/RightBar";

const Feed = () => {
  return (
    <Box>
      <FeedNav />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <LeftBar />
        <Feeds />
        <RightBar />
      </Stack>
      <AddPost />
    </Box>
  );
};

export default Feed;
