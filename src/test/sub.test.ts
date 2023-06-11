import { Sub } from '../atividades/classToBeTested/Subtracao';

describe('Calculator', () => {
  let calculator = new Sub(5,1)

  it('should calculate the sub correctly', () => {
    expect(calculator.resultSub()).toBe(4);
    console.log(calculator.resultSub())
  });
});
