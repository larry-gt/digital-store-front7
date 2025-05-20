import sapato from "../assets/produto-imagem.png";

const Produto = ({ nome, categoria, preco, desconto, marca, genero }) => {
    return (
        <div title="K-Swiss v8 - Masculino">
            <div className="h-[320px] bg-white rounded shadow-xl relative flex justify-center items-center">
                {
                    desconto > 0 && (
                        <span className="absolute top-5 left-5 leading-[32px] bg-verde text-[14px] uppercase font-bold px-4 rounded-3xl">{desconto}% off</span>
                    )
                }
                <img src={sapato} alt="" className="w-full" />
            </div>
            <div className="mt-[18px]">
                <h6 className="text-[12px] font-bold text-cinza">{categoria} - {marca} - { genero}</h6>
                <h4 className="text-grafite text-[24px] line-clamp-1">{nome}</h4>
                <h4 className="text-[24px] font-bold">
                    {
                        desconto > 0 ? (
                            <>
                                <del className="text-cinza font-light mr-3">R$ {preco}</del> R$ { preco - ((preco * desconto) / 100) }
                            </>
                        ) : (
                            `R$ ${preco}`
                        )
                    }
                </h4>
            </div>
        </div>
    );
}

export default Produto;