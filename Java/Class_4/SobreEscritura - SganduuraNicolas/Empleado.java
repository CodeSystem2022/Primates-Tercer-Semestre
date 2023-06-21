package SobreEscritura;

public class Empleado {
    protected String name;
    protected double payment;

    public Empleado(String name, double payment){
        this.name = name;
        this.payment = payment;
    }

    public String obtainDetails(){
        return "Nombre: "+this.name+", Paga: "+this.payment;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPayment() {
        return payment;
    }

    public void setPayment(double payment) {
        this.payment = payment;
    }
}
