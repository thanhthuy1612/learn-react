//Higher Order Function (HOF): là function mà nhận vào đối số là function hoặc return về function.
//Higher Order Component (HOC): là một function nhận vào một component và return về mổ function.
//HOC phổ biến trong các thư viện Reaxt:
//"connect(mapstateToProps, mapDispatchToProps)(UserPage)"P: reaxt-redux
//"withRouter(UserPage)": react-router

import { debug } from './constant'

//"withStyles(styles)(UserPage)": material-ui
export default function connect(Component) {
  return function NewComponent(props) {
    return <Component {...props} debug={debug} />
  }
}
