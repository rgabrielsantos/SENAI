package atividade3;

public class MacacoPOO {
    static void main(){

        Macaco m1 = new Macaco("George");
        Macaco m2 = new Macaco("Cesár");

        m1.comer("Banana");
        m1.verEstomago();
        m1.comer("Maça");
        m1.verEstomago();
        m1.comer("Laranja");
        m1.verEstomago();
        System.out.println("\n");
        m2.comer("Pera");
        m2.verEstomago();
        m2.comer("Melao");
        m2.verEstomago();
        m2.comer("Uva");
        m2.verEstomago();
        System.out.println("\n");
        //Testando o canibalismo
        m1.comer(m2);
        m1.verEstomago();

        m2.verEstomago();
    }
}
