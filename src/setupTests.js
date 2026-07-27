import "jest-canvas-mock";

jest.mock("colorthief", () =>
  jest.fn().mockImplementation(() => ({
    getColor: () => [0, 0, 0],
    getPalette: () => []
  }))
);
