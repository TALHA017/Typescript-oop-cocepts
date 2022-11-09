const enum Color {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;
console.log(typeof c);

 enum Color1 {Red = 1, Green, Blue};
var colorName: any = Color1[2];
console.log(colorName);

const enum Color2 {Red = 1, Green = 2, Blue = 5};//can assign values to all
// var colorIndex: string = Color2[2];
// console.log(colorIndex);
