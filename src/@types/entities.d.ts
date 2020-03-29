interface ICliente {
  nome: string;
  email: string;
  foto: ImageSourcePropType;
}

interface IProduto {
  nome: string;
  descricao: string;
  valor: number;
  foto: string;
}

interface ICarrinho extends IProduto {
  quantidade: number;
}
