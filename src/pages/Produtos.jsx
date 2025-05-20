import { useEffect, useState } from "react";
import Produto from "../components/Produto";
import { AXIOS } from "../services";

const Produtos = () => {
    const [filtroMarca, setFiltroMarca] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState([]);
    const [filtroGenero, setFiltroGenero] = useState([]);
    const [filtroEstado, setFiltroEstado] = useState("Novo");
    const [produtos, setProdutos] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);

    async function buscarProdutos() {
        // Requisição Sincrona
        // fetch("http://localhost:3000/produtos")
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log("produtos: ", res);
        //     })

        // Requisição Assincrona
        // const request = await fetch("http://localhost:3000/produtos");
        // const response = await request.json();
        // console.log(response);

        try {
            const response = await AXIOS.get("/produtos");
            setProdutos(response.data);
            setProdutosFiltrados(response.data);
        } catch (error) {
            alert(error.message);
        }
    }

    function verificarMarca(marca) {
        if (filtroMarca.includes(marca)) {
            setFiltroMarca([...filtroMarca.filter(cadaMarca => cadaMarca != marca)]);
            return;
        }
        setFiltroMarca([...filtroMarca, marca]);
    }

    function verificarCategoria(categoria) {
        if (filtroCategoria.includes(categoria)) {
            setFiltroCategoria([...filtroCategoria.filter(cadaCategoria => cadaCategoria != categoria)]);
            return;
        }
        setFiltroCategoria([...filtroCategoria, categoria]);
    }

    function verificarGenero(genero) {
        if (filtroGenero.includes(genero)) {
            setFiltroGenero([...filtroGenero.filter(cadaGenero => cadaGenero != genero)]);
            return;
        }
        setFiltroGenero([...filtroGenero, genero]);
    }

    useEffect(() => {
        buscarProdutos();
    }, []);

    useEffect(() => {
        if(filtroMarca.length > 0){
            setProdutosFiltrados([...produtos.filter(produto => filtroMarca.includes(produto.marca))])
            return;
        }
        setProdutosFiltrados([...produtos]);
    }, [filtroMarca])

    return (
        <div className="xl:px-[100px] xl:pt-[40px] xl:pb-[140px]">
            {/* ordenação */}
            <div className="flex justify-between items-center">
                <h6><strong>Resultados para “Tênis”</strong> - 389 produtos</h6>
                <div className="leading-[60px] flex items-center px-4 border border-grafite rounded">
                    <strong>Ordenar por:</strong>
                    <select>
                        <option>mais relevantes</option>
                    </select>
                </div>
            </div>
            {/* filtros e produtos */}
            <div className="flex gap-[28px] items-start mt-[40px]">
                {/* filtros */}
                <div className="w-[300px] bg-white rounded p-[30px]">
                    <h5 className="font-bold text-grafite">Filtrar por</h5>
                    <div className="h-[1px] bg-cinza-claro my-[20px]"></div>
                    <h6 className="mb-[10px] font-bold text-grafite">Marca</h6>
                    <div className="grid gap-[10px]">
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarMarca("Adidas")}
                            />
                            Adidas
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarMarca("Balenciaga")}
                            />
                            Balenciaga
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarMarca("Nike")}
                            />
                            Nike
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarMarca("Puma")}
                            />
                            Puma
                        </label>
                    </div>

                    <h6 className="mb-[10px] font-bold text-grafite mt-4">Categoria</h6>
                    <div className="grid gap-[10px]">
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarCategoria("Esporte e Lazer")}
                            />
                            Esporte e Lazer
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarCategoria("Casual")}
                            />
                            Casual
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarCategoria("Utilitário")}
                            />
                            Utilitário
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarCategoria("Corrida")}
                            />
                            Corrida
                        </label>
                    </div>

                    <h6 className="mb-[10px] font-bold text-grafite mt-4">Gênero</h6>
                    <div className="grid gap-[10px]">
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarGenero("Masculino")}
                            />
                            Masculino
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarGenero("Feminino")}
                            />
                            Feminino
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarGenero("Unissex")}
                            />
                            Unissex
                        </label>
                    </div>

                    <h6 className="mb-[10px] font-bold text-grafite mt-4">Estado</h6>
                    <div className="grid gap-[10px]">
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="radio"
                                onChange={() => setFiltroEstado("Novo")}
                                checked={filtroEstado == "Novo"}
                            />
                            Novo
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="radio"
                                onChange={() => setFiltroEstado("Usado")}
                                checked={filtroEstado == "Usado"}
                            />
                            Usado
                        </label>
                    </div>
                </div>

                {/* produtos */}
                <div className="grid grid-cols-3 gap-[14px]">
                    {
                        produtosFiltrados.length > 0 && produtosFiltrados.map(produto => (
                            <Produto
                                {...produto}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default Produtos;