# CPE 1040 - Spring 2020
```
  _           _       _   _       _       _                 _    
 | |         | |     | \ | |     | |     | |               | |   
 | |     __ _| |__   |  \| | ___ | |_ ___| |__   ___   ___ | | __
 | |    / _` | '_ \  | . ` |/ _ \| __/ _ \ '_ \ / _ \ / _ \| |/ /
 | |___| (_| | |_) | | |\  | (_) | ||  __/ |_) | (_) | (_) |   < 
 |______\__,_|_.__/  |_| \_|\___/ \__\___|_.__/ \___/ \___/|_|\_\
                                                                                                                      
```
Art acknowledgement: [taag](http://patorjk.com/software/taag/)
---

**NOTE:** 
1. This lesson & assignment [README](README.md) is _intentionally_ blank, to be used as the Lab Notebook for the study & submission. _It is a great aid for your study and the main component of your submission._
2. Read and follow the [lesson-and-assignment](lesson-and-assignment.md).
2. Refer to the [submission template](submission-template.md) for formatting expectations and examples. 
4. Refer to the [criteria and guide](criteria-and-guide.md) for the different components of your submission.
---
## Section 1: AND, OR, and NOT gates from NPN transistors
1. The following truth tables show DeMorgan's Law:

   | A        | B        | A'       | B'       | A' * B'  | (A + B)' | A' * B' -> (A + B)' |
   |:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|
   | 0        | 0        | 1        | 1        | 1        | 1        | True     |
   | 0        | 1        | 1        | 0        | 0        | 0        | True     |
   | 1        | 0        | 0        | 1        | 0        | 0        | True     |
   | 1        | 1        | 0        | 0        | 0        | 0        | True     |

   | A        | B        | A'       | B'       | A' + B'  | (A * B)' | A' + B' -> (A * B)' |
   |:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|
   | 0        | 0        | 1        | 1        | 1        | 1        | True     |
   | 0        | 1        | 1        | 0        | 1        | 1        | True     |
   | 1        | 0        | 0        | 1        | 1        | 1        | True     |
   | 1        | 1        | 0        | 0        | 0        | 0        | True     |


1. In this experiment, two basic gates were built out of NPN transistors -- an inverter and an OR gate.

   _Inverter_

   The design I followed for the inverter has one NPN transistor with a 1kΩ resistor connecting the +5V line to the collector, this same resistor also powers an LED that is connected directly to ground. The base of the transistor is connected to the power line through a 1kΩ resistor and a button. The emitter is connected directly to ground. When the button is not pressed the base is not powered, so this circuit lights an LED (the "0" input causes the output to be "1") because the path for current has much less resistance going through the LED to ground than through the transistor to ground. When the base of the transistor is powered by pushing the button, the LED flips off ("1" becomes "0") because the path through the transistor essentially has no resistance, shorting the LED.

   _OR Gate_

   Using my understanding of the transistors and the experience with the inverter from the previous part of this experiment, I designed an OR gate using two transistors. In my design, the collectors for both transistors are connected to power through 1kΩ resistors, the bases are connected to either input (A and B), and both emitters are connected to ground through the same LED. When neither of the input buttons are pressed, no current can make it through the transistors to power the LED (0+0 = 0). When either or both of the inputs are pressed, powering the bases, the transistors create a path for current through the LED to the ground (0+1 = 1+0 = 1+1 = 1).

   ![alt text](images/OR-NPN-design.png)

   _Automating Inputs_

   To automatically cycle through 2^2 = 4 possible inputs, a short program was written for the microbit to cause A and B to cycle through 00, 01, 10, and 11. These variables to were used to set the digital write pins 12 and 14, which were in turn connected through the LLC to the bases of the transistors.

2. [1.2.2 Inverter](https://i.imgur.com/vnHR0Iu.mp4)
3. [1.2.3 OR Gate](https://i.imgur.com/MP3CHD3.mp4)
4. [1.2.5 Automated Input](https://i.imgur.com/MmYteJX.mp4)

## Section 2: Drive and Read NPN Based Gates

1. In this experiment I constructed an OR gate an and AND gate using NPN transistors. In contrast to the OR gate, the AND gate was constructed using the transistors in series, rather than parallel. So, the emitter of the first transistor was connected to the collector of the next. All of the resistors from the previous experiment were initially replaced with 10kΩ resistors, however the 10kΩ resistor could not be used at the collector when driving input to the microbit, as explained below.

   As was the case in previous experiments, I had issues with my LLC and I used a voltage divider to drive input to the microbit instead. I connected a 220Ω resistor to the collector of my transistors and a 330Ω resistor in between the output and the ground. I connected this to my multimeter first in order to verify that it was outputting approximately 3V, before using it as input for my microbit.
2. With the voltage divider, the gate was outputting between 0V and 2.97V. The program mapped 0V to 0 brightness and 2.97V to full (255) brightness.
3. The OR gate appears to be operating properly, as the output LED on the microbit shows the correct result. The output LED also appears to be the same brightness regardless of whether the input is 01/10 or 11, indicating a digital result.

   The AND gate gives slightly erroneous output when being read as an analog input. When the output is 10, the output LED comes on dimly and the voltage being read is 0.11V instead of 0. With the output of 11, the voltage is 3.25V and the output LED is fully illuminated. In the case where there is an erroneous signal, the pin being powered connects to the second transistor in the series, indicating that closing this switch causes some voltage leak from an unknown source.

_Due to time constraints, I have not included all of the gates for each section._
4. [2.2.4 OR Gate]()
   [2.2.4 AND Gate]()
5. [2.2.5 AND Gate]()

## Section 3: Logic Gate ICs

