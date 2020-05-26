import { useState } from 'react';
import { useStep } from "react-hooks-helper";

const useStepWrapper = (initial) => {
    const { step, navigation } = useStep(initial)
    return function useNavigation(){
        return {
            step, 
            navigation
        }
    }
}

export default useStepWrapper;