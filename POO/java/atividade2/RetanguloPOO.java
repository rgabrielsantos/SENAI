package atividade2;

public class RetanguloPOO {
    static void main(String[] args){
        Retangulo retangulo = new Retangulo();

        System.out.println("A base inicial é: "+retangulo.getBase());
        System.out.println("A altura inicial é: "+retangulo.getAltura());

        retangulo.setBase(2);
        retangulo.setAltura(2);

        System.out.println("A nova base é: "+retangulo.getBase());
        System.out.println("A nova altura é: "+retangulo.getAltura());

        retangulo.calcularArea();
        retangulo.calcularPerimetro();
    }
}
