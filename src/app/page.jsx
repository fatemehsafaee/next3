"use client";
import Main from "@/components/Main";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const links = [
    { href: "/users", title: "users" },
    { href: "/posts", title: "posts" },
    { href: "/recipes", title: "recipes" },
  ];
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <List sx={{ width: "100%" }}>
        {links.map((item) => (
          <Button
            key={item.title}
            sx={{
              backgroundColor: "white",
              width: "100%",
              textAlign: "center",
              my: "10px",
              py: "50px",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "black",
            }}
            onClick={() => {
              router.push(item.href);
            }}
          >
            {item.title}
          </Button>
        ))}
      </List>
    </Container>
  );
}
