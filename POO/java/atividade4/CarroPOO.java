package atividade4;

public class CarroPOO {
    public static void main(String[] args){
        Carro carro = new Carro(0,10);

        System.out.println(carro.tostring());

        carro.abastecer(10);
        System.out.println(carro.tostring());
        carro.andar(40);
        System.out.println(carro.tostring());
        carro.abastecer(30);
        System.out.println(carro.tostring());
    }
}
