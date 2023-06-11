import { Multiplicacao } from "../atividades/classToBeTested/Multiplicacao";


describe('Multiplicação', () => {
    let multiplicacao = new Multiplicacao(2,3)

    it('deve mostrar o resultado da multiplicacao entre x e y', () => {
      expect(multiplicacao.resultMult()).toBe(6);
      console.log(multiplicacao.resultMult())
    });
});