export interface NavigationType {
  key: string;
  label: string;
  url: string;
}

const navigation: NavigationType[] = [
  { key: 'home', label: 'Home', url: '/' },
  { key: 'categories', label: 'Categorias', url: '/' },
  { key: 'products', label: 'Produtos', url: '/products' },
  { key: 'contacts', label: 'Contatos', url: '/contacts'},
  { key: 'showcontacts', label: 'Ver Contatos', url: '/showcontacts'}
];

export default navigation;
