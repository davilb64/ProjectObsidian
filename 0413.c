#include<stdio.h>
int main()
{
    int Entrada;
    char Saida[6];

    while (scanf("%d",&Entrada) && Entrada != 2568)
    {
        printf ("Tente de novo\n");
    }
    
    Saida[0] = 103;
    Saida[1] = 120;
    Saida[2] = 112;
    Saida[3] = 106;
    Saida[4] = 102;
    Saida[5] = 106;
    printf("%s\n",Saida);
    
    return 0;
}