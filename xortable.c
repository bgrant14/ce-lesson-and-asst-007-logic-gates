/*	Name: Brendan Grant
 *	Purpose: 
 */

#include <stdio.h>

int input (int x)
{
		int out = 0;
		if (x > 127)
		{
				printf("1 | ");
				x -= 128;
				out++;
		} else printf("0 | ");
		if (x > 63)
		{
				printf("1 | ");
				x -= 64;
				out++;
		} else printf("0 | ");
		if (x > 31)
		{
				printf("1 | ");
				x -= 32;
				out++;
		} else printf("0 | ");
		if (x > 15)
		{
				printf("1 | ");
				x -= 16;
				out++;
		} else printf("0 | ");
		if (x > 7) 
		{
				printf("1 | ");
				x -= 8;
				out++;
		} else printf("0 | ");
		if (x > 3) 
		{
				printf("1 | ");
				x -= 4;
				out++;
		} else printf("0 | ");
		if (x > 1) 
		{
				printf("1 | ");
				x -= 2;
				out++;
		} else printf("0 | ");
		if (x == 1)
		{
				printf("1 | ");
				x -= 1;
				out++;
		} else printf("0 | ");
		return out;
}

int main (void)
{
		int ones;
		printf ("   | A | B | C | D | E | F | G | H | __Q__ |\n");
		printf ("   |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|\n");
		for (int i = 0; i < 256; i ++)
		{
				printf("   | ");
				ones = input(i);
				if (ones % 2 == 1) printf ("1 |");
				else printf ("0 |");
				printf ("\n");
		}
		return 0;
}
