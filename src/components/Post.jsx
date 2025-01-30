"use client";
import { getData } from "@/utils/actions";
import { Box, Button, Container, List, Typography } from "@mui/material";
import { notFound, usePathname, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

function Post() {
  const [dataa, setData] = useState([]);
  const path = usePathname();
  const router = useRouter();

  //   if (path != "/posts") {
  //     notFound();
  //   }

  const fetchData = async () => {
    try {
      const data = await getData(`https://dummyjson.com/posts`);
      console.log(path);
      setData(data.posts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {dataa.map((item) => (
          <Box
            key={item.id}
            sx={{
              backgroundColor: "white",
              width: "150px",
              height: "250px",
              textAlign: "center",
              my: "10px",
              mx: "10px",
              p: "5px",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "black",
              textWrap: "wrap",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ mb: "10px" }}>post: {item.id}</Typography>

            <Typography sx={{ mb: "10px" }}>title: {item.title}</Typography>

            <Button
              sx={{ position: "relative", bottom: 0, backgroundColor: "pink" }}
              onClick={() => {
                router.push(`/posts/${item.id}`);
              }}
            >
              open
            </Button>
          </Box>
        ))}
      </List>
    </Container>
  );
}

export default Post;
