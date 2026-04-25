package atividade4;

//Crie uma classe Carro com os atributos combustivel = 0 e consumo
//(km/litro)
//
//Métodos: getCombustivel, setCombustivel, getConsumo, setConsumo
//
//andar(double distancia) - reduz a quantidade de combustivel de acordo com a
//distancia percorrida
//
//abastecer(double quantidade) - aumenta o combustivel do tanque na quantidade
//recebida
public class Carro {
    private double combustivel = 0, consumo;

    public Carro(double combustivel, double consumo){
        this.consumo = consumo;
        this.combustivel = combustivel;
    }
    public double getCombustivel(){
        return this.combustivel;
    }
    public void setCombustivel(double combustivel){
        this.combustivel = combustivel;
    }

    public double getConsumo(){
        return this.consumo;
    }
    public void setConsumo(double consumo){
        this.consumo = consumo;
    }

    public void abastecer(double quantidade){
        this.combustivel += quantidade;
    }

    public void andar(double distancia){
        this.combustivel -= (distancia/this.consumo);
        String mensagem = String.format("Para percorrer: %.2fKm será gasto: %.2fL",distancia,(distancia/this.consumo));
        System.out.println(mensagem);
    }

    public String tostring(){
        return String.format("Combustivel Atual: %.2fL | Consumo: %.2fKm/l",this.combustivel, this.consumo);
    }
}
