class A2D {
  x: number;
  y: number;
}

interface A3D extends A2D {
  z: number;
}

let test: A3D = { x: 1, y: 2, z: 3 };
