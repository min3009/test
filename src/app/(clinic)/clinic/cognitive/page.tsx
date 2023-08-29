// 인지장애 page
import Cognitive_solve from '@/components/clinic/cognitive/cognitive-solve/cognitive-solve'
import Cognitive_depress from '@/components/clinic/cognitive/cognitive-depress/depress'
import Cognitive_autonomic from '@/components/clinic/cognitive/cognitive-autonomic/autonomic'
import Cognitive_solution from '@/components/clinic/cognitive/cognitive-solution/cognitive-solution'
import Cognitive_recommend from '@/components/clinic/cognitive/cognitive-recommend/cognitive-recommend'
import Parkinson_what from '@/components/clinic/parkinson/what-parkinson/what-parkinson'
import Parkinson_notfix from '@/components/clinic/parkinson/parkinson-notfix/parkinson-notfix'
import Parkinson_progress from '@/components/clinic/parkinson/cognitive-stageOfprogress/parkinson-stageOfprogress'
import Stroke_what from '@/components/clinic/stroke/stroke-what/stroke-what'
import Stroke_symptoms from '@/components/clinic/stroke/stroke-symptoms/stroke-symptoms'
import Dementia_what from '@/components/clinic/dementia/dementia-what/dementia-what'
import Dementia_start from '@/components/clinic/dementia/dementia-start/dementia-start'
import Dementia_character from '@/components/clinic/dementia/dementa-characteristic/dementa-characteristic'
import Skull_important from '@/components/clinic/skull/skull-important/skull-important'
import Skull_principle from '@/components/clinic/skull/skull-principle/skull-principle'
import Section_whole from '@/components/clinic/section-common/whole-fix/whole-fix'
import Section_insulance from '@/components/clinic/section-common/insulance/insulance'

export default function Cognitive() {
   return (
      <>
         <Cognitive_solve />
         <Cognitive_depress />
         <Cognitive_autonomic />
         <Cognitive_solution />
         <Cognitive_recommend />
         <Parkinson_what />
         <Parkinson_notfix />
         <Parkinson_progress />
         <Stroke_what />
         <Stroke_symptoms />
         <Dementia_what />
         <Dementia_start />
         <Dementia_character />
         <Skull_important />
         <Skull_principle />
         <Section_whole />
         <Section_insulance />
      </>
   );
}




