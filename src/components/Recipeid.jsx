"use client";
import { getData } from "@/utils/actions";
import { Box, Button, Container, List, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function page({ params }) {
  const [post, setPost] = useState(null);
  const path = usePathname();
  const router = useRouter();

  const fetchData = async () => {
    try {
      const data = await getData(`https://dummyjson.com/recipes`);
      setPost(data.recipes[params.id - 1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderObject = (obj, indent = 0) => {
    return Object.entries(obj).map(([key, value]) => (
      <ul>
        <li style={{ ml: `${indent}px`, mb: "10px" }} key={key}>
          {key}:{" "}
          {typeof value === "object" ? renderObject(value, indent + 20) : value}
        </li>
      </ul>
    ));
  };

  if (!post) {
    return <div>loading...</div>;
  }
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          minWidth: "20%",
          maxWidth: { xs: "90%", md: "50%" },
          //   maxHeight: { sm: "500px" },
          minHeight: "250px",
          //   textAlign: "center",
          my: "10px",
          mx: "10px",
          px: "20px",
          py: { xs: "10px" },
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "black",
          textWrap: "wrap",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        {renderObject(post)}

        <Button
          sx={{
            position: "relative",
            bottom: 0,
            backgroundColor: "pink",
            width: "100%",
          }}
          onClick={() => {
            router.push(`/recipes`);
          }}
        >
          back
        </Button>
      </Box>
    </Container>
  );
}

export default page;
