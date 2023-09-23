"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Heading1 from "./components/Heading1/Heading1";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Heading1, {
  name: "Heading 1",
  inputs: [{ name: "title", type: "text" }],
  image:
    "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
});
