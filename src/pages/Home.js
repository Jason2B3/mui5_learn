import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
export default function Home() {
  return (
    <>
      <h1>Fluid options. Starts @ 100vw then grows smoothly to maxWidth</h1>
      <Container maxWidth="xs" style={{ background: "orange" }}>
        <h2>XS size</h2>
      </Container>
      <Container maxWidth="sm" style={{ background: "orange" }}>
        <h2>SM size</h2>
      </Container>
      <Container maxWidth="md" style={{ background: "orange" }}>
        <h2>MD size</h2>
      </Container>
      <Container maxWidth="lg" style={{ background: "orange" }}>
        <h2>LG size</h2>
      </Container>
      <Container maxWidth="xl" style={{ background: "orange" }}>
        <h2>XL size</h2>
      </Container>
      <Container maxWidth="false" style={{ background: "orange" }}>
        <h2>Max width disabled (Defaults to 100vw)</h2>
      </Container>
      <h1>
        Not fluid. Starts at 100vw, then choppily grows to sm, then md...etc
      </h1>
      <Container fixed maxWidth="md" style={{ background: "orange" }}>
        <h2>
          Non fluid. Maxes out at the md length if space allows.
          <br />
          Can use other maxWidth values as well
        </h2>
      </Container>
    </>
  );
}
