#include <stdio.h>

void pyramid(int n);

int main(void)
{
    pyramid(4);
    /*
    Prints out:
       #
      ##
     ###
    ####
    */
}

void pyramid(int n)
{
    for (int i = n; i > 0; i--)
    {
        // We add spaces minus one to give room for the upcoming #s.
        for (int j = 0; j < i - 1; j++)
        {
            printf(" ");
        }
        // Hard to explain with words. It's 12 am.
        // Let's use an example. Let's say 4 is n.
        // 0 < 4 - (4 - 1) = 0 < 1. True only one time. (1 # added to the end of spaces)
        // 1 < 4 - (3 - 1) = 0 < 2. True only two times. (2 # added to the end of spaces, 0 is started again for x because it's another row)
        // 2 < 4 - (2 - 1) = 0 < 3. True only three times. (3 # added to the end of spaces)
        // 3 < 4 - (1 - 1) = 0 < 4. True only four times. (4 # added to the end of spaces). Thus, the pyramid is born.
        for (int x = 0; x < n - (i - 1); x++)
        {
            printf("#");
        }
        printf("\n");
    }
}