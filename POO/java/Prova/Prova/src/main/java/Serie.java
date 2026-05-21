/**
 * Classe que representa uma Série na plataforma de streaming.
 * Esta classe herda de {@link Conteudo} e adiciona características específicas
 * de séries, como o número de temporadas e a quantidade de episódios.
 */
class Serie extends Conteudo {

    private int temporadas;
    private int episodioPorTemporada;

    /**
     * Construtor da classe Serie.
     * Repassa as informações básicas para a superclasse (Conteudo) e inicializa
     * os atributos específicos desta classe.
     *
     * @param titulo                  O título da série.
     * @param duracao                 A duração média de cada episódio em minutos.
     * @param classificacaoIndicativa A classificação indicativa de idade.
     * @param temporadas              O número total de temporadas.
     * @param episodioPorTemporada    A quantidade de episódios por temporada.
     */

    public Serie(String titulo, int duracao, int classificacaoIndicativa, int temporadas, int episodioPorTemporada) {
        super(titulo, duracao, classificacaoIndicativa);
        this.temporadas = temporadas;
        this.episodioPorTemporada = episodioPorTemporada;
    }

    /**
     * Exibe no console os detalhes formatados da série, incluindo
     * título, número de temporadas, episódios por temporada e classificação indicativa.
     */

    @Override
    public void exibirDetalhes() {
        System.out.println("[Série] " + this.titulo + " | " + temporadas + " Temporadas (" + this.episodioPorTemporada + " ep/temp) | Classificação: +" + this.classificacaoIndicativa);
    }

    /**
     * Simula a reprodução da série, exibindo uma mensagem no console.
     */

    @Override
    public void reproduzir() {
        System.out.println(" está reproduzindo " + this.titulo);
    }

    /**
     * Retorna uma representação em formato de texto (String) da série.
     * Utilizado para exibir o nome do item de forma amigável em listas de favoritos.
     *
     * @return Uma string contendo o prefixo "Série:" seguido do título.
     */
    @Override
    public String toString() {
        return "Série: " + this.titulo;
    }
}