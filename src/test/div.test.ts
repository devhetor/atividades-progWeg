import { Divisao } from "../atividades/classToBeTested/Divisao";

describe('Divisao', () => {
    let divisao = new Divisao(4,2)
  
    it('deve mostrar a divisao de x e y', () => {
      expect(divisao.resultDiv()).toBe(2);
      console.log(divisao.resultDiv())
    });
  });