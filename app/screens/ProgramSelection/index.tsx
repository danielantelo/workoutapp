import { useState } from 'react';
import { DefaultLayout } from '../../components/Layouts';
import { Loader } from '../../components/Loader';
import { WeekDay } from '../../domain/constants';
import { getTraineeMetrics, getTraineeRecommendations, useActiveProgram, useTrainee } from '../../domain/trainee';
import { Destination, RoutingButton } from '../../utils/routing';
import { Comparison } from './Comparison';
import { NutritionRecommendation } from './NutritionRecommendation';
import { ProgramRecommendation } from './ProgramRecommendation';

export default function ProgramSelection() {
  const [program, setProgram] = useState<string>();
  const { trainee, traineeLoaded, updateTrainee } = useTrainee();
  const { initialiseProgram } = useActiveProgram();

  if (!traineeLoaded) {
    return <Loader />;
  }

  const traineeMetrics = getTraineeMetrics(trainee!);
  const { recommendedNutrition, recommendedPrograms, speedTargets, liftTargets, bodyFatTarget } = getTraineeRecommendations(
    trainee!,
    traineeMetrics
  );

  return (
    <DefaultLayout>
      <Comparison trainee={trainee!} traineeMetrics={traineeMetrics} />
      <NutritionRecommendation trainee={trainee!} updateTrainee={updateTrainee} recommendedNutrition={recommendedNutrition} />
      <ProgramRecommendation
        trainee={trainee!}
        traineeMetrics={traineeMetrics}
        recommendedPrograms={recommendedPrograms}
        speedTargets={speedTargets}
        liftTargets={liftTargets}
        bodyFatTarget={bodyFatTarget}
        program={program!}
        setProgram={setProgram}
      />
      <RoutingButton
        to={Destination.Dashboard}
        onPress={() => initialiseProgram(program!, traineeMetrics.strengthLevel, WeekDay[trainee!.preferredWeekStart])}
      >
        {'Lets Go!'}
      </RoutingButton>
    </DefaultLayout>
  );
}
