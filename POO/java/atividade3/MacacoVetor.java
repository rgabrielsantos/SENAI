package atividade3;
//Crie uma classe Macaco
//
//A classe deve possuir os atributos nome do tipo String e estomago do tipo
//Array
//
//A classe deve possuir os métodos comer(alimento), verEstomago(), digerir()
//
//Faça um programa criando dois macacos, alimentando-os com 3 alimentos
//diferentes e verificando o conteúdo do estomago a cada refeição.
//
//Experimente fazer com que um macaco se alimente do outro, é possível
//fazer um macaco canibal?
public class MacacoVetor {

    private String nome;
    private String[] estomago = new String[5];

    public MacacoVetor(String nome){
        this.nome = nome;
    }

    public void comer(String alimento, int aux) {
        this.estomago[aux] = alimento;
    }

    public void comer(MacacoVetor macaco, int aux) {
        this.estomago[aux] = macaco.nome;
        System.out.println("O macaco "+this.nome+" comeu outro macaco: "+macaco.nome);
        macaco.estomago = null;

    }

    public void digerir(int aux) {
        this.estomago[aux] = null;
    }

    public void verEstomago() {
        System.out.println("Macaco "+this.nome+": ");
        for(int i = 0; i < this.estomago.length; i++){
            System.out.println("["+this.estomago[i]+"]" );
        }
    }


    static void main(){
        MacacoVetor m1 = new MacacoVetor("Jumar");
        MacacoVetor m2 = new MacacoVetor("Kylian");
        m1.comer("Banana",0);
        m1.comer("Limão",1);
        m1.comer("Paçoca",2);
        m1.comer("Tijolo",3);
        m1.comer("Quiabo",4);
        m1.verEstomago();
        m1.digerir(0);
        m1.digerir(1);
        m1.verEstomago();

        m2.comer("Kiwi",0);
        m2.comer("Cacau",1);
        m2.comer("Morango",2);
        m2.comer("Ábobora",3);
        m2.comer("Batata",4);
        m2.verEstomago();
        m2.digerir(0);
        m2.digerir(1);
        m2.verEstomago();

        //testando o canibalismo
        m1.comer(m2,0);
        m1.verEstomago();


    }
}



