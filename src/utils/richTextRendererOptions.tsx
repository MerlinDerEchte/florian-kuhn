export const richtTextRendererOptions: any = {
    renderText: (text: any) =>
      text.split("\n").flatMap((text: any, i: number) => [i > 0 && <br />, text]),
  };