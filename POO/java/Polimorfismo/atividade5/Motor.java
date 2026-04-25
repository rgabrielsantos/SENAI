package Polimorfismo.atividade5;
//1. Classe Motor - Deve ser parte essencial do carro (Composição). Sem o
//motor, o carro não existe.
public class Motor {
    private String tipo;
    private double potencia;

    public Motor(String tipo, double potencia){
        this.tipo = tipo;
        this.potencia = potencia;
    }
    public String toString(){
        return"Tipo motor: "+this.tipo+"| Potencia: "+this.potencia;
    }
}
