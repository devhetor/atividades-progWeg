import { ArrayRandomValues } from '../atividades/randomArrayValue/ArrayRandomValues';

describe('ArrayRandomValues', () => {
  let generator;

  beforeEach(() => {
    generator = new ArrayRandomValues();
  });

  test('should generate the specified number of random products', () => {
    const randomProducts = generator.generateRandomValues(3);

    expect(randomProducts.length).toBe(3);
    randomProducts.forEach(product => {
      expect(generator.productList).toContain(product);
    });
  });

  test('should update the productList', () => {
    const newProductList = [
      { nome: "NewProduct1", qtde: 2, preco: 9.99 },
      { nome: "NewProduct2", qtde: 4, preco: 19.99 },
      { nome: "NewProduct3", qtde: 1, preco: 5.99 },
    ];

    generator.productList = newProductList;
    generator.generateRandomValues()

    expect(generator.randomProducts).toEqual(generator.generateRandomValues());
    console.log(generator.generateRandomValues())
  });
});
