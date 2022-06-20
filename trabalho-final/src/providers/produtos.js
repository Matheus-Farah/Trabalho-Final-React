
function produtos() {
    const { token } = useContext(DataContext);
    console.log(token);

    const [produtos, setProdutos] = useState({});

    const fetchProdutos = async () => {
        const { data } = await api.get('produto');
        const produtos = data
        setProdutos(produtos);
    };

    useEffect(() => {

        fetchProdutos()

    }, []);

    return (
        <div>
          {produtos.map((produto) => (
            <p key={produto.id}>
                id={produto.id}
                nome={produto.name}
                preco={produto.preco}
                url={produto.url}
                </p>
          ))}
        </div>
      );
    
    
    
}

export default produtos;