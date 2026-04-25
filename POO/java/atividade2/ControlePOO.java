package atividade2;

public class ControlePOO {
    static void main() {
        Controle controle = new Controle();

        System.out.println("O canal inicial é: " + controle.getCanal());
        System.out.println("O volume inicial é: " + controle.getVolume());

        controle.setCanal(5);
        controle.setVolume(10);

        controle.aumentarVolume();
        controle.aumentarVolume();
        controle.aumentarVolume();

        System.out.println("A Tv está no canal: " + controle.getCanal());
        System.out.println("O volume atual é: " + controle.getVolume());

    }
}
