package atividade4;
//OBS: Por padrão, a cada ano que a pessoa envelhece, ela deve crescer 0.5cm
//se a idade dela for menor que 21 anos,
public class PessoaPOO {
    static void main(){
        Pessoa pessoa = new Pessoa("Gabriel",18,1.71,69);
        System.out.println(pessoa);

        pessoa.envelhecer();
        pessoa.envelhecer();
        pessoa.envelhecer();
        pessoa.envelhecer();
        System.out.println(pessoa);
    }
}
