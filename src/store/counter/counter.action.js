import { INCREMENT_COUNTER } from "./constants"

export  const counterAction = (count) => {
    return {
        type: INCREMENT_COUNTER,
        payload:count
}
}

