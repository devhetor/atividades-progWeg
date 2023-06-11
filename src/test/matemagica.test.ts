import { Matemagica } from "../atividades/matemagica/Matemagica";

describe("Calculator", () => {
  
  let calc = new Matemagica(5,10)

  it("should calculate the sub correctly", () => {
    expect(calc.resultSum()).toBe(15);
    console.log(calc.resultSum());
  });


  it("should calculate the sub correctly", () => {
    expect(calc.resultSub()).toBe(-5);
    console.log(calc.resultSub());
  });

  it("deve mostrar o resultado da multiplicacao entre x e y", () => {
    expect(calc.resultMult()).toBe(50);
    console.log(calc.resultMult());
  });

  it("deve mostrar a divisao de x e y", () => {
    expect(calc.resultDiv()).toBe(0.5);
    console.log(calc.resultDiv());
  });
});
