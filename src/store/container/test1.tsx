import Test1 from '../../view/test1'
import * as actions from '../actions'
import { StoreState } from '../types'
import { connect, Dispatch } from 'react-redux'

export function mapStateToProps({ demo: { enthusiasmLevel, languageName } }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
  }

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Test1)