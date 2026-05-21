abstract class Conteudo {

    /**
     * O título do conteúdo.
     */

    protected String titulo;

    /**
     * A duração total do conteúdo (geralmente em minutos).
     */

    protected int duracao;

    /**
     * A idade mínima recomendada para consumir o conteúdo (ex: 10, 12, 16, 18).
     */

    protected int classificacaoIndicativa;

    /**
     * Construtor da classe base Conteudo.
     * Inicializa os atributos básicos que todas as mídias da plataforma devem possuir.
     * Este construtor só é chamado pelas subclasses durante a instanciação.
     *
     * @param titulo                  O título do conteúdo.
     * @param duracao                 A duração do conteúdo.
     * @param classificacaoIndicativa A classificação indicativa de idade para o conteúdo.
     */

    protected Conteudo(String titulo, int duracao, int classificacaoIndicativa) {
        this.titulo = titulo;
        this.duracao = duracao;
        this.classificacaoIndicativa = classificacaoIndicativa;
    }

    /**
     * Método abstrato responsável por exibir os detalhes do conteúdo.
     * Como cada tipo de mídia pode ter informações diferentes (ex: Séries têm temporadas),
     * cada subclasse deve prover sua própria implementação para este método.
     */

    protected abstract void exibirDetalhes();

    /**
     * Método abstrato responsável por simular o início da reprodução do conteúdo.
     * A lógica exata de reprodução deve ser implementada pela classe herdeira.
     */

    protected abstract void reproduzir();
}