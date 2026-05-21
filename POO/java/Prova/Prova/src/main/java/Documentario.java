class Documentario extends Conteudo {

    private String tema;

    /**
     * Construtor da classe Documentario.
     * Repassa as informações básicas para a superclasse (Conteudo) e inicializa
     * o atributo específico desta classe.
     *
     * @param titulo                  O título do documentário.
     * @param duracao                 A duração do documentário em minutos.
     * @param classificacaoIndicativa A classificação indicativa de idade.
     * @param tema                    O assunto principal do documentário.
     */

    public Documentario(String titulo, int duracao, int classificacaoIndicativa, String tema) {
        super(titulo, duracao, classificacaoIndicativa);
        this.tema = tema;
    }

    /**
     * Exibe no console os detalhes formatados do documentário, incluindo
     * título, tema, duração e classificação indicativa.
     */

    @Override
    public void exibirDetalhes() {
        System.out.println("[Documentário] " + this.titulo + " | Tema: " + this.tema + " | Duração: " + this.duracao + " min | Classificação: +" + this.classificacaoIndicativa);
    }

    /**
     * Simula a reprodução do documentário, exibindo uma mensagem no console.
     */

    @Override
    public void reproduzir() {
        System.out.println(" está reproduzindo " + this.titulo);
    }

    /**
     * Retorna uma representação em formato de texto (String) do documentário.
     * Muito útil para exibir o nome do item de forma amigável em listas, como
     * a lista de favoritos do Usuário.
     *
     * @return Uma string contendo o prefixo "Documentario:" seguido do título.
     */

    @Override
    public String toString() {
        return "Documentario: " + this.titulo;
    }
}