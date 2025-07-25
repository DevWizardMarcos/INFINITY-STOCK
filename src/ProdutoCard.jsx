export default function ProdutoCard({imagem,nome,quantidade}){
    return (
        <div className="produto-card">
            <img src={imagem} alt= {nome} />
            <span>{quantidade}</span>
        </div>
    )
}