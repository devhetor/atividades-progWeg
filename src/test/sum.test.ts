import { Sum } from '../atividades/classToBeTested/Adicao';

describe('Calculator', () => {
  let calculator = new Sum(2,1)

  it('should calculate the sub correctly', () => {
    expect(calculator.resultSum()).toBe(3);
    console.log(calculator.resultSum())
  });
});
