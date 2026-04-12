import com.sun.jdi.FloatType;

import java.util.ArrayList;
import java.util.List;

public class MOTOR {
    protected List<Integer> qtd_cilindros;

    protected List<FloatType> potencia;

    protected List<String> tipo_combustivel;

    public MOTOR(String tipo_combustivel, float potencia, int qtd_cilindros){
        this.tipo_combustivel = new ArrayList<>();
        this.potencia = new ArrayList<>();
        this.qtd_cilindros = new ArrayList<>();
    }


}

public class Rodas {
    private List<Integer> polegadas;

    private List<String> furacao;

    private List<String> material;

    public Rodas(int polegadas, String furacao, String material) {

        this.furacao = new ArrayList<>();
        this.polegadas = new ArrayList<>();
        this.material = new ArrayList<>();
    }
}

public class Carro{
    private List<Integer> portas;
    private List<Integer> chassi;

    public Carro(int portas, int chassi){
        
    }
}
public static void main(String[] args) {

}
