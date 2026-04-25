package atividade2;
/*
Crie uma classe ControleTV

A classe deve possuir os atributos canal e volume do tipo inteiro

A classe deve possuir os métodos getCanal, setCanal,
getVolume,setVolume, aumentarVolume e reduzirVolume

Faça o teste da classe
*/
public class Controle {
    private int canal = 11, volume = 50;

    public int getCanal(){
        return this.canal;
    }

    public int getVolume(){
        return this.volume;
    }

    public int setCanal(int canal){
        return this.canal = canal;
    }
    public int setVolume(int volume){
        return this.volume = volume;
    }

    public int aumentarVolume(){
        return this.volume++;
    }

    public int reduzirVolume(){
        return this.volume--;
    }
}
