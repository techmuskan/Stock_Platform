import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../src/landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);

    const heroImage = screen.getByAltText("Hero Img");

    expect(heroImage).toBeInTheDocument();
  });
});
