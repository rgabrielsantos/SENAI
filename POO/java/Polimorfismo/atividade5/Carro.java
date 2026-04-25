package Polimorfismo.atividade5;
//3. Classe Carro - Deve ter métodos para ligar o carro, exibir o status do
//motor e das rodas.
import java.util.ArrayList;
import java.util.List;

public class Carro {
    private int portas;
    private Motor motor;
    private List<Rodas> rodas;

    public Carro(int portas,String tipo, double potencia){
        this.portas = portas;
        this.motor = new Motor(tipo,potencia);
        this.rodas = new ArrayList<>();
    }

    public void ligar(){
        System.out.println("O carro está ligando...\nCarro ligado!");
    }

    public void adicionarRodas(Rodas r){
        this.rodas.add(r);
    }
    public void exibirInfo(){
        System.out.println("----Info do Carro----");
        System.out.println("Portas: "+this.portas);
        System.out.println(this.motor);

        for(Rodas roda : this.rodas){
            System.out.println(roda);
        }
    }
}
