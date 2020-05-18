/*	Name: Brendan Grant
 *	Purpose: 
 */

#include <stdio.h>

void input (int x)
{
		if (x > 127)
		{
				printf("1 | ");
				x -= 128;
		} else printf("0 | ");
		if (x > 63)
		{
				printf("1 | ");
				x -= 64;
		} else printf("0 | ");
		if (x > 31)
		{
				printf("1 | ");
				x -= 32;
		} else printf("0 | ");
		if (x > 15)
		{
				printf("1 | ");
				x -= 16;
		} else printf("0 | ");
		if (x > 7) 
		{
				printf("1 | ");
				x -= 8;
		} else printf("0 | ");
		if (x > 3) 
		{
				printf("1 | ");
				x -= 4;
		} else printf("0 | ");
		if (x > 1) 
		{
				printf("1 | ");
				x -= 2;
		} else printf("0 | ");
		if (x == 1)
		{
				printf("1 | ");
				x -= 1;
		} else printf("0 | ");
}

int main (void)
{
		printf ("   | A | B | C | D | E | F | G | H | __Q__ |\n");
		printf ("   |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|\n");
		for (int i = 0; i < 256; i ++)
		{
				printf("   | ");
				input(i);
				if (i == 0) printf ("1 |");
				else printf ("0 |");
				printf ("\n");
		}
		return 0;
}
