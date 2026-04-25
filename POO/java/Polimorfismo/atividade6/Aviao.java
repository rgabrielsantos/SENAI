package Polimorfismo.atividade6;
public class Aviao extends Veiculo{
    public Aviao(String modelo, int capacidadePassageiros, double consumoCombustivel){
        super(modelo, capacidadePassageiros, consumoCombustivel);
    }
    @Override
    public void mover(){
        System.out.println("○ Aviao está voando nos ceus.");

    }
}
