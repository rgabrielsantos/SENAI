package atividade3;

public class AlimentoPOO {
    static void main(){
        Alimento[] estomago = new Alimento[3];

        Alimento maca = new Alimento("maça",84.4);
        Alimento banana = new Alimento("banana",111.1);
        Alimento mamao = new Alimento("mamao",40.3);

        estomago[0] = maca;
        estomago[1] = banana;
        estomago[2] = mamao;

        System.out.println("==== CONTEUDO DO ESTOMAGO ====");
        for(int i = 0; i < estomago.length; i++) {
            System.out.println(estomago[i]);
        }
    }
}
