import { useState } from 'react'
import ProdutoCard from './ProdutoCard'








const produtosMock = [
    {id : 1, nome : 'Açucar uniao', imagem: '/assets/produtos/uniao.png', quantidade : 0 },
    {id : 2, nome : 'Nescafé', imagem: '/assets/produtos/nescafe.png', quantidade : 0 },
    {id : 3, nome : 'Adocyl', imagem: '/assets/produtos/adocyl.png', quantidade : 0 },
    {id : 4, nome : 'Trento Azul', imagem: '/assets/produtos/trento_azul.png', quantidade : 0 },
    {id : 5, nome : 'Trento Marrom', imagem: '/assets/produtos/trento_marrom.png', quantidade : 0 },
    {id : 6, nome : 'Trento Rosa', imagem: '/assets/produtos/trento_rosa.png', quantidade : 0 },
    {id : 7, nome : 'Teens', imagem: '/assets/produtos/teens.png', quantidade : 0 },
    {id : 8, nome : 'Coca-Cola', imagem: '/assets/produtos/coca_cola.png', quantidade : 0 },
    {id : 9, nome : 'Guarana', imagem: '/assets/produtos/guarana.png', quantidade : 0 },
    {id : 10, nome : 'Heineken', imagem: '/assets/produtos/heineken.png', quantidade : 0 },
]

export default function Produtos(){
    const [filtro, setFiltro] = useState('')
    const [produtos, setProdutos] = useState(produtosMock)
    const [showForm, setShowForm] = useState(false)
    const [novoProduto, setNovoProduto] = useState({ nome: '', imagem: '', quantidade: 0 })

    const produtosFiltrados = produtos.filter(produto => 
        produto.nome.toLowerCase().includes(filtro.toLowerCase())
    )

    function handleAddProduto(e) {
        e.preventDefault()
        setProdutos([
            ...produtos,
            {
                id: produtos.length + 1,
                nome: novoProduto.nome,
                imagem: novoProduto.imagem,
                quantidade: Number(novoProduto.quantidade)
            }
        ])
        setNovoProduto({ nome: '', imagem: '', quantidade: 0 })
        setShowForm(false)
    }

    return (
        <section className="produtos-section">
            <label htmlFor="filtro">Filtro</label>
            <input 
                type="text" 
                id="filtro" 
                value={filtro}
                onChange={e => setFiltro(e.target.value)}
                placeholder="Buscar produto ..."
            />
            <div className="produtos-grid">
                {produtosFiltrados.map(produto => (
                    <div key={produto.id} className="produto-card">
                        <img src={produto.imagem} alt={produto.nome} />
                        <span>{produto.quantidade}</span>
                    </div>
                ))}
                <div className="produto-card adicionar">
                    <button onClick={() => setShowForm(true)}>+</button>
                    <span>Adicionar Produto</span>
                </div>
            </div>
            {showForm && (
                <form className="form-adicionar" onSubmit={handleAddProduto}>
                    <h3>Novo Produto</h3>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={novoProduto.nome}
                        onChange={e => setNovoProduto({ ...novoProduto, nome: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Caminho da imagem"
                        value={novoProduto.imagem}
                        onChange={e => setNovoProduto({ ...novoProduto, imagem: e.target.value })}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Quantidade"
                        value={novoProduto.quantidade}
                        onChange={e => setNovoProduto({ ...novoProduto, quantidade: e.target.value })}
                        required
                    />
                    <button type="submit">Salvar</button>
                    <button type="button" onClick={() => setShowForm(false)}>Cancelar</button>
                </form>
            )}
        </section>
    )
}

