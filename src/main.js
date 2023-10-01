import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");

document.getElementById("canvas3d").style.width = "300px";
document.getElementById("canvas3d").style.height = "300px";

const app = new Application(canvas);

app.load("https://prod.spline.design/VCuNOLEgOwwMvY5g/scene.splinecode");
