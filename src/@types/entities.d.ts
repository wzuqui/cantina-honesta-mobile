interface ICliente {
  nome: string;
  email: string;
  foto: ImageSourcePropType;
}

interface ICarrinho {
  nome: string;
  descricao: string;
  valor: number;
  foto: string;
}

interface ICarrinho extends ICarrinho {
  quantidade: number;
}
