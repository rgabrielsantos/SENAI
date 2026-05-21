class Filme extends Conteudo {

    private String genero;

    /**
     * Construtor da classe Filme.
     * Repassa as informações básicas para a superclasse (Conteudo) e inicializa
     * o atributo específico desta classe.
     *
     * @param titulo                  O título do filme.
     * @param duracao                 A duração do filme em minutos.
     * @param classificacaoIndicativa A classificação indicativa de idade.
     * @param genero                  O gênero cinematográfico do filme.
     */

    public Filme(String titulo, int duracao, int classificacaoIndicativa, String genero) {
        super(titulo, duracao, classificacaoIndicativa);
        this.genero = genero;
    }

    /**
     * Recupera o gênero do filme.
     *
     * @return O gênero atual do filme.
     */

    public String getGenero() {
        return genero;
    }

    /**
     * Define ou altera o gênero do filme.
     *
     * @param genero O novo gênero a ser definido.
     */

    public void setGenero(String genero) {
        this.genero = genero;
    }

    /**
     * Exibe no console os detalhes formatados do filme, incluindo
     * título, gênero, duração e classificação indicativa.
     */

    @Override
    public void exibirDetalhes() {
        System.out.println("[Filme] " + this.titulo + " | Gênero: " + this.genero + " | Duração: " + this.duracao + " min | Classificação: +" + this.classificacaoIndicativa);
    }

    /**
     * Simula a reprodução do filme, exibindo uma mensagem no console.
     */

    @Override
    public void reproduzir() {
        System.out.println(" está reproduzindo " + this.titulo);
    }

    /**
     * Retorna uma representação em formato de texto (String) do filme.
     * Utilizado para exibir o nome do item de forma amigável em listas de favoritos.
     *
     * @return Uma string contendo o prefixo "Filme:" seguido do título.
     */

    @Override
    public String toString() {
        return "Filme: " + this.titulo;
    }
}