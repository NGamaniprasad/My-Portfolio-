public class L { 
 
 public static void main(String[] args) { 
 int a=10; 
 int b=20; 
 System.out.println(a+"\t"+b); 
 
 int temp= a; 
 a=b; 
 b=temp; 
 
 System.out.println(a+"\t"+b); 
 } 
} 
// Time Complexity - O(1) 
//Space Complexity - O(1) 