import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { getData } from "@/utils/actions";
import Link from "next/link";
import { Container } from "@mui/material";

export default function Main() {
  const links = [
    { href: "/users", title: "users" },
    { href: "/posts", title: "posts" },
    { href: "/recipes", title: "recipes" },
  ];
  return (
    <Container>
      {links.map((link) => {
        <Link key={link.title} href={link.href}>
          <Card sx={{ maxWidth: 345, textAlign: "center" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {link.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>;
      })}
    </Container>
  );
}
