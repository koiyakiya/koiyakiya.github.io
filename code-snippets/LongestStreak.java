public class LongestStreak {
    public static void main(String[] args) {
        System.out.println(getLongestStreak("caaaaaat")); // prints 'a' - 6 instances

    }

    public static String getLongestStreak(String str) {
        if (str.isEmpty()) return "";

        // add a null so we can use strings like "aaaaa" that have no change in char
        str += '\u0000';

        int currentStreak = 0;
        int maxStreak = 0;
        char maxStreakChar = '\u0000';

        // start of the streak
        int leftPointer = 0;

        // rightPointer represents the end of the streak
        for (int rightPointer = 0; rightPointer < str.length(); rightPointer++) {
            // if the current character is not the recurring character in the streak
            if (str.charAt(rightPointer) != str.charAt(leftPointer)) {
                // the difference between the end and the start is the count
                currentStreak = rightPointer - leftPointer;

                // if the current streak/count is greater than the max streak (at the start this is always true)
                if (currentStreak > maxStreak) {
                    maxStreak = currentStreak;

                    // sets the max streak char to the streak's recurring character
                    maxStreakChar = str.charAt(leftPointer);
                }

                // sets the start of the streak to the current index
                leftPointer = rightPointer;
            }
        }

        return "'" + maxStreakChar + "' - " + maxStreak + " instances";
    }
}