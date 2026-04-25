package Herança.Desafio;

public class DesafioPOO {
    static void main() {
        Gato gato1 = new Gato("Julinho");
        Cachorro cachorro1 = new Cachorro("Loki");
        System.out.println("Nome: "+gato1.getnome());
        gato1.Caminhar();
        gato1.miar();
        System.out.println("\nNome: "+cachorro1.getnome());
        cachorro1.Caminhar();
        cachorro1.late();

    }
}
