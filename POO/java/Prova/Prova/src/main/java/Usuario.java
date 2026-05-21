import java.util.ArrayList;
import java.util.List;

class Usuario {

    private String nome;
    private String email;

    /**
     * Lista de conteúdos salvos como favoritos pelo usuário.
     */

    private List<Conteudo> favorito;

    /**
     * Construtor da classe Usuario.
     * Inicializa o usuário com as informações básicas e cria uma lista de favoritos vazia,
     * evitando erros de listagem ao tentar adicionar itens posteriormente.
     *
     * @param nome  O nome do usuário.
     * @param email O endereço de e-mail do usuário.
     */

    public Usuario(String nome, String email) {
        this.nome = nome;
        this.email = email;
        this.favorito = new ArrayList<>();
    }

    /**
     * Adiciona um conteúdo específico à lista de favoritos do usuário.
     *
     * @param conteudo O objeto do tipo {@link Conteudo} que será favoritado.
     */

    public void adicionarFavorito(Conteudo conteudo) {
        System.out.println(this.nome + " adicionou " + conteudo.titulo + " à lista de favoritos");
        this.favorito.add(conteudo);
    }

    /**
     * Lista todos os conteúdos presentes na lista de favoritos do usuário.
     * Agora utilizando o método exibirDetalhes() para aplicar corretamente
     * o polimorfismo das subclasses.
     */

    public void listarFavoritos() {

        System.out.println("\n----------Lista de favoritos de " + this.nome + " -----------");

        for (Conteudo conteudo : this.favorito) {

            conteudo.exibirDetalhes();

        }
    }

    /**
     * Inicia a reprodução de um conteúdo específico.
     * Este método delega a ação ao método reproduzir() do próprio objeto Conteudo,
     * aproveitando o polimorfismo.
     *
     * @param conteudo O objeto do tipo {@link Conteudo} que será reproduzido.
     */

    public void reproduzir(Conteudo conteudo) {
        System.out.print("O usuario: " + this.nome);
        conteudo.reproduzir();
    }
}