#include <stdio.h>
#include <stdlib.h>
   /*int raisepower( int base,int power){
      int result=1;
      for(int i=0;i<power;i++){
        result=result*base;}
  return result;}

  int main(){
   int twopowerthree =raisepower(2,3);
   printf("2^3 is %d \n",twopowerthree);
   int sixpowerfive =raisepower(2,2);
   printf("2^2 is %d",sixpowerfive);
  return 0;

  }*/
  /* int calculator(){
      int x,y;
      int choice;
      int result;
         do{
            printf("1.addition \n 2. subtraction \n 3. multiplication \n 4. division \n");
            printf ("Enter your choice:");
            scanf("%d",&choice);
            if(choice ==0) break;


            if(choice ==1){
                printf("enter two numbers :\n");
                scanf("%d %d",&x,&y);
                result= x+y;
                printf("result of %d +%d is %d\n",x,y,result);}
           else if(choice ==2){
                printf("enter two numbers :\n");
                scanf("%d %d",&x,&y);
                result= x-y;
                printf("result of %d -%d is %d \n",x,y,result);}
            else if(choice ==3){
                printf("enter two numbers :\n");
                scanf("%d %d",&x,&y);
                result= x*y;
                printf("result of %d *%d is %d\n",x,y,result);}
             else if(choice ==4){

                printf("enter two numbers :\n");
                scanf("%d %d",&x,&y);
                result= x/y;
                if(y==0){

                    printf(" error\n");
                    continue;}

                else {printf("result of %d /%d is %d\n",x,y,result);}}
                else {
                    printf(" exist");
                }

                } while ( choice>=1 && choice <=4);
                }

int main(){
calculator();
return 0 ;}*/

/*float areatriangle(){
   float base,hight,area;
   printf("enter your base :");
   scanf("%f",&base);
   printf("enter your hight :");
   scanf("%f",&hight);
   area= 0.5*base*hight;
   printf("the area of triangle is %f",area);

    return 0.5 * base* hight;}
int main(){
   areatriangle();
 return 0;} */
  /*int greatest(int x,int y, int z){
      int max;
      if(x > y&& x > z){printf("x is %d  and it is  max",x);
    max=x;  }
      else if(y > x && y > z){printf("y is %d  and it is  max",y);
   max=y;   }
        if(z > x&& z > y){printf("z is %d  and it is  max",z);
       max= z;}
        return max ;}

int main (){
 int x,y,z,max;

  printf("enter three value :");
  scanf("%d%d%d",&x,&y,&z);
  max=greatest(x,y,z);
return 0;} */
 /*int calcaverage(){
     int x,y,z;
     float average;
     int grade;
      if(average >= 90){
        printf( "grade = A");}
     else if (average >= 70 &&average  < 90){printf("grade =B\n");}
     else if (average >= 50&&  average < 70){printf("grade= c\n");}
     else if (average < 50) {printf("grade =f \n ");}
        average = (x+y+z)/3;

        return average ;}
int main(){
     int x,y,z ,grade;
     float average;
     printf("Enter three grades: ");
    scanf("%d %d %d", &x, &y, &z);
    average= calcaverage (x,y,z);
    printf("average is :%f",average);
return 0;} */

/*int findnumber(int num){

    if(num%2==0){
        printf("the number is even");}
    else if (num %2==!0){printf("the number is odd");}
    return num;
 }
int main(){
    int num;
    printf("enter number:");
    scanf("%d",&num);
    num = findnumber( num);
return 0;} */

 /*int comparestwonumbers (int x ,int y){
    int comparison ;
    if (x>y){
        printf(" x is greater than y");}
    else if (y>x){ printf(" y is greater than x ");}
    else if (x==y){printf("x is equal y");}
   return 0;}

int main(){
  int x,y,comparison;
  printf("enter two numbers :");
  scanf("%d %d",&x,&y);
comparestwonumbers(x ,y);
return 0;} */

 /* int typeofatriangle( int x,int y ,int z){

    int angles;
    if( x==y&& x==z){ printf(" it is an equilateral triangle");}
     else if(x==y || x==z || y==z){ printf(" it is an isosceles triangle");}
     else {printf("t is an acute triangle");}
    return 0;}
int main(){
  int x, y,z;
  int angles;
  printf(" enter three angles :");
  scanf(" %d %d %d",&x,&y,&z);
typeofatriangle(x,y,z);
return 0;} */

 /* int printpattern(){
   int i ,j;
    for(i=7;i>0;i--){
       for(j=0;j<i;j++){
        printf("*");}
        printf("\n");}
    return 0;}
int main(){
 int i,j;
  printpattern();
 return 0;} */

 /*int calculator(){
      int x,y;
      int choice;
      int result;

            printf("1.addition \n 2. subtraction \n 3. multiplication \n 4. division \n");
            printf ("Enter your choice:");
            scanf("%d",&choice);
            if(choice ==1){
                printf("enter two numbers :\n");
                scanf("%d %d",&x,&y);
                result= x+y;
                printf("result of %d +%d is %d\n",x,y,result);}
           else if(choice ==2){
                printf("enter two numbers :\n");
                scanf("%d %d",&x,&y);
                result= x-y;
                printf("result of %d -%d is %d \n",x,y,result);}
            else if(choice ==3){
                printf("enter two numbers :\n");
                scanf("%d %d",&x,&y);
                result= x*y;
                printf("result of %d *%d is %d\n",x,y,result);}
             else if(choice ==4){

                printf("enter two numbers :\n");
                scanf("%d %d",&x,&y);
                result= x/y;
                if(y==0){printf(" error\n");}
                else {printf("result of %d /%d is %d\n",x,y,result);}}
                else {printf(" exist");}}
int main(){
calculator();
return 0 ;}*/

 /*int printpattern(){
   int i ,j;
    for(i=1;i<=9;i+=2){
        for(j=1;j<=i;j++){
            printf("*");}
        printf("\n");}
    for(i=9;i>=1;i-=2){
        for(j=1;j<=i;j++){
            printf("*");}
        printf("\n");}
   return 0 ; }
int main(){
 int i,j;
  printpattern();
 return 0;}*/

 /*int ResultOfsum(int n){
    int sum=0;
       printf("Enter N:");
       scanf("%d",&n);
    sum= (n*(n+1))/2;
    printf("sum of %d is %d",n,sum);
  return sum;}
int main(){
    int n,sum=0;

  ResultOfsum(n);
 return 0;}*/

/* int ResultOfsum(int n){
    int sum=0,digit;
    int org_n=n;

     while(n!=0){
       digit=n%10;
       sum+=digit;
       n/=10;}
      printf("sum of %d is %d", org_n,sum);
  return sum;}
int main(){
    int n,sum=0;
   printf("Enter N:");
   scanf("%d",&n);
  ResultOfsum(n);
 return 0;}*/

  /*int calcDifference(int smallest,int greatest) {
     return greatest-smallest;}
int main(){int n,smallest,greatest,difference;
     printf("Enter an integer value:");
     scanf("%d",&n);
     smallest=greatest=n;
     for(int i=2;i<=10;i++){
         printf("enter another integer value:");
         scanf("%d",&n);
         if(n<smallest){smallest=n;}
         if(n>greatest){greatest=n;}}
    difference=calcDifference(smallest,greatest);
    printf("smallest value :%d\n",smallest);
    printf("greatest value :%d\n",greatest);
    printf("Difference between greatest and smallest:%d",difference);
     return 0;} */

  /*  int FindTheSum(int n){
      if(n==1){return 1;}
      else{return n+FindTheSum(n-1);}}
 int main(){
    int n;
     printf("enter a positive integer:");
     scanf("%d",&n);
     if(n>0){
        printf("the of the first %d is %d\n",n,FindTheSum(n));}
     else { printf("please enter a positive integer");}
        FindTheSum(n);
     return 0;}*/
 /*int checkprime(int n, int i){
  if(i==1){return 1;}
  else if (n%i==0){return 0;}
  else{return checkprime( n,i-1);}}
int main (){
  int n;
   printf("Enter a positive integer : ");
   scanf("%d",&n);
    if(n<=1){printf("%d  is not  prime num \n  ",n);}
    else{ if(checkprime( n,n/2)==1){
             printf( "%d is prime ",n );}
        else{
            printf("%d is not a prime",n);}}
 return 0;} */
/* void reverseString(char*str){
   if(str=='\0')
    return ;
   reverseString(str+1);
   printf("%c",*str);}

int main(){
  char str[100];
  printf(" enter string:");
  scanf("%s",str);
  printf(" reverse string is %s",str);
  reverseString(str);
  return 0;}*/


  #include <stdio.h>
#include <string.h>

// Function to reverse a string using recursion
void reverseString(char str[], int start, int end) {
    if (start >= end) {
        return;
    }


    char temp = str[start];
    str[start] = str[end];
    str[end] = temp;


    reverseString(str, start + 1, end - 1);
}

int main() {
    char str[100];


    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);


    str[strcspn(str, "\n")] = '\0';

    int length = strlen(str);


    reverseString(str, 0, length - 1);
    printf("Reversed string: %s\n", str);

    return 0;
}














































































































