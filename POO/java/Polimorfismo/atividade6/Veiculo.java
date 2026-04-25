package Polimorfismo.atividade6;
abstract public class Veiculo {
    //Atributos da classe abstrata
    protected String modelo;
    protected int capacidadePassageiros;
    protected double consumoCombustivel;

    public Veiculo(String modelo, int capacidadePassageiros, double consumoCombustivel) {
        this.modelo = modelo;
        this.capacidadePassageiros = capacidadePassageiros;
        this.consumoCombustivel = consumoCombustivel;
    }
    //Metodo abstrato
    public abstract void mover();

    public void exibirInfo(){
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Capacidade Passageiros: " + this.capacidadePassageiros);
        System.out.println("Consumo Km/l: " + this.consumoCombustivel);
    }


}
