export enum ExerciseType {
  Duration = 'Barbell',
  Distance = 'Dumbbell',
  Bodyweight = 'Bodyweight',
  Machine = 'Machine',
}

export enum Exercise {
  Bench = 'Bench Press',
  InclineBench = 'Incline Press',
  Press = 'Press',
  CloseGripBench = 'Close Grip Bench Press',
  Dips = 'Dips',
  LateralRaises = 'Lateral Raises',
  DiamondPushUp = 'Diamond Pushups',

  Deadlift = 'Deadlift',
  RDL = 'Romanian Deadlift',
  Squat = 'Squat',
  FrontSquat = 'Front Squat',
  Hyperextensions = 'Hyperextensions',

  Curl = 'Curls',
  InclineCurls = 'Incline Curls',
  TricepExtensions = 'Tricep Extensions',
  HammerCurl = 'Hammer Curls',
  DBSkulls = 'Dumbbell Skullcrushers',

  Row = 'Row',
  DumbbellRow = 'Dumbbell Row',
  Shrugs = 'Shrugs',

  MultiLunge = 'Multi Directional Lunge',
  ReverseLunge = 'Reverse Lunge',
  WalkingLunges = 'Walking Lunges',
  HipThrust = 'Hip Thrusts',
  HipBand = 'Hip Bands Side Steps',

  Facepull = 'Face pulls',
  PullApart = 'Band Pull Aparts',
  HighPulls = 'High Pulls',

  Pullup = 'Pull Ups',
  Chinup = 'Chin Ups',
  Pushup = 'Push Ups',
  Dip = 'Dips',

  CableCrunches = 'Cable Crunches',
  Situp = 'Weighted Sit Up',
  LegRaises = 'Leg Raises',

  PowerClean = 'Power Clean',
  PowerSnatch = 'Power Snatch',

  MileRun = 'Mile Run',
  FiveKmRun = '5k Run',

  DbCarry = 'Dumbbell Carry',
  DbOverheadCarry = 'Dumbbell Ovehead Carry',
}
