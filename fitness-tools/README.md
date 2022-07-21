# Fitness Tools

## Nutrition

### BMR

```js
import { calculateBMR } from 'fitness-tools';

// bmr from average of all formulas
const bmr = calculateBMR({ weightInLbs, heightInInches, age, gender });

// bmr taking into account person's bodyfat percentage
const bmr = calculateBMR({ weightInLbs, heightInInches, age, gender, bodyFat });

// bmr using particular formula: miffinStJeor | harrisBenedict | katchMcArdle
const bmr = calculateBMR({ weightInLbs, heightInInches, age, gender }, 'harrisBenedict');
```

Note: only the katchMcArdle formula uses the bodyFat metric in its calculation, if not provided it will default to 20% if not specifying a formula to use for the averages

### BMI

```js
import { calculateBMI } from 'fitness-tools';

const bmi = calculateBMI(weightInLbs, heightInInches);
```

### TDEE

```js
import { calculateBMR, calculateTDEE } from 'fitness-tools';

const bmr = calculateBMR({ weightInLbs, heightInInches, age, gender });
const tdee = calculateTDEE(ActivityLevel.LightlyActive, bmr);
```

### Protein

```js
import { calculateMinimumProteinRequirement } from 'fitness-tools';

// protein 1g/lb of bodyweight
const minimumProtein = calculateMinimumProteinRequirement(bodyWeightInLbs);

// protein 1g/lb of LEAN bodyweight
const minimumProtein = calculateMinimumProteinRequirement(bodyWeightInLbs, bodyFatPercentage);

// rounded to nearest 10grams
const minimumProtein = calculateMinimumProteinRequirement(bodyWeightInLbs, bodyFatPercentage, 10);
```

### Helpers

Convert between kgs and lbs.

```js
import { kgToLbs, lbsToKg } from 'fitness-tools';

const bodyWeightInLbs = kgToLbs(weightInKgs);

const bodyWeightInKgs = lbsToKg(weightInLbs);
```

Convert between cm and inches

```js
import { cmToInches, inchesToCm } from 'fitness-tools';

const heightInInches = cmToInches(cms);

const heightInCM = inchesToCm(inches);
```

Convert between feet and inches or cm.

```js
import { feetToInches, inchesToFeet, feetToCms, cmsToFeet } from 'fitness-tools';

const heightInFeet = feetToInches(feet);

const heightInInches = inchesToFeet(inches);

const heightInCm = feetToCms(feet);

const heightInFeet = cmsToFeet(cms);
```

Convert between feet+inches and inches

```js
// some input to inches
const feet = 5;
const inches = 10;
const heightInInches = feetAndInchesToInches(feet, inches)

// back to feet and inches for display
const [feet, inches] = inchestToFeetAndInches(heightInInches);
```

## Weightlifting

### 1RM

```js
import { calculate1RepMax } from 'fitness-tools';

// using average of all formulas
const onerm = calculate1RepMax(weight, reps);

// using a particular formula: epley | brzycki | oconner | lombardi | wathan | mayhem | lander
const onerm = calculate1RepMax(weight, reps, 'epley');
```

### Calculate rep maxes

Manually:

```js
import { calculateThreeRepMax, calculateFiveRepMax, calculateEightRepMax, calculateTenRepMax, calculateTwelveRepMax, calculateFithteenRepMax, calculateTwentyRepMax } from 'fitness-tools';

const onerm = calculate1RepMax(weight, reps);
const threerm = calculateThreeRepMax(onerm);
const fiverm = calculateFiveRepMax(fiverm);
...

```

or pre-grouped:

```js
import {calculateRepMaxes} from 'fitness-tools';

// with average 1RM
const repMaxes = calculateRepMaxes(weight, number);

// with desired 1RM formula
const repMaxes = calculateRepMaxes(weight, number, 'epley');

// repMaxes = { oneRepMax, threeRepMax, fiveRepMax, eightRepMax, tenRepMax, twelveRepMax, fithteenRepMax, twentyRepMax}

```
