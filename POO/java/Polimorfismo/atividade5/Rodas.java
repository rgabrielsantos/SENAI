package Polimorfismo.atividade5;
//2. Classe Roda - Deve ser agregada ao carro (Agregação). O carro depende
//das rodas, mas uma roda pode ser reaproveitada em outro carro.
public class Rodas {
    private int pol, quantidade;

    public Rodas(int pol, int quantidade){
        this.pol = pol;
        this.quantidade = quantidade;
    }
    public String toString(){
        return"Polegadas: "+this.pol+"| Quantidade: "+this.quantidade;
    }
}
