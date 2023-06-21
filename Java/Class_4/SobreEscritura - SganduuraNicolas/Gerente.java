package SobreEscritura;

public class Gerente extends Empleado {

    private String departament;

    public Gerente(String name, double payment, String departament) {
        super(name, payment);
        this.departament = departament;
    }

    @Override //Sobreescribimos dentro de Empleado
    public String obtainDetails(){
        return super.obtainDetails()+", Departamento: "+this.departament;
    }
}
