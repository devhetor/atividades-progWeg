export class ArrayRandomValues {
  private _productList;
  private _randomProducts;

  private produtos1: any[] = [
    { nome: "Caneta", qtde: 10, preco: 7.99 },
    { nome: "Impressora", qtde: 0, preco: 649.5 },
    { nome: "Caderno", qtde: 4, preco: 27.1 },
    { nome: "Lapis", qtde: 3, preco: 5.82 },
    { nome: "Tesoura", qtde: 1, preco: 19.99 },
    { nome: "Estojo", qtde: 7, preco: 9.99 },
    { nome: "Teclado", qtde: 2, preco: 609.99 },
    { nome: "Tenis", qtde: 3, preco: 350.99 },
    { nome: "Fone", qtde: 5, preco: 198.99 },
    { nome: "Mochila", qtde: 15, preco: 150.99 },
  ];

  constructor() {
    this._productList = this.produtos1;
    this._randomProducts = [];
  }

  get productList() {
    return this._productList;
  }

  set productList(value) {
    this._productList = value;
  }

  get randomProducts() {
    return this._randomProducts;
  }

  set randomProducts(value) {
    this._randomProducts = value;
  }

  generateRandomValues(itensQuantity) {
    while (this.randomProducts.length < itensQuantity) {
      let randomNumber = Math.floor(Math.random() * this.productList.length);
      let checkObjectValue = false;

      for (let i = 0; i < this.randomProducts.length; i++) {
        if (this.randomProducts[i] === this.productList[randomNumber]) {
          checkObjectValue = true;
        }
      }

      if (!checkObjectValue) {
        this.randomProducts.push(this.productList[randomNumber]);
      }
    }

    return this.randomProducts;
  }
}
