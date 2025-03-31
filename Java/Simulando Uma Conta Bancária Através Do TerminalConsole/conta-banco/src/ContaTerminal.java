import java.util.Scanner;

public class ContaTerminal {


    public static void main(String[] args) throws Exception {
        int numero;
        String agencia;
        String nomeCliente;
        double saldo;
        Scanner scanner = new Scanner(System.in);
        try {
            System.out.println("Por favor, digite o número da Agência !");
            agencia = scanner.nextLine();
    
            System.out.println("Por favor, digite o número da Conta !");
            numero = scanner.nextInt();
            scanner.nextLine();
    
            System.out.println("Por favor, digite o nome do Cliente !");
            nomeCliente = scanner.nextLine();
    
            System.out.println("Por favor, digite o saldo da Conta !");
            saldo = scanner.nextDouble();
            scanner.nextLine();
    
            scanner.close();
            
            ContaBanco conta = new ContaBanco(numero, agencia, nomeCliente, saldo);
            conta.exibirResposta();             
        } catch (Exception e) {
            System.out.println("Erro ao ler o input do usuário");
        }

        
    }

}
