public class StreamPOO {
    /**
     * Ponto de entrada do programa (método main).
     * Configura o cenário de testes instanciando usuários, conteúdos variados,
     * associando favoritos a cada perfil e simulando a execução dos players.
     *
     * @param args Argumentos de linha de comando (não utilizados).
     */
    public static void main(String[] args) {


        // Criação do array para armazenar e gerenciar os usuários da plataforma
        Usuario usuarios[] = new Usuario[3];

        Usuario user1 = new Usuario("Daniel", "daniel@yahoo.com");
        Usuario user2 = new Usuario("Johnny", "johnny@yahoo.com");
        Usuario user3 = new Usuario("Gabriel", "gabriel@yahoo.com");

        usuarios[0] = user1;
        usuarios[1] = user2;
        usuarios[2] = user3;

        // Criação do catálogo de filmes da plataforma
        Filme filme1 = new Filme("TopGun", 120, 18, "Ação");
        Filme filme2 = new Filme("Interestelar", 169, 12, "Ficção Científica");
        Filme filme3 = new Filme("O Rei Leão", 88, 0, "Animação");
        Filme filme4 = new Filme("Matrix", 136, 14, "Ação / Ficção Científica");

        // Criação do catálogo de séries
        Serie serie1 = new Serie("Friends", 23, 14, 10, 24);
        Serie serie2 = new Serie("Breaking Bad", 49, 18, 5, 13);

        // Criação do catálogo de documentários
        Documentario documentario1 = new Documentario("Senna", 90, 12, "História");
        Documentario documentario2 = new Documentario("Nosso Planeta", 50, 0, "Natureza");

        // --- Interações do Usuário 1: Daniel ---
        usuarios[0].adicionarFavorito(filme1);
        usuarios[0].adicionarFavorito(serie1);
        usuarios[0].adicionarFavorito(documentario1);

        // --- Interações do Usuário 2: Johnny ---
        usuarios[1].adicionarFavorito(filme2);
        usuarios[1].adicionarFavorito(filme4);
        usuarios[1].adicionarFavorito(serie2);

        // --- Interações do Usuário 3: Gabriel ---
        usuarios[2].adicionarFavorito(filme3);
        usuarios[2].adicionarFavorito(documentario2);

        // --- Exibição dos Testes no Console ---
        usuarios[0].listarFavoritos();

        usuarios[1].listarFavoritos();

        usuarios[2].listarFavoritos();


        System.out.println("\n-------------- REPRODUZINDO ------------------------");

        usuarios[0].reproduzir(filme1);

        usuarios[1].reproduzir(serie2);

        usuarios[2].reproduzir(documentario2);
    }
}