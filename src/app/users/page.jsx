"use client";
import { getData } from "@/utils/actions";
import { Box, Button, Container, List, Typography } from "@mui/material";
import { notFound, usePathname, useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "next/link";
import { useEffect, useState } from "react";
import error from "../error";

function page() {
  // throw new error();
  const [dataa, setData] = useState([]);
  const path = usePathname();
  const router = useRouter();

  if (path != "/users") {
    notFound();
  }

  const fetchData = async () => {
    try {
      const data = await getData(`https://dummyjson.com/users`);
      console.log(path);
      setData(data.users);
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
              px: "5px",
              py: "5px",
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
            <Typography sx={{ mb: "10px" }}>user: {item.id}</Typography>

            <Typography sx={{ mb: "10px" }}>
              firstName: {item.firstName}
            </Typography>
            <Typography sx={{ mb: "10px" }}>
              lastName: {item.lastName}
            </Typography>

            <Typography>username: {item.username}</Typography>

            <Button
              sx={{ position: "relative", bottom: 0, backgroundColor: "pink" }}
              onClick={() => {
                router.push(`/users/${item.id}`);
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

export default page;
