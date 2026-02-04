import React from "react";

type Props = { params: { espetaculo: string } };

export default function Page({ params }: Props) {
  const slug = params.espetaculo;
  return (
    <main>
      <h1>Espectáculo: {slug}</h1>
      {/* render page content */}
    </main>
  );
}