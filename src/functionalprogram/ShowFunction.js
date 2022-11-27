import RecursiveComponent from './RecursiveComponent'
import first from './nested'
import { DangerButton, SuccessButton } from './partiallyApply'
import Composition from './Composition'

const ShowFunction = () => {
  return (
    <div>
        <RecursiveComponent data={first} />
        <Composition />
        <DangerButton text ="I am partial Danger"/>
        <SuccessButton text ="I am partial Success"/>
    </div>
  )
}

export default ShowFunction