"use client";
import { getData } from "@/utils/actions";
import { Box, Button, Container, List, Typography } from "@mui/material";
import Image from "next/image";
import { notFound, usePathname, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

function Recipe() {
  const [dataa, setData] = useState([]);
  const path = usePathname();
  const router = useRouter();

  if (path != "/recipes") {
    notFound();
  }

  const fetchData = async () => {
    try {
      const data = await getData(`https://dummyjson.com/recipes`);
      console.log(path);
      setData(data.recipes);
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
              width: { xs: "50%", sm: "300px" },
              minHeight: "350px",
              // maxHeight: "300px",
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
            <Typography sx={{ mb: "10px" }}>recipe: {item.id}</Typography>

            <Typography sx={{ mb: "10px" }}>name: {item.name}</Typography>
            <Image width={150} height={150} src={item.image}></Image>

            <Typography sx={{ mb: "10px" }}>name: {item.name}</Typography>

            <Button
              sx={{ position: "relative", bottom: 0, backgroundColor: "pink" }}
              onClick={() => {
                router.push(`/recipes/${item.id}`);
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

export default Recipe;
