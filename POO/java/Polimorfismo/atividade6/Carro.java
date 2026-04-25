package Polimorfismo.atividade6;
public class Carro extends Veiculo{
    public Carro(String modelo, int capacidadePassageiros, double consumoCombustivel){
        super(modelo, capacidadePassageiros, consumoCombustivel);
    }
    @Override
    public void mover(){
        System.out.println("○ Carro está dirigindo na estrada.");
        System.out.println("e tem consumo medio de "+this.consumoCombustivel+"Km/l.");
    }
}
