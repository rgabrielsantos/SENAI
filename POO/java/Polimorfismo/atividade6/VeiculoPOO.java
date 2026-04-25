//No método main():
//○ Crie um vetor ou lista de veículos e adicione um objeto de cada
//subclasse.
//○ Percorra a coleção e chame mover() e exibirInfo() para cada veículo.
//○ Simule uma viagem de 300 km para cada veículo e exiba o
//combustível necessário para completar o percurso.
package Polimorfismo.atividade6;

public class VeiculoPOO {
    static void main() {

        Veiculo[] veiculos = new Veiculo[3];
        Carro carro = new Carro("Clio", 4, 10.0);
        Onibus onibus = new Onibus("Paradiso",45,3.0);
        Aviao aviao = new Aviao("Boing",60,0.1);
        double percusso = 300.0;

        veiculos[0] = carro;
        veiculos[1] = onibus;
        veiculos[2] = aviao;

        for(int i = 0; i<3;i++){
            veiculos[i].mover();
            veiculos[i].exibirInfo();
        }
        for(int i = 0; i<3; i++){
            System.out.println("O "+veiculos[i].modelo+" precisará de "+
                    (percusso/veiculos[i].consumoCombustivel)+
                    "L de combustivel para completar a viagem");
        }

    }
}
