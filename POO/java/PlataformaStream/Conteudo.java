package PlataformaStream;

public abstract class Conteudo {
    protected String titulo;
    protected int duracao;
    protected int classificacaoIndicativa;

    protected Conteudo(String titulo, int duracao, int classificacaoIndicativa){
        this.titulo = titulo;
        this.duracao = duracao;
        this.classificacaoIndicativa = classificacaoIndicativa;
    }
    protected abstract void exibirDetalhes();
    protected abstract void reproduzir();


}
